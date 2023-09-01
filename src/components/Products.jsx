import React, { useEffect, useState } from "react";

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
      <p>Products</p>
      {products.map((product) => (
        <ul>
          <ul>{product.title}</ul>

          <ul>{product.price}</ul>
          <ul> Customer Rating's {product.rating.rate} out of 5 stars</ul>
          <img src={product.image} alt="" width="100" />
          {/* <ul>{product.description}</ul> */}
        </ul>
      ))}
    </>
  );
}
