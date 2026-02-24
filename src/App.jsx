import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import Login from "./Components/Login";
import Signup from "./Components/SignUp";
import Product1 from "./Components/Product1";
import AdminPage from "./Components/AdminPage";
import Cart from "./Components/Cart";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import "../src/Components/styles.css"


function App(){
  return(
    <HashRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/products" element={<Product1/>}/>
        <Route path="/admin" element={<AdminPage/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/header" element={<Header/>}/>
        <Route path="/footer" element={<Footer/>}/>
      </Routes>
      </HashRouter>
   
  )
}

export default App;