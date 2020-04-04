import React from "react";


const Property = () => {

  const listings = ["first", "second", "third"];

  return (
    <div>
      this.listings = listings.map((item, key) =>
    <li key={listings.id}>{listings.name}</li>
      );
    </div>
  );
}



export default Property;