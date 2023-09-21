import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AppContext from "../Context/AppContext";
import '../CSS/Modal.css'
export default function Modal() {
  const context = useContext(AppContext);
  const {setCart,cart} = context;
  const clearCart = async() => {
    await setCart(cart.splice(0, cart.length)) //Emptying an array
    localStorage.setItem('cart',JSON.stringify(cart))
  };
  return (
    <>
      <div className="modalWrapper" id="modalWrapper"></div>
      <div  id="modalContainer" className="modalContainer bg-white displayFlex" style={{borderRadius:"18px" }}>
        <div className="displayFlex w-100 h-50" style={{ fontSize: "75px" }}>
          <i
            className="fa-regular fa-circle-check fa-beat-fade fa-2xl"
            style={{ color: "#11df55" }}
          ></i>
        </div>
        <h2 className="displayFlex fonts">Payment Successful</h2>

        <h6 className="displayFlex fonts text-center">
          Thank you for ordering . Your payment is successfully completed.
        </h6>
        <div className="displayFlex my-3">
          <button
            type="button"
            className="btn btn-warning btn-lg"
            onClick={clearCart}
          >
            <Link to="/" className="nav-link ">
              Go To Home Page
            </Link>
          </button>
        </div>
      </div>
    </>
  );
}
