import { useEffect, useState } from "react";
import ListingTable from "../components/ListingTable";

export async function getServerSideProps(context) {
  // Add session or cookie-based auth check here
  return { props: {} };
}

export default function Dashboard() {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    fetch("/api/listings").then(res => res.json()).then(setListings);
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Car Rental Listings</h1>
      <ListingTable listings={listings} refresh={() => fetch("/api/listings").then(res => res.json()).then(setListings)} />
    </div>
  );
}
