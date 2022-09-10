import React, { useEffect, useState } from "react";
import axios from "axios";
import { toastErrorNotify } from "../helpers/toastify";
import { useDispatch, useSelector } from "react-redux";
import { setLoading, setProduct } from "../redux/actions/productsActions";
import SingleProduct from "../components/SingleProduct";
import SideCategory from "../components/SideCategory";
import { useNavigate } from "react-router-dom";

let url = "https://fakestoreapi.com/products";

const _ = require('underscore');//! UNDERSCORE********** _.intersection([][][])


const Products = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.allProducts.products);
  const loading = useSelector((state) => state.allProducts.loading);
  const [tempProducts,setTempProducts]=useState(products)
  const [maxPrice, setMaxPrice] = useState(0);
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState("all");
  const [searchTerm,setSearchTerm]=useState("");
  const [sortedProduct, setSortedProduct] = useState("Price(Lowest)")

// console.log(sortedProduct)

  // console.log(loading)
  const getAllProducts = async () => {
    dispatch(setLoading(true));
    try {
      const { data } = await axios.get(url);
      dispatch(setProduct(data));
      setPrice(Math.max(...data.map((item) => item.price)));
      setMaxPrice(Math.max(...data.map((item) => item.price)));
      dispatch(setLoading(false));
    } catch (err) {
      toastErrorNotify(err.message);
      dispatch(setLoading(false));
    }
  };
  useEffect(() => {
    getAllProducts();
  }, []);

  useEffect(() => {
    if (products.length>0 && !loading) {
      setTempProducts(products.sort((a,b)=>a.price-b.price))
      setPrice(maxPrice)
      // console.log(tempProducts);
    }
  }, [products]);
// console.log(maxPrice)
// console.log(price);
  useEffect(() => {
    filterItems();
  }, [category,price,searchTerm]);

  useEffect(() => {
    sortBy();
  }, [sortedProduct]);

  const categoryList = [
    "All",
    ...new Set(products.map((item) => item.category)),
  ];

  const filterItems = () => {
    let tempCategory;
    let tempPrice;
    let tempSearch;
    if (category === "all" && price === maxPrice && searchTerm==="") {
      setTempProducts(products);
    } else {
      if (category !== "all") {
        tempCategory = products?.filter((item) => item.category === category);
      } else {
        tempCategory = products;
      }
      if (price !== maxPrice) {
        tempPrice = products?.filter((item) => item.price <= price);
      } else {
        tempPrice = products;
      }
      if(searchTerm!==""){
        tempSearch=products?.filter((item)=>item.title.toLowerCase().includes(searchTerm))
      }else{
        tempSearch = products
      }
      setTempProducts(_.intersection(tempCategory,tempPrice,tempSearch))
    }
  };


  const sortBy = () => {
    let empty = []
  // console.log(sortedProduct);
  if (sortedProduct === "Price(Lowest)"){
    const newStatus = empty.concat(tempProducts)
  setTempProducts(newStatus?.sort((a,b)=>a.price - b.price))
  empty = []
  }
  if (sortedProduct === "Price(Highest)"){
    const newStatus = empty.concat(tempProducts)
  setTempProducts(newStatus?.sort((a,b)=>b.price - a.price))
  empty = []
  }
  if (sortedProduct === "Name(A-Z)"){
    const newStatus = empty.concat(tempProducts)
  setTempProducts(_.sortBy(newStatus, 'title'))
  empty = []
  }
  if (sortedProduct === "Name(Z-A)"){
    const newStatus = empty.concat(tempProducts)
  setTempProducts(_.sortBy(newStatus, 'title').reverse())
  empty = []
  }
    }

    const clearAll=()=>{
      setCategory("all")
      setPrice(maxPrice)
      setSearchTerm("")
      setSortedProduct("Price(Lowest)")
      setTempProducts(products.sort((a,b)=>a.price-b.price))
    }

  return (
    <>
      <div className="products-header py-2 ">
        <h1 className="products-h1 p-3 container fw-bold">
          <span onClick={() => navigate("/")}>Home</span>
          <span> / Products</span>
        </h1>
      </div>
      <div className="row px-md-4 m-0 mt-3 mt-md-4">
        <div className="col-sm-3 m-0 p-0">
          <SideCategory
            categoryList={categoryList}
            category={category}
            setCategory={setCategory}
            price={price}
            maxPrice={maxPrice}
            setPrice={setPrice}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            sortedProduct={sortedProduct}
            setSortedProduct={setSortedProduct}
            clearAll={clearAll}
          />
        </div>
        <div className="row col-sm-9 m-0 m-auto d-flex justify-content-center align-items-center py-sm-5">
          {tempProducts.map((item) => {
            return <SingleProduct key={item.id} item={item} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Products;
