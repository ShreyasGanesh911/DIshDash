import React, { useContext, useEffect, useState } from "react";
import AppContext from "../Context/AppContext";
import EmptyCart from "./EmptyCart";
import CartItemDisplay from "./CartItemDisplay";
import CartBill from "./CartBill";
import Modal from "./Modal";
import '../CSS/Cart.css'
export default function Cart() {
  let total = 0;
  const [showModal, setShowModal] = useState(false); // For showing modal
  const [totalCost] = useState(0);
  const context = useContext(AppContext);
  const { cart, setCart,cartCount,setCartCount } = context; //Context
  const checkOut = () => setShowModal(true);  
  // Message Passing for billing 
  const bill = [
    { message: "Item Total", type: "1" },
    { message: "Delivery Fees + GST + Restaurant Charges", type: "2" },
    { message: "To Pay", type: "3" },
  ];

  //UseEffect Hook
  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")))
  }, [total,cart,setCart,cartCount,setCartCount]);

  return (
    <div
      className="displayFlex bg-body-tertiary my-5 "
      style={{ height: "auto", minHeight: "80vh", width: "100vw" }}
    >
      {cart.length !==0  ? 
      (
        <div className="displayFlex bg-white my-5 cart-container " id="cart-container" >
           <div className=' d-flex  my-2 cart-heading border-bottom' id="cart-heading" style={{height:"10vh",width:"85%"}}>
        <div className='d-flex displayFlex  w-50' > 
            <div className="   fonts"> Item</div>        
        </div>
        <div className='d-flex justify-content-center align-items-center w-50 fonts'  >Quantity</div>
        <div className='d-flex justify-content-center cart-heading-cost align-items-center w-25 fonts' id="cart-heading-cost" >Cost</div>
      </div>
          {cart.map((e) => {
            
              total += e.cost*e.quantity;
            

            return (
              <CartItemDisplay
                name={e.name}
                img={e.img}
                quantity={e.quantity}
                totalCost={e.cost * e.quantity}
                
                key={e.name}
              />
            );
          })}

          <div className="displayFlex cart-container " id="cart-container-bill" >
          {bill.map((e) => {
            return (
              <CartBill
                msg={e.message}
                cost={totalCost === 0 ? total : totalCost}
                typeCost={e.type}
                key={e.type}
              />
            );
          })}
        </div>
        <div
          className="displayFlex cart-button-container " id="cart-button-container"
        
        >
          <div className="displayFlex "  style={{ width: "43%" }}>
            
            <button
              type="button"
              onClick={checkOut}
              className="btn btn-warning btn-primary btn-lg"
            >
              <div >Place Order</div>
            </button>
          </div>
        </div>

        </div>
      ):<EmptyCart />}
    {showModal && <Modal />}
    </div>
  );
}
