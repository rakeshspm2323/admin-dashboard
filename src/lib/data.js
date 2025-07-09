let listings = [
  { id: 1, car: "Honda Civic", status: "pending" },
  { id: 2, car: "Toyota Corolla", status: "pending" },
  { id: 3, car: "BMW X5", status: "pending" },
  { id: 4, car: "Sedan", status: "pending" },
  { id: 5, car: "Innova Crysta", status: "pending" },
  { id: 6, car: "Mercedes-Benz", status: "pending" },
  { id: 7, car: "Honda Civic", status: "pending" },
  { id: 8, car: "Toyota Corolla", status: "pending" },
  { id: 9, car: "BMW X5", status: "pending" },
  { id: 10, car: "Sedan", status: "pending" },
  { id: 11, car: "Innova Crysta", status: "pending" },
  { id: 12, car: "Mercedes-Benz", status: "pending" },
];

export function getListings() {
  return listings;
}

export function updateListingStatus(id, status) {
  listings = listings.map(listing =>
    listing.id === id ? { ...listing, status } : listing
  );
}

export function editListing(id, car) {
  listings = listings.map(listing =>
    listing.id === id ? { ...listing, car } : listing
  );
}
