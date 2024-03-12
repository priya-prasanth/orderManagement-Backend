import express from "express";
import users from "./Data/users.js";
import User from "./Models/UserModel.js";
import products from "./Data/Product.js";
import Product from "./Models/ProductModel.js";
import asyncHandler from "express-async-handler";



const ImportData = express.Router();

  //  GET ALL PRODUCTS
ImportData.post("/user",
  asyncHandler(async (req, res) => {
    await User.deleteOne();
    const importUser = await User.insertMany(users);
    res.send({ importUser });
  })
);

// GET SINGLE PRODUCT BY ID
ImportData.post("/products",
  asyncHandler(async (req, res) => {
    await Product.deleteOne();
    const importProducts = await Product.insertMany(products);
    res.send({ importProducts });
  })
);


export default ImportData;
