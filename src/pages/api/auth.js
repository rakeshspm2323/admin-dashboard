import { authenticate } from "../../lib/auth";

export default function handler(req, res) {
  const { username, password } = req.body;
  if (authenticate(username, password)) {
    res.status(200).json({ success: true });
  } else {
    res.status(401).json({ error: "Invalid credentials" });
  }
}
