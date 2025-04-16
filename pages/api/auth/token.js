// pages/api/auth/token.js
import cookie from "cookie";

export default function handler(req, res) {
  const cookies = cookie.parse(req.headers.cookie || "");
  if (!cookies.tw_oauth) {
    return res.status(401).json({ error: "not_authenticated" });
  }
  // Return the stored token JSON back to the sidebar app
  res.json(JSON.parse(cookies.tw_oauth));
}