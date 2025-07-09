import { useEffect, useState } from "react";
import Link from "next/link";

export default function ListingTable() {
  const [listings, setListings] = useState([]);

  const fetchListings = async () => {
    const res = await fetch("/api/listings");
    const data = await res.json();
    setListings(data);
  };

  useEffect(() => {
    fetchListings();
  }, []);

  const handleAction = async (id, action) => {
    await fetch("/api/listings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, action }),
    });
    fetchListings();
  };

  return (
    <div className="table-container w-full mb-5 overflow-x-auto">
      <table className="w-full border-collapse border text-center text-para">
        <thead>
          <tr className=" bg-black text-white">
            <th className="border-t border-l px-2 font-semibold border-r w-40">
              Car
            </th>
            <th className="border-t border-l px-2 font-semibold border-r w-40">
              Status
            </th>
            <th className="border-t border-l px-2 font-semibold border-r w-40">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="bg-white text-black">
          {listings.map((item) => (
            <tr key={item.id}>
              <td className="border-t border-l border-r px-2 py-2 border-b capitalize text-nowrap">
                {item.car}
              </td>
              <td className="border-t border-l border-r px-2 py-2 border-b capitalize text-nowrap">
                {item.status}
              </td>
              <td className="border-t border-l border-r px-2 py-2 border-b space-x-3 text-nowrap">
                <button
                  onClick={() => handleAction(item.id, "approve")}
                  className="text-green-600"
                >
                  Approve
                </button>
                <button
                  onClick={() => handleAction(item.id, "reject")}
                  className="text-red-600"
                >
                  Reject
                </button>
                <Link href={`/admin/car-rental/edit/${item.id}`} className="text-blue-600">
                  Edit
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
