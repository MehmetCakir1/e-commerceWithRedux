import { FaMinus,FaPlus,FaTrashAlt} from "react-icons/fa";
import { useDispatch, useSelector, } from "react-redux";
import { increment,decrement,removeItem, setCart } from '../redux/actions/productsActions'



const SingleCart = ({item,costing}) => {
  const dispatch=useDispatch()
  const cart=useSelector((state)=>state.cart.cart)


  const {title,image,price,amount,id}=item; 

  const increaseQuantity = (id) =>{
    if(cart.length>0){
      let newCart = cart.filter((item)=>item.id===id)
      amount < 10 ? newCart[0].amount=amount+1 : newCart[0].amount=amount
    let testcart=cart.filter((item)=>item.id!==id)
     dispatch(setCart([...testcart, ...newCart]))
      } }
  const decreaseQuantity = (id) =>{
    if(cart.length>0){
      let newCart = cart.filter((item)=>item.id===id)
      amount > 1 ? newCart[0].amount=amount-1 : newCart[0].amount=amount
   
    let testcart=cart.filter((item)=>item.id!==id)
    dispatch(setCart([...testcart, ...newCart]))
        } }
  return (
    <div className='main-cart-div py-2 border-bottom border-1 border-secondary m-0 p-0'>
      <div className='single-cart-img-div text-center m-0 p-0'>
        <img src={image} alt="" />
        <h2 className='fs-6 mt-2'>{title}</h2>
      </div>
      <h3 className="d-flex justify-content-center align-items-center m-0 p-0">${costing(price)}</h3>
      <div className="d-flex justify-content-center align-items-center m-0 p-0">
      <button className='border-0 fs-5 minus' onClick={()=> decreaseQuantity(id)}><FaMinus/></button>
       <h3 className='m-0 p-0 mx-2 fs-1'>{amount}</h3>
      <button className='border-0 fs-5 plus' onClick={()=> increaseQuantity(id)}><FaPlus/></button>
        </div>
      <h3 className="d-flex justify-content-center align-items-center text-primary m-0 p-0 subtotal">${costing(price*amount)}</h3>
      <button className='border-0 fs-3 bg-transparent text-danger d-flex justify-content-center align-items-center'  ><span onClick={()=> dispatch(removeItem(id))}><FaTrashAlt/></span> </button>
    </div>
  )
}

export default SingleCart