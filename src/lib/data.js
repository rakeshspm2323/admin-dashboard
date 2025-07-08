let listings = [
  { id: 1, car: "Honda Civic", status: "pending" },
  { id: 2, car: "Toyota Corolla", status: "pending" },
  { id: 3, car: "BMW X5", status: "pending" },
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
