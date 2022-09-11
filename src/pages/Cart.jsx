import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import SingleCart from "../components/SingleCart";
import { toastThanksNotify, toastWarnNotify } from "../helpers/toastify";
import { setCart } from "../redux/actions/productsActions";

const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  // const amount=useSelector((state)=>state.singleProduct.amount)
  const user = useSelector((state) => state.user.user);
  const [subTotal, setSubTotal] = useState();

  let shippingFee = 7.65;


  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const calculateTotal = () => {
    let sum = 0;
    cart?.map((item) => (sum += item.amount * item.price));
    setSubTotal(sum);
  };
  useEffect(() => {
    calculateTotal();
  }, [cart]);

  const buying = () => {
    if (cart.length == 0) {
      toastWarnNotify("Your Cart Is Empty!");
    } else {
      dispatch(setCart([]));
      toastThanksNotify("Order complete!Thank you so much for choosing us!");
    }
  };

  const costing= (price) => {
    return parseFloat(price).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  }


  // console.log(cart);
  return (
    <>
      <div className="details-header py-2 ">
        <h1 className="details-h1 p-3 container fw-bold">
          <span onClick={() => navigate("/")}>Home</span>
          <span onClick={() => navigate("/products")}>/ Products</span>
          <span> / Cart</span>
        </h1>
      </div>
      <main className="cart-main-part container m-0 m-auto p-0">
        <div className="cart-upper-part mt-4 border-bottom border-secondary d-none d-md-grid">
          <p className="text-center">Item</p>
          <p className="text-center">Price</p>
          <p className="text-center">Quantity</p>
          <p className="text-center">Subtotal</p>
          <p className="text-center"></p>
        </div>

        {cart?.sort((a,b)=>a.date-b.date).map((item, index) => {
          return <SingleCart key={index} item={item} costing={costing}/>;
        })}
      </main>
      <div className="cart-btns-div d-flex justify-content-between align-items-center container my-3 px-2">
        <button
          className="btn rounded-3 fw-bold cart-continue-btn"
          onClick={() => navigate("/products")}
        >
          Continue Shopping
        </button>
        <button
          className="btn rounded-3 fw-bold cart-clear-btn"
          onClick={() => dispatch(setCart([]))}
        >
          Clear Shopping Cart
        </button>
      </div>
      <div className="last-part d-flex justify-content-center align-items-md-end flex-column container">
        <div className="my-3 my-md-4 p-md-2 ">
          <div className="total-order p-3 m-0 px-md-5">
            <div className="fee-div py-3 m-0 ">
              <p className="fw-bold fs-5 m-0">
                <span>Subtotal:</span>
                <span>${costing(subTotal)}</span>
              </p>
              <p className="fs-5 m-0">
                <span>Shipping Fee:</span>
                <span>${costing(shippingFee)}</span>
              </p>
            </div>
            <div className="total-fee py-3">
              <p className="fw-bold fs-4 m-0">
                <span>Order Total:</span>
                <span>${!subTotal ? costing(subTotal) : costing(subTotal + shippingFee)}</span>
              </p>{" "}
            </div>
          </div>
          {user ? (
            <button
              className="cart-login-btn btn rounded-3 fw-bold w-100 my-2"
              onClick={buying}
            >
              BUY
            </button>
          ) : (
            <button
              className="cart-login-btn btn rounded-3 fw-bold w-100 my-2"
              onClick={() => navigate("/login")}
            >
              LOGIN
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
