import React from 'react'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import SingleCart from '../components/SingleCart'

const Cart = () => {
  const {state}=useLocation()
  const cart=useSelector((state)=>state.cart.cart)
// console.log(state);
console.log(cart)

  return (
    <main className="cart-main-part container m-0 m-auto p-0">
    <div className="cart-upper-part mt-4 border-bottom border-secondary d-none d-md-grid">
      <p className="text-center">Item</p>
      <p className="text-center">Price</p>
      <p className="text-center">Quantity</p>
      <p className="text-center">Subtotal</p>
      <p className="text-center"></p>
    </div>
  
    {
      cart.map((item)=>{
        return(
          // <SingleCart  key={item.date} item={item}/>
          <h1>kkk</h1>
        )
      })
    }
  </main>
  )
}

export default Cart