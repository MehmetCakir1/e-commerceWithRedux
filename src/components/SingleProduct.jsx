import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { reset } from '../redux/actions/productsActions'


const SingleProduct = ({item}) => {
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const {id,title,price,category,image}=item;

  return (
    // col-sm-6 col-md-4 col-lg-3
    <div className=' p-1 text-center outer-div flex-wrap'>
      <div className='inner-div border border-1 border-dark py-1 pb-2'>
      {/* <h3>{title}</h3> */}
      <div className='img-div p-2 m-0'>
        <img src={image} alt={title}/>
          <p className='title-part text-center m-0 mt-1 p-1 fw-bold'>{title}</p>
      </div>
      <p className='d-flex justify-content-md-between align-items-center px-2'><del className='fs-5 text-danger'>${(price+20).toFixed(2)}</del> <span className='fs-5 fw-bold text-success'>${price}</span></p>
      <button className='border-0 fw-bold view py-1 px-3 rounded-3' onClick={() => {navigate(`/products/${id}`);dispatch(reset())}}>VIEW</button>
      </div>
    </div>
  )
}

export default SingleProduct