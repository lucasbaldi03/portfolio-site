const TOKEN_URL = "https://accounts.spotify.com/api/token";
const NOW_PLAYING_URL =
  "https://api.spotify.com/v1/me/player/currently-playing";
const RECENT_URL =
  "https://api.spotify.com/v1/me/player/recently-played?limit=1";

function basicAuth() {
  const id = process.env.SPOTIFY_CLIENT_ID;
  const secret = process.env.SPOTIFY_CLIENT_SECRET;
  if (!id || !secret) throw new Error("Spotify creds ausentes no .env");
  return "Basic " + Buffer.from(`${id}:${secret}`).toString("base64");
}

export async function refreshAccessToken(refreshToken: string) {
  const res = await fetch(TOKEN_URL, {
    method: "POST",
    headers: {
      Authorization: basicAuth(),
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: refreshToken,
    }),
    cache: "no-store",
  });
  if (!res.ok) throw new Error(`refresh falhou: ${res.status}`);
  return (await res.json()) as {
    access_token: string;
    expires_in: number;
    scope: string;
    token_type: string;
  };
}

export type NowPlaying = {
  isPlaying: boolean;
  title: string;
  artist: string;
  album: string;
  albumArt: string | null;
  url: string;
  playedAt?: string;
};

export async function getNowPlaying(): Promise<NowPlaying | null> {
  const refresh = process.env.SPOTIFY_REFRESH_TOKEN;
  if (!refresh) return null;

  const { access_token } = await refreshAccessToken(refresh);

  const nowRes = await fetch(NOW_PLAYING_URL, {
    headers: { Authorization: `Bearer ${access_token}` },
    cache: "no-store",
  });

  if (nowRes.status === 200) {
    const data = await nowRes.json();
    if (data?.item) {
      return {
        isPlaying: !!data.is_playing,
        title: data.item.name,
        artist: data.item.artists.map((a: { name: string }) => a.name).join(", "),
        album: data.item.album?.name ?? "",
        albumArt: data.item.album?.images?.[0]?.url ?? null,
        url: data.item.external_urls?.spotify ?? "",
      };
    }
  }

  // fallback: última música ouvida
  const recentRes = await fetch(RECENT_URL, {
    headers: { Authorization: `Bearer ${access_token}` },
    cache: "no-store",
  });
  if (!recentRes.ok) return null;
  const recent = await recentRes.json();
  const item = recent?.items?.[0];
  if (!item) return null;
  return {
    isPlaying: false,
    title: item.track.name,
    artist: item.track.artists
      .map((a: { name: string }) => a.name)
      .join(", "),
    album: item.track.album?.name ?? "",
    albumArt: item.track.album?.images?.[0]?.url ?? null,
    url: item.track.external_urls?.spotify ?? "",
    playedAt: item.played_at,
  };
}
