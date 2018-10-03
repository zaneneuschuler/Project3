import React from "react";

const ProductCard = ({ children }) => (
  <div
    style={{ height: 286, width: 180, textAlign: "center" }}
    className="card"
  >
    {children}
  </div>
);

export default ProductCard;
