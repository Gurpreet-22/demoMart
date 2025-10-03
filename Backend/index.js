import express from "express";
import dotenv from "dotenv";
import Cors from "cors";
import router from "./controller/route.js";

const Port = 8080;

dotenv.config();
const app = express();

app.use(Cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", router);
console.log(router);

app.use((req, res) => {
  res.send("hello");
});

app.listen(Port, () => {
  console.log(`server is running at ${Port}`);
});
