import express from "express";
import dotenv from "dotenv";
import connectToDb from "./config/db.js";
import recipeRoutes from "./routes/recipeRoutes.js";

dotenv.config();

const app = express();

app.use(express.json());

connectToDb();

app.use("/api/recipe", recipeRoutes);

app.listen(process.env.PORT, () => {
  console.log("Server is running");
});
