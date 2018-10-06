import React from "react";
import Container from "../Grid/Container"

const ProductCard = ({ children }) => (
  
  <Container>
  <div
    style={{ height: 286, width: 180, textAlign: "center" }}
    className="card"
  >
    {children}
  </div>
  </Container>
);

export default ProductCard;
