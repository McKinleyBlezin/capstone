import React, { useEffect, useState } from "react";
import { Card } from "@mui/material";
export default function Products() {
  const [products, setProducts] = useState([]);

  //Have a use Effect to gab all data for products from API
  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const result = await response.json();
        setProducts(result);
      } catch (error) {
        console.log(error);
      }
    }

    //calling the products to show
    fetchProducts();
  }, []);
  console.log(products);
  return (
    <>
      {products.map((product) => (
        <ul className="card">
          <ul>
            {" "}
            {product.title}
            <p>${product.price}</p>
            <br />
            Customer Rating's {product.rating.rate} out of 5 stars
            <br />
            <button>View Product</button>
            <button>Add To Cart</button>
          </ul>
          <ul>
            <img src={product.image} alt="" width="100" />
            <p>{product.description}</p>
          </ul>
        </ul>
      ))}
    </>
  );
}
