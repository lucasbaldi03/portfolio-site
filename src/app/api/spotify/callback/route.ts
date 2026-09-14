import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const code = req.nextUrl.searchParams.get("code");
  if (!code) {
    return NextResponse.json({ error: "sem code" }, { status: 400 });
  }
  const id = process.env.SPOTIFY_CLIENT_ID;
  const secret = process.env.SPOTIFY_CLIENT_SECRET;
  const redirectUri = process.env.SPOTIFY_REDIRECT_URI;
  if (!id || !secret || !redirectUri) {
    return NextResponse.json(
      { error: "Spotify creds ausentes no .env" },
      { status: 500 },
    );
  }
  const auth =
    "Basic " + Buffer.from(`${id}:${secret}`).toString("base64");
  const tokenRes = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      Authorization: auth,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "authorization_code",
      code,
      redirect_uri: redirectUri,
    }),
    cache: "no-store",
  });
  const json = await tokenRes.json();
  if (!tokenRes.ok) {
    return NextResponse.json({ error: json }, { status: tokenRes.status });
  }
  // Retorna o refresh_token pra você copiar e colar no .env.local
  return new NextResponse(
    `<html><body style="font-family:system-ui;padding:32px;max-width:640px;margin:auto;background:#0a0a0a;color:#eee">
       <h1 style="color:#38bdf8">Spotify conectado ✓</h1>
       <p>Copie o valor abaixo e cole em <code>.env.local</code>:</p>
       <p><code style="background:#111;padding:6px 10px;border-radius:6px">SPOTIFY_REFRESH_TOKEN=${json.refresh_token}</code></p>
       <p style="opacity:.7;font-size:12px">Depois reinicie o dev server.</p>
     </body></html>`,
    { headers: { "Content-Type": "text/html; charset=utf-8" } },
  );
}
