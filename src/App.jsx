import "./App.css";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Shop from "./pages/Shop/Shop";
import About from "./pages/About/About";
import { useEffect, useState } from "react";
import axios from "axios";
function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getData = async () => {
      await axios.get("https://dummyjson.com/products").then((res) => {
        setProducts(res?.data?.products);
      });
    };
    getData();
  }, []);
  console.log(products);
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home products={products}/>} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
