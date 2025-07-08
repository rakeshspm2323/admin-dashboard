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
    router.push("/dashboard");
  };

  return (
    <div className="p-6">
      <h1 className="text-xl mb-4">Edit Listing</h1>
      <input className="border p-2 mb-3 w-full" value={car} onChange={(e) => setCar(e.target.value)} />
      <button onClick={handleSave} className="bg-blue-500 text-white px-4 py-2 rounded">Save</button>
    </div>
  );
}
