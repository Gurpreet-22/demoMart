# 🛒 demoMart

demoMart is a full-stack e-commerce application built with **React.js, Node.js, Express, and MySQL**.  
It provides a smooth shopping experience with features like product listing, categories, cart management, and checkout flow.

---

## 🚀 Features

- 📦 **Product Management** – View products with images, price, and description.  
- 🏷️ **Categories** – Filter products based on categories.  
- 🛍️ **Cart System** – Add, update, and remove products from the cart.  
- 👤 **User Authentication** (planned/ongoing) – Login/Signup functionality.  
- 🔄 **Responsive UI** – Mobile-friendly design using React.  
- ⚡ **REST API** – Backend powered by Express + MySQL.  

---

## 🏗️ Tech Stack

**Frontend**  
- React.js (with React Router)  
- Axios for API calls  
- Tailwind CSS / Custom CSS  

**Backend**  
- Node.js  
- Express.js  
- MySQL (Database)  

---


## 📂 Project Structure








2️⃣ Backend Setup

cd backend
npm install


Create a .env file in backend/ and configure:
PORT=8080
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=demomart

3️⃣ Frontend Setup

cd frontend
npm install
npm start

📌 API Endpoints (Backend)
Method	Endpoint	Description
POST	/api/products	       //Get all products
POST	/api/productData	  //Fetch product details
POST	/api/category    //Add product to  category 
POST	/api/categoryData         //fetch category data
