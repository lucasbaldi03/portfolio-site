import { NextResponse } from "next/server";

export async function GET() {
  const clientId = process.env.SPOTIFY_CLIENT_ID;
  const redirectUri = process.env.SPOTIFY_REDIRECT_URI;
  if (!clientId || !redirectUri) {
    return NextResponse.json(
      { error: "SPOTIFY_CLIENT_ID ou SPOTIFY_REDIRECT_URI ausentes no .env" },
      { status: 500 },
    );
  }
  const scope = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
  ].join(" ");
  const url = new URL("https://accounts.spotify.com/authorize");
  url.searchParams.set("response_type", "code");
  url.searchParams.set("client_id", clientId);
  url.searchParams.set("scope", scope);
  url.searchParams.set("redirect_uri", redirectUri);
  return NextResponse.redirect(url.toString());
}
