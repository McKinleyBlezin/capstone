import React, { useEffect, useState } from "react";
import { Card } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Products({ cart, updateCart, products, setProducts }) {
  const navigate = useNavigate();
  //Have a use Effect to gab all data for products from API
  // useEffect(() => {
  //   async function fetchProducts() {
  //     try {
  //       const response = await fetch("https://fakestoreapi.com/products");
  //       const result = await response.json();
  //       setProducts(result);
  //       console.log(result);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }

  //   //Calling the products to show
  //   fetchProducts();
  // }, [cart]);

  function addToCart(product) {
    const item = {
      ...product,
      quantity: 1,
    };

    updateCart([...cart, item]);
  }

  return (
    <>
      {products.map((product) => (
        <ul className="card" key={product.id}>
          <ul>
            {" "}
            {product.title}
            <p>${product.price}</p>
            <br />
            Customer Rating's {product.rating.rate} out of 5 star
            <br />
            <button
              className="view-product"
              type="button"
              onClick={() => {
                navigate(`/Products/${product.id}`);
              }}
            >
              View Product
            </button>
            <button
              className="add-to-cart"
              type="button"
              onClick={() => addToCart(product)}
            >
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
