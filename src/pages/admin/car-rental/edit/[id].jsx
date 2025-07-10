import Layout from "@/components/admin/Layout";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Edit() {
  const router = useRouter();
  const { id } = router.query;
  const [car, setCar] = useState("");

  useEffect(() => {
    fetch("/api/listings")
      .then(res => res.json())
      .then(data => {
        const listing = data.find(l => l.id === Number(id));
        if (listing) setCar(listing.car);
      });
  }, [id]);

  const handleSave = async () => {
    await fetch("/api/listings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: Number(id), action: "edit", car }),
    });
    router.push("/admin/car-rental/management");
  };

  return (
    <Layout>
      <div className="md:px-5 px-0 pt-5 text-black">
        <h1 className="text-[18px] font-bold mb-4">Car Rental Edit Management</h1>
        <div className="border-l-2 border-teal-700 bg-white/30 backdrop-blur-lg rounded-lg shadow-md mt-5 text-black">
        <div className="pl-5 py-5">
            <p className="font-semibold text-[16px]">Edit Listing</p>
        </div>
        <div className="h-36 overflow-y-auto px-5">
            <input className="p-2 mb-8 block w-full rounded-md text-black border outline-none  shadow-sm ring-inset placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-orange-400" value={car} onChange={(e) => setCar(e.target.value)} />
            <button onClick={handleSave} className="bg-black/80 text-white px-4 py-2 rounded w-full cursor-pointer">Save</button>
        </div>
        </div>
        </div>
    </Layout>
  );
}
