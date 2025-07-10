// pages/api/account/status.js

export default function handler(req, res) {
  const cookie = req.headers.cookie || "";
  const isAuthenticated = cookie.includes("auth=true");

  res.status(200).json({ authenticated: isAuthenticated });
}
