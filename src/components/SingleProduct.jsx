import React from 'react'

const SingleProduct = ({item}) => {
  const {id,title,price,category,image}=item;
  return (
    <div className='col-sm-6 col-md-4 col-lg-3 p-1'>
      <div className='inner-div'>
      {/* <h3>{title}</h3> */}
      <div className='img-div'>
        <img src={image} alt={title} />
      </div>
      <p>{price}</p>
      <p>{category}</p>
      </div>
    </div>
  )
}

export default SingleProduct