import App from "../App";
import React, { useEffect, useState } from "react";
import { Card } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Checkout({ cart, setCart }) {
  useEffect(() => {
    const cart = async () => {
      const response = await fetch("https://fakestoreapi.com/carts");
      const result = await response.json();
      setCart(result);
    };

    cart();
  }, []);
  return (
    <>
      <h1>Checkout Below</h1>

      <div className="checkout-card1">
        <div>
          <div className="col-mid-3">
            <div>
              <label htmlFor="">First Name: </label>
              <input type="text" name="firstname" className="form-control" />
            </div>
            <div>
              <label htmlFor="">Last Name: </label>
              <input type="text" name="lastname" className="form-control" />
            </div>
            <div>
              <label htmlFor=""> Phone Number: </label>
              <input type="text" name="phone" className="form-control" />
            </div>
            <div>
              <label htmlFor="">Email Address: </label>
              <input type="text" name="email" className="form-control" />
            </div>
            <div>
              <label htmlFor="">Full Address </label>
              <textarea rows="3" className="form-control"></textarea>
              <div>
                <label htmlFor="">City </label>
                <input type="text" name="city" className="form-control" />
                <div>
                  <label htmlFor="">State </label>
                  <input type="text" name="state" className="form-control" />
                  <div>
                    <label htmlFor="">Zip Code </label>
                    <input
                      type="text"
                      name="zipcode"
                      className="form-control"
                    />
                    <div className="form-group mb-3">
                      <div htmlFor="">
                        <button type="button" className="btn btn-primary">
                          Place Order
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="checkout-card2">
        <table>
          <thead>
            <tr>
              <th width="50%">Product</th>
              <th>Price</th>
              <th>Qty</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>shirt</td>
              <td>200</td>
              <td>2</td>
              <td>400</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
