import React, { useEffect, useState } from "react";
import { Card } from "@mui/material";
import SingleProduct from "./SingleProduct";
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

    //Calling the products to show
    fetchProducts();
  }, []);

  return (
    <>
      {products.map((product) => (
        <ul className="card">
          <ul>
            {" "}
            {product.title}
            <p>${product.price}</p>
            <br />
            Customer Rating's {product.rating.rate} out of 5 star
            <br />
            <button /*
              className="view-product"
              type="button"
              onClick={SingleProduct}
            */
            >
              View Product
            </button>
            <button /*className="add-to-cart" type="button" onClick={Cart}*/>
              Add To Cart
            </button>
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
