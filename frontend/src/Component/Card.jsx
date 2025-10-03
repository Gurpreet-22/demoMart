import React, { useEffect, useState } from "react";
import Carousel from "./Carousel";
import axios from "axios";
import { useCart } from "./CartContext";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar"; // Import updated Navbar

const Card = () => {
  const [allProducts, setAllProducts] = useState([]);   // all products from API
  const [products, setProducts] = useState([]);         // currently displayed products
  const { addToCart } = useCart();
  const navigate = useNavigate();

  // Fetch products from API
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.post("http://localhost:8080/api/productData");
        const dataArray = Array.isArray(res.data) ? res.data : res.data?.data;
        setAllProducts(dataArray || []);
        setProducts(dataArray || []); 
      } catch (err) {
        console.error("Error fetching products:", err);
        setAllProducts([]);
        setProducts([]);
      }
    };
    fetchProduct();
  }, []);

 
  const handleAddToCart = (product) => {
    addToCart(product);
    navigate("/cart");
  };

 
  const filterProducts = (category) => {
    if (category.toLowerCase() === "all") {
      setProducts(allProducts);
    } else {
      const filtered = allProducts.filter(
        (item) =>
          item.category_name &&
          item.category_name.toLowerCase() === category.toLowerCase()
      );
      setProducts(filtered);
    }
  };

  return (
    <div>
    
      <Navbar onCategorySelect={filterProducts} />

     
      <div className="flex flex-wrap gap-6 justify-center mt-10">
        {products?.length > 0 ? (
          products.map((cur, index) => (
            <div
              key={cur.id || index}
              className="w-80 sm:w-64 md:w-80 lg:w-80 bg-white shadow hover:shadow-lg transition overflow-hidden"
            >
              {/* Image Carousel */}
              <div className="w-full h-60 relative">
                <Carousel interval={3000}>
                  {cur.image1 && (
                    <img
                      src={`/images/${cur.image1}`}
                      alt={cur.product_name}
                      className="w-full h-60 object-cover"
                    />
                  )}
                  {cur.image2 && (
                    <img
                      src={`/images/${cur.image2}`}
                      alt={cur.product_name}
                      className="w-full h-60 object-cover"
                    />
                  )}
                </Carousel>
              </div>

              {/* Product Details */}
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 truncate">
                  {cur.product_name || "No Name"}
                </h3>
                <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                  {cur.product_description || "No description"}
                </p>
                <p className="text-xl font-bold text-black mt-2">
                  ₹{cur.product_price || 0}
                </p>

                {/* Add to Cart Button */}
                <button
                  className="mt-4 w-full border border-black text-black bg-white p-2 rounded-xl font-medium hover:bg-black hover:text-white transition"
                  onClick={() => handleAddToCart(cur)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center w-full mt-10">
            No products available.
          </p>
        )}
      </div>
    </div>
  );
};

export default Card;
