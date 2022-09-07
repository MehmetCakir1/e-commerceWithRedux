import React, { useEffect, useState } from 'react'
import axios from "axios"
import { toastErrorNotify } from '../helpers/toastify'
import {useDispatch, useSelector} from "react-redux"
import { setLoading, setProduct } from '../redux/actions/productsActions'
import SingleProduct from '../components/SingleProduct'
import SideCategory from '../components/SideCategory'
import { useNavigate } from 'react-router-dom'


let url='https://fakestoreapi.com/products'

const Products = () => {
    const navigate=useNavigate()
const dispatch=useDispatch()
const products=useSelector((state)=>state.allProducts.products)
const loading=useSelector((state)=>state.allProducts.loading)
const [price,setPrice]=useState([])
const [maxPrice,setMaxPrice]=useState()
// console.log(loading)
    const getAllProducts = async()=>{
        dispatch(setLoading(true))
        try{
            const {data}=await axios.get(url)
            dispatch(setProduct(data))
            setPrice(Math.max(...data.map((item) => item.price)))
            setMaxPrice(Math.max(...data.map((item) => item.price)))
            dispatch(setLoading(false))
        }catch(err){
            toastErrorNotify(err.message)
            dispatch(setLoading(false))
        }
    }
    useEffect(() => {
        getAllProducts()
    }, [])

    const categoryList= ["All",...new Set(products.map((item)=>item.category))]
    // console.log(categoryList)

    // console.log(defaultPrice);
// console.log(products)

  return (
    <>
             <div className="products-header py-2 ">
        <h1 className="products-h1 p-3 container fw-bold">
          <span onClick={() => navigate("/")}>Home</span>
          <span> / Products</span> 
        </h1>
      </div>
      <div className='row px-md-4 m-0 mt-3 mt-md-4'>
        <div className='col-md-3 m-0'>
            <SideCategory categoryList={categoryList} price={price} maxPrice={maxPrice} setPrice={setPrice}/>
        </div>
            <div className='row col-md-9 m-0 m-auto d-flex justify-content-center align-items-center'>
        {products.map((item)=>{
            return(
                <SingleProduct key={item.id} item={item}/>
            )
        })}
    </div>
    </div>
    </>

  )
}

export default Products