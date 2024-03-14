import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./Database/dbConfig.js";
import cookieParser from "cookie-parser";
import ImportData from "./Dataimport.js";
import products from "./Data/Product.js";
import productRoute from "./Routes/ProductRoutes.js";
import userRouter from "./Routes/UserRoutes.js";
import orderRouter from "./Routes/orderRoutes.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use(
  cors({
    origin: ["https://shiny-kelpie-c61860.netlify.app"],
    methods: ["GET", "POST"],
    credentials: true,
  })
);

app.use(cookieParser());

connectDB();

//   app.get("/api/products", (req, res) => {
//     res.json(products);
//   })

// app.get("/api/products/:id", (req, res) => {
//   const product = products.find((p) => p._id === req.params.id);
//    res.json(product);
//  });

// API
app.use("/api/import", ImportData);
app.use("/api/products", productRoute);
app.use("/api/users", userRouter);
app.use("/api/orders", orderRouter);

app.get("/", (req, res) => {
  res.send("API is running...");
});

const port = process.env.PORT;
app.listen(port, () => {
  console.log("My app is listening at-", port);
});
