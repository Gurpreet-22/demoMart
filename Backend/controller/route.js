import express from "express";
const router = express.Router();
import db from "../db.js";

//category
router.post("/category", async (req, res) => {
  try {
    const { category_id, category_name, created_date } = req.body;

    db.query(
      "INSERT INTO category(category_id, category_name,created_date ) VALUES (?, ?, ?)",
      [category_id, category_name, created_date],
      (err, result) => {
        if (err) {
          console.log("Error:", err);
          return res.status(500).json({
            message: "Failed to insert data",
            error: err.message,
          });
        }

        res.status(200).json({
          message: "Data inserted successfully",
          result: result,
        });
      }
    );
  } catch (error) {
    console.log("Error:", error);
    res.status(500).json({
      message: error.message,
    });
  }
});

router.post("/categoryData", async (req, res) => {
  try {
    const category_id = req.body;

    console.log(category_id);

    const query = "SELECT category_id,category_name FROM category ";
    db.query(query, [category_id], (err, result) => {
      if (err) {
        console.log("Error:", err);
        return res.status(500).json({
          message: "Failed to retrieve data",
          error: err.message,
        });
      }

      res.status(200).json({
        message: "Data fetched successfully",
        data: result,
      });
      console.log(result);
    });
  } catch (error) {
    console.log("Error:", error);
    res.status(500).json({
      message: error.message,
    });
  }
});

//product
router.post("/product", async (req, res) => {
  try {
    const {
      product_id,
      category_id,
      product_name,
      product_description,
      product_price,
      image1,
      image2,
    } = req.body;

    db.query(
      "INSERT INTO product (product_id,category_id,product_name, product_description,product_price,image1,image2 ) VALUES (?, ?, ?,?,?,?,?)",
      [
        product_id,
        category_id,
        product_name,
        product_description,
        product_price,
        image1,
        image2,
      ],
      (err, result) => {
        if (err) {
          console.log("Error:", err);
          return res.status(500).json({
            message: "Failed to insert data",
            error: err.message,
          });
        }

        res.status(200).json({
          message: "Data inserted successfully",
          result: result,
        });
      }
    );
  } catch (error) {
    console.log("Error:", error);
    res.status(500).json({
      message: error.message,
    });
  }
});

router.post("/productData", async (req, res) => {
  try {
    const query =
      "SELECT category.category_name, product.product_name,product.product_description, product.product_price, product.image1, product.image2 FROM product INNER JOIN category	ON product.category_id = category.category_id ";
    db.query(
      query,

      (err, result) => {
        if (err) {
          console.log("Error:", err);
          return res.status(500).json({
            message: "Failed to retrieve data",
            error: err.message,
          });
        }

        res.status(200).json({
          message: "Data fetched successfully",
          data: result,
        });
        console.log(result);
      }
    );
  } catch (error) {
    console.log("Error:", error);
    res.status(500).json({
      message: error.message,
    });
  }
});

export default router;
