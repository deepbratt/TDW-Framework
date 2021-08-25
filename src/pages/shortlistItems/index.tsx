import React from "react";
import CarsListing from "../carsListing";

export interface ShortlistItemProps {}

const ShortlistItem: React.FC<ShortlistItemProps> = () => {
  return (
    <CarsListing isShortlist={true} />
  );
};

export default ShortlistItem;
