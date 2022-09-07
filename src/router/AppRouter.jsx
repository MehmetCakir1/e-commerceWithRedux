import {BrowserRouter,Routes,Route} from "react-router-dom";
import Navbar from "../components/Navbar";
import About from "../pages/About";
import Home from "../pages/Home";
import Details from "../pages/Details";
import Products from "../pages/Products";
import Footer from "../components/Footer";

const AppRouter = () => {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/products/:id" element={<Details/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default AppRouter