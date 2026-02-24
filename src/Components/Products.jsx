import { Link, useNavigate } from "react-router-dom";
import img1 from "../Images/m1.jpg"
import img2 from "../Images/m3.jpg";
import img3 from "../Images/m2.jpg";
import Header from "./Header";
import Footer from "./Footer";


function Products(){
  const navigate=useNavigate();
  const handleAddToCart = () =>{
    const isLoggedIn=localStorage.getItem("isLoggedIn");

    if(isLoggedIn=="true"){
      navigate("/cart");
    }
    else{
      alert("Please Login First!");
      navigate("/Login");
    }
  }

    return(
        <>
        <Header/>
      <div className="products">
        <div className="product">
         <img src={img1}/>
        <h2>Vivo V4O Series</h2>
        <p>Price:$13000</p>
        <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
        <div className="product">
          <img src={img2}/>
          <h2>Vivo V23 Series</h2>
         <p>Price:$19000</p>
        <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
        <div className="product">
           <img src={img3}/>
           <h2>ViVo T4X Series</h2>
         <p>Price:$20000</p>
        <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
      </div>
       <Footer/>
        </>
    )
}
export default Products