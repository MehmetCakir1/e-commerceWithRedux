import React, { useState } from 'react'

const SideCategory = ({categoryList,price}) => {
  categoryList=categoryList.sort()
  return (
    <div>
      <div className='search-part'>
        <input type="search" className='w-75'/>
      </div>
      <ul className="category-part p-0 mt-4">
        <h5>CATEGORY</h5>
        {categoryList.map((item,index)=>{
          return(
            <li key={index} className="text-capitalize list-unstyled">{item}</li>
          )
        })}
      </ul>
      <div className='price-part mt-4'>
        <h5>PRICE</h5>
        <p className='m-0'>${price}</p>
        <input type="range" className='w-50'/>
      </div>
      <h5 className='mt-4'>SORT BY</h5>
      <select name="select" id="select" className="bg-transparent m-0 w-50">
               <option value="Price(Lowest)">Price(Lowest)</option>
                <option value="Price(Highest)">Price(Highest)</option>
                <option value="Name(A-Z)">Name(A-Z)</option>
                <option value="Name(Z-A)">Name(Z-A)</option>
              </select>
    </div>
  )
}

export default SideCategory