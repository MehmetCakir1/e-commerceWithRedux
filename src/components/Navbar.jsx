import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import {FaShoppingCart,FaUserPlus,FaBars} from "react-icons/fa"
import { useDispatch, useSelector } from 'react-redux'
import { setUser,showSidebar,setCart} from "../redux/actions/productsActions"
import Sidebar from './Sidebar'

const Navbar = () => {
  const user=useSelector((state)=>state.user.user)
  const cart=useSelector((state)=>state.cart.cart)
  const showMenu = useSelector((state)=>state.showMenu.showMenu)
  const dispatch=useDispatch()
  // console.log(cart)

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const logout=()=>{
    dispatch(setUser(""))
    dispatch(setCart([]))
    }

  return (
    <div>
    <nav className=" d-flex justify-content-between align-items-center py-2 px-4">
      <div className="logo ">
        <Link to="/">
          <img src="images/logo.png" alt="logo" />
        </Link>
      </div>
      <button className="d-flex align-items-center d-md-none border-0 bg-transparent fs-1 hamburger-menu" onClick={()=>dispatch(showSidebar(true))} ><FaBars/></button>
      <div className="links d-md-flex gap-5 fs-5 d-none ">
        <Link className="text-dark text-decoration-none" to="/">Home</Link>
        <Link className="text-dark text-decoration-none" to="/about">About</Link>
        <Link className="text-dark text-decoration-none" to="/products">Products</Link>
      </div>
      <div className="d-none d-md-flex justify-content-between align-items-center">
        <Link to="/cart" className="text-dark text-decoration-none">
        <div className="cart d-flex justify-content-between align-items-center px-2 mx-1">
          <p className="fs-4 p-0 m-0">Cart</p>
          <span className="fs-3 shoppingCart d-flex align-items-center justify-content-center mx-1"><FaShoppingCart/>
            <span className="cartTotal text-light fs-5 d-flex justify-content-center align-items-center">{cart.length}</span>
          </span>
        </div>
        </Link>
        {
          !user ? (
            <Link to="login" className="text-dark text-decoration-none">
       <div className="login d-flex justify-content-between align-items-center px-2 mx-1">
          <p className="fs-4 p-0 m-0">Login</p>
          <span className="fs-3 d-flex align-items-center justify-content-center mx-1"><FaUserPlus/></span>
        </div></Link>
          ):(
            <Link to="login" className="text-dark text-decoration-none">
       <div className="login d-flex justify-content-between align-items-center px-2 mx-1">
          <p className="fs-4 p-0 m-0" onClick={logout}>Log Out</p>
        </div></Link>
          )
        }
      </div>
    </nav>
    {
      showMenu && <Sidebar/>
    }
      </div>
  )
}

export default Navbar