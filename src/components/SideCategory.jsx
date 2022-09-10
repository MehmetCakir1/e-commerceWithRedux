
const SideCategory = ({categoryList,price,setPrice,maxPrice,category,setCategory,setSearchTerm,searchTerm,clearAll,setSortedProduct}) => {
  categoryList=categoryList.sort()

  // console.log(maxPrice);
  return (
    <div className='py-sm-5 mb-3 m-0 p-0'>
      {/* --------------------SEARCH INPUT------------------------ */}
      <div className='search-part'>
        <input type="search"  value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value.toLowerCase())}/>
      </div>
      <ul className="category-part p-0 mt-4">
        {/* ------------------------CATEGORY----------------------------- */}
        <h5>CATEGORY</h5>
        {categoryList.map((item,index)=>{
          return(
            <li key={index} className="text-capitalize list-unstyled category-part-li" ><span onClick={(e)=>setCategory(e.target.innerText.toLowerCase())}>{item}</span></li>
          )
        })}
      </ul>
      <div className='price-part mt-4'>
        {/* -------------------------PRICE----------------------------- */}
        <h5>PRICE</h5>
        <p className='m-0'>${price}</p>
        <input type="range" value={price!==undefined && price} min="0" max={maxPrice+1} onChange={(e)=>setPrice(parseFloat(e.target.value))}/>
      </div>
      {/* --------------------------SORT BY-------------------- */}
      <h5 className='mt-4'>SORT BY</h5>
      <select name="select" id="select" className="bg-transparent m-0" onChange={(e)=>setSortedProduct(e.target.value)}>
                <option value="Price(Lowest)">Price(Lowest)</option>
                <option value="Price(Highest)">Price(Highest)</option>
                <option value="Name(A-Z)">Name(A-Z)</option>
                <option value="Name(Z-A)">Name(Z-A)</option>
          </select>
          <div className='mt-4'><button className='border-0 rounded-3 fw-bold bg-danger text-light py-1 px-3' onClick={clearAll}>CLEAR ALL</button></div>
    </div>
    
  )
}

export default SideCategory