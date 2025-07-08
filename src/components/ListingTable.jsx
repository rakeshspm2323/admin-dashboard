import Link from "next/link";

export default function ListingTable({ listings, refresh }) {
  const handleAction = async (id, action) => {
    await fetch("/api/listings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, action }),
    });
    refresh();
  };

  return (
    <table className="w-full border">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2">Car</th>
          <th className="p-2">Status</th>
          <th className="p-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {listings.map(listing => (
          <tr key={listing.id} className="border-t">
            <td className="p-2">{listing.car}</td>
            <td className="p-2 capitalize">{listing.status}</td>
            <td className="p-2 space-x-2">
              <button onClick={() => handleAction(listing.id, "approve")} className="text-green-600">Approve</button>
              <button onClick={() => handleAction(listing.id, "reject")} className="text-red-600">Reject</button>
              <Link href={`/edit/${listing.id}`} className="text-blue-600">Edit</Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
