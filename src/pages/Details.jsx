import { useNavigate, useParams } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux"
import { toastErrorNotify } from '../helpers/toastify'
import axios from "axios"
import { setLoading, setSingleProduct,increment,decrement } from '../redux/actions/productsActions'
import {useEffect} from "react"
import { BsStar,BsStarHalf,BsStarFill } from "react-icons/bs";
import { FaMinus,FaPlus} from "react-icons/fa";
import { setCart} from '../redux/actions/productsActions'






const Details = () => {
  const navigate=useNavigate()
    const { id } = useParams();
    const dispatch=useDispatch()
    const singleProduct=useSelector((state)=>state.singleProduct)
    const loading=useSelector((state)=>state.singleProduct.loading)
    const amount=useSelector((state)=>state.singleProduct.amount)
    const cart=useSelector((state)=>state.cart.cart)

    console.log(cart)
// console.log(loading)
    let singleUrl=`https://fakestoreapi.com/products/${id}`

    const getSingleProduct= async()=>{
      dispatch(setLoading(true))
        try{
            const {data}=await axios.get(singleUrl)
            dispatch(setSingleProduct(data))
            // console.log(data)
            dispatch(setLoading(false))

        }catch(err){
            // toastErrorNotify(err.message)
            dispatch(setLoading(false))
        }
    }

    useEffect(() => {
        getSingleProduct()
    }, [])

    const {title,description,price,category,image,rating}=singleProduct;


    const addToCart = () =>{
        // let oldAmount;
        const date = new Date().getTime();
        // let newcart = {image:image, title:title, amount:amount,price:price,date:date,id:id};
        // console.log(newcart);
        // let tempArr=cart.filter((item)=>item.title===newcart.title)
        // if(tempArr.length>0){
        //     oldAmount=tempArr[0].amount
        //     newcart={...newcart,amount:(oldAmount+newcart.amount)} 
        //     cart.splice(cart.indexOf(tempArr[0]),1)
        //     dispatch(()=>setCart([...cart,newcart]));
        //   }else{
        //     dispatch(()=>setCart([...cart,newcart]));
        //   }

        ///******************************************************** */
        let newcart = {image:image, title:title, amount:amount,price:price,date:date,id:id};
        dispatch(setCart([...cart,newcart]))
        navigate("/cart")
      }

    // console.log(loading);
    // console.log(singleProduct);
    // console.log(rating)
    // console.log(title);

  return (
    <>
             <div className="details-header py-2 ">
        <h1 className="details-h1 p-3 container fw-bold">
          <span onClick={() => navigate("/")}>Home</span>
          <span onClick={() => navigate("/products")}>/ Products</span>
          <span> / Details</span> 
        </h1>
      </div>
      <div className="mt-3 ps-5"><button className="border-0 bg-success rounded-3 px-3 py-2 text-light" onClick={() => navigate("/products")}>BACK TO PRODUCTS</button></div>
      <div className="row container m-auto m-0 my-md-5 p-0">
        <div className="detail-img-div col-md-6 d-flex justify-content-center align-items-center m-0">
            <img src={image} alt={title} />
        </div>
        <div className="detail-content col-md-6 m-0">
            <h1>{title}</h1>
            <p className="text-danger fw-bold">rating and reviews will be written</p>
            <h2>${price}</h2>
               {/* < div className="stars fs-4 d-flex align-items-center flex-row text-warning">
            <span className="d-flex align-items-center">
              {rating.rate >=1 ? <BsStarFill/> : rating.rate>=0.5 ? <BsStarHalf/> : <BsStar/>}
            </span>
            <span className="d-flex align-items-center">
              {rating.rate >=2 ? <BsStarFill/> : rating.rate>=1.5 ? <BsStarHalf/> : <BsStar/>}
            </span>
            <span className="d-flex align-items-center">
              {rating.rate >=3 ? <BsStarFill/> : rating.rate>=2.5 ? <BsStarHalf/> : <BsStar/>}
            </span>
            <span className="d-flex align-items-center">
              {rating.rate >=4 ? <BsStarFill/> : rating.rate>=3.5 ? <BsStarHalf/> : <BsStar/>}
            </span>
            <span className="d-flex align-items-center">
              {rating.rate ==5 ? <BsStarFill/> : rating.rate>=4.5 ? <BsStarHalf/> : <BsStar/>}
            </span>
            <span className="single-detail-review d-flex align-items-center fs-5 ps-2">({rating.count} customer reviews)</span>
          </div>  */}
          <p>{description}</p>
          <div className="d-flex p-0 align-items-center">
            <button className="bg-transparent border-0 fs-4 me-2 my-2 " onClick={()=> amount>1 && dispatch(decrement())} ><FaMinus/></button>
            <h2 className="m-0 mx-1 fw-bold fs-1">{amount}</h2>
            <button className="bg-transparent border-0 fs-4 ms-2 my-2" onClick={()=>amount<10 && dispatch(increment())}><FaPlus/></button>
          </div>
          <button className="cartBtn border-0 p-2 rounded-2 my-3 bg-primary fw-bold text-light" onClick={addToCart}>ADD TO CART</button>
        </div>
    </div>
    </>
    
  )
}

export default Details