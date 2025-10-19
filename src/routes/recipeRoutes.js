import express from "express";
import {
  createRecipe,
  getAllRecipes,
  getRecipeById,
  deleteRecipe,
  updateRecipe,
} from "../contorllers/recipeControllers.js";

const router = express.Router();

router.post("/", createRecipe);
router.get("/", getAllRecipes);
router.get("/:id", getRecipeById);
router.put("/:id", updateRecipe);
router.delete("/:id", deleteRecipe);

export default router;
