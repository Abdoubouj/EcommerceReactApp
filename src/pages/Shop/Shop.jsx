import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard";

const Shop = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("beauty");
  useEffect(() => {
    const getCategories = async () => {
      await axios
        .get("https://dummyjson.com/products/categories")
        .then((res) => {
          setCategories(res?.data);
        });
    };
    getCategories();

    const getProductsByCategory = async (category) => {
      await axios
        .get(`https://dummyjson.com/products/category/${category}`)
        .then((res) => {
          setProducts(res?.data?.products);
        });
    };
    getProductsByCategory(selectedCategory);
  }, [selectedCategory]);
  return (
    <div className="p-5">
      <div className="d-flex gap-2 flex-wrap">
        {categories?.map((category, index) => (
          <button
            onClick={() => {
              setSelectedCategory(category?.slug);
            }}
            className={`btn btn-sm ${
              category?.slug === selectedCategory
                ? "btn-primary"
                : "btn-outline-primary"
            }`}
            key={index}
          >
            {category?.slug}
          </button>
        ))}
      </div>
      <div className="p-4 d-flex justify-content-center flex-wrap gap-3">
        {products?.map((product) => (
          <ProductCard product={product} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
