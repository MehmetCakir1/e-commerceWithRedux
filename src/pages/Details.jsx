import {useParams } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux"
import { toastErrorNotify } from '../helpers/toastify'
import axios from "axios"
import { setSingleProduct } from '../redux/actions/productsActions'
import {useEffect} from "react"



const Details = () => {
    const { id } = useParams();
    const dispatch=useDispatch()
    const singleProduct=useSelector((state)=>state.singleProduct.singleProduct)

    console.log(singleProduct);


    let singleUrl=`https://fakestoreapi.com/products/${id}`

    const getSingleProduct= async()=>{
        try{
            const {data}=await axios.get(singleUrl)
            dispatch(setSingleProduct(data))
            // console.log(data)
        }catch(err){
            toastErrorNotify(err.message)
        }
    }

    useEffect(() => {
        getSingleProduct()
    }, [])


  return (
    <div>Details</div>
  )
}

export default Details