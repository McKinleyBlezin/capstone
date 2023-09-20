import React, { useEffect, useState } from "react";
import { Card } from "@mui/material";
import { useParams } from "react-router-dom";

export default function SingleProduct() {
  const [singleProduct, setSingleProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    async function fetchSingleProduct() {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const product = await response.json();

        setSingleProduct(product); // This should call a single product ... do I need to add an ID in that?
      } catch (error) {
        console.error(error);
      }
    }
    // Calling the fetchSingleProduct function
    fetchSingleProduct();
  }, [id]);

  return (
    <>
      {singleProduct.map((product) => (
        <ul className="singlecard">
          <ul>
            {product.title}
            <br />${product.price}
            <br />
            Customer Rating's {product.rating.rate} out of 5 stars
          </ul>
          <ul>
            <img src={product.image} alt="" width="100" />
            Product Description: {product.description}
          </ul>
        </ul>
      ))}
    </>
  );
}
