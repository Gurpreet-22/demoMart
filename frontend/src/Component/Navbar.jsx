import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";  

const Navbar = ({ onCategorySelect }) => {
  // onCategorySelect is a callback passed from Card.jsx to filter products
  const [isOpen, setIsOpen] = useState(false);
  const [categories, setCategories] = useState([]);

  const handleSummaryData = async () => {
    setIsOpen((prev) => !prev); // toggle dropdown
    try {
      const res = await axios.post("http://localhost:8080/api/categoryData");
      if (res.status === 200) {
        setCategories(res.data.data || []); 
      }
    } catch (error) {
      console.log("Error fetching categories:", error);
    }
  };

  const handleCategoryClick = (categoryName) => {
    if (onCategorySelect) {
      onCategorySelect(categoryName);
    }
    setIsOpen(false); 
  };

  return (
    <nav className="bg-white shadow w-full relative mt-0 z-10">
      <div className="flex justify-start items-center">
        {/* MEN dropdown */}
        <div className="relative">
          <summary
            className="list-none font-bold text-black hover:underline underline-offset-12 hover:decoration-blue-600 p-2 ml-12 mt-5 cursor-pointer"
            onClick={handleSummaryData}
          >
            MEN
          </summary>

          {isOpen && (
            <div className="absolute top-full mt-2 bg-white left-6 w-40 rounded-2xl shadow-lg">
              <ul className="flex flex-col">
                {/* Add "All" option */}
                <li
                  className="hover:font-bold underline-offset-4 p-2 m-2 cursor-pointer"
                  onClick={() => handleCategoryClick("all")}
                >
                  All
                </li>

                {categories.map((cat) => (
                  <li
                    key={cat.category_id}
                    className="hover:font-bold underline-offset-4 p-2 m-2 cursor-pointer"
                    onClick={() => handleCategoryClick(cat.category_name)}
                  >
                    {cat.category_name}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Cart Link */}
        <div className="font-bold text-black hover:underline underline-offset-12 hover:decoration-blue-600 p-2 ml-12 mt-5 cursor-pointer">
          <Link to="/cart">CART</Link>  
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
