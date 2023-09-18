import React, { useEffect, useState } from "react";
import { Card } from "@mui/material";
import { useParams } from "react-router-dom";

export default function SingleProduct() {
  const [singleProduct, setSingleProduct] = useState();
  const { id } = useParams();

  useEffect(() => {
    async function fetchSingleProduct() {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const result = await response.json();
        setProducts(result);
      } catch (error) {
        console.log(error);
      }
    }

    //calling the products to show
    fetchSingleProdct();
    console.log(fetchSingleProduct);
  }, []);

  return (
    <>
      {singleProduct.map((product) => (
        <ul className="card">
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
