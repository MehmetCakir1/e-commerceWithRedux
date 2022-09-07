import React, { useEffect, useState } from 'react'
import axios from "axios"
import { toastErrorNotify } from '../helpers/toastify'
import {useDispatch, useSelector} from "react-redux"
import { setProduct } from '../redux/actions/productsActions'
import SingleProduct from '../components/SingleProduct'
import SideCategory from '../components/SideCategory'


let url='https://fakestoreapi.com/products'

const Products = () => {
const dispatch=useDispatch()
const products=useSelector((state)=>state.allProducts.products)
const [price,setPrice]=useState()

    const getAllProducts = async()=>{
        try{
            const {data}=await axios.get(url)
            dispatch(setProduct(data))
            setPrice(Math.max(...data.map((item) => item.price)))
        }catch(err){
            toastErrorNotify(err.message)
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
    <div className='row px-md-4 m-0 mt-3 mt-md-4'>
        <div className='col-md-3 m-0'>
            <SideCategory categoryList={categoryList} price={price}/>
        </div>
            <div className='row col-md-9 m-0 m-auto d-flex justify-content-center align-items-center'>
        {products.map((item)=>{
            return(
                <SingleProduct key={item.id} item={item}/>
            )
        })}
    </div>
    </div>
  )
}

export default Products