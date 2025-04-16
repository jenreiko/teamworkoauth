// pages/api/auth/callback.js
import fetch from "node-fetch";
import cookie from "cookie";

export default async function handler(req, res) {
  const { code } = req.query;

  // Exchange code for tokens
  const tokenRes = await fetch(
    "https://foxcove.teamwork.com/launchpad/signin/oauth/token",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        grant_type:    "authorization_code",
        client_id:     process.env.TEAMWORK_CLIENT_ID,
        client_secret: process.env.TEAMWORK_CLIENT_SECRET,
        redirect_uri:  `${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/callback`,
        code
      })
    }
  );
  const tokenJson = await tokenRes.json();

  // Store the token JSON in an HTTP‑only cookie so our app can later read it
  res.setHeader(
    "Set-Cookie",
    cookie.serialize("tw_oauth", JSON.stringify(tokenJson), {
      httpOnly: true,
      secure:   true,
      sameSite: "None",
      path:     "/"
    })
  );

  // Close the popup
  res.send(`<script>window.close()</script>`);
}