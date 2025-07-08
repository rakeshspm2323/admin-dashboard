import { getListings, updateListingStatus, editListing } from "../../lib/data";

export default function handler(req, res) {
  if (req.method === "GET") {
    return res.json(getListings());
  }

  if (req.method === "POST") {
    const { id, action, car } = req.body;
    if (action === "approve" || action === "reject") {
      updateListingStatus(id, action);
    } else if (action === "edit" && car) {
      editListing(id, car);
    }
    return res.json({ success: true });
  }

  res.status(405).end();
}
