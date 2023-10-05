import React, { useEffect, useState } from "react";
import { Card } from "@mui/material";
import { useParams } from "react-router-dom";

export default function SingleProduct(cart, updateCart) {
  const [singleProduct, setSingleProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    async function fetchSingleProduct() {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const product = await response.json();
        //Calling for all Single Product
        setSingleProduct(product);
      } catch (error) {
        console.error(error);
      }
    }
    // Calling the fetchSingleProduct function for each product ID
    fetchSingleProduct();
  }, [id]);

  function addToCart(singleProduct) {
    const item = {
      ...singleProduct,
      quantity: 1,
    };

    updateCart([...cart, item]);
  }

  return (
    <>
      {singleProduct && (
        <div className="singlecard">
          <div>
            {singleProduct.title}
            <br />${singleProduct.price}
            <br />
            Customer Rating: {singleProduct.rating.rate} out of 5 stars
          </div>
          <div>
            <img src={singleProduct.image} alt="" width="100" />
            Product Description: {singleProduct.description}
          </div>
          <button
            className="add-to-cart"
            type="button"
            onClick={() => addToCart(SingleProduct)}
          >
            Add To Cart
          </button>
        </div>
      )}
    </>
  );
}
