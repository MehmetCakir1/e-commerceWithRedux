import React, { useEffect } from 'react'
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

    const getAllProducts = async()=>{
        try{
            const {data}=await axios.get(url)
            dispatch(setProduct(data))
        }catch(err){
            toastErrorNotify(err.message)
        }
    }

    useEffect(() => {
        getAllProducts()
    }, [])
    
console.log(products)

  return (
    <div className='row'>
        <div className='col-md-3'>
            <SideCategory/>
        </div>
            <div className='row col-md-9'>
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