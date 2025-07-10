// import { authenticate } from "../../lib/auth";

// export default function handler(req, res) {
//   const { username, password } = req.body;
//   if (authenticate(username, password)) {
//     res.status(200).json({ success: true });
//   } else {
//     res.status(401).json({ error: "Invalid credentials" });
//   }
// }


import { authenticate } from "../../lib/auth";

export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { username, password } = req.body;

  if (authenticate(username, password)) {
    // Set a simple auth cookie (replace with JWT or session token in production)
    res.setHeader("Set-Cookie", `auth=true; Path=/; HttpOnly; Secure; SameSite=Strict; Max-Age=86400`);
    res.status(200).json({ success: true });
  } else {
    res.status(401).json({ error: "Invalid credentials" });
  }
}
