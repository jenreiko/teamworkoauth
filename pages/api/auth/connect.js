// pages/api/auth/connect.js

export default function handler(req, res) {
  // Build the redirect URI (where Teamwork will send the code back)
  const redirectUri = encodeURIComponent(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/callback`
  );

  // Teamwork’s OAuth authorize endpoint
  const authUrl =
    `https://foxcove.teamwork.com/launchpad/signin/oauth/authorize` +
    `?client_id=${process.env.TEAMWORK_CLIENT_ID}` +
    `&redirect_uri=${redirectUri}` +
    `&response_type=code`;

  // Redirect the popup into Teamwork’s login/consent screen
  res.redirect(authUrl);
}