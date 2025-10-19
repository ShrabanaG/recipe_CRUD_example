import Recipe from "../models/recipeModel.js";
import mongoose from "mongoose";

// Create a new recipe
export const createRecipe = async (req, res) => {
  try {
    const recipe = new Recipe(req.body);
    await recipe.save();
    res
      .status(201)
      .json({ message: "Recipe created successfully", data: recipe });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Error creating recipe", error: error.message });
  }
};

// Get all recipes
export const getAllRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find().sort({ createdAt: -1 });
    res.status(200).json({ count: recipes.length, data: recipes });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Error fetching recipes", error: error.message });
  }
};

// Get recipe by ID
export const getRecipeById = async (req, res) => {
  try {
    const { id } = req.params;

    // check valid ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid recipe ID" });
    }

    const recipe = await Recipe.findById(id);
    if (!recipe) {
      return res.status(404).json({ message: "Recipe not found" });
    }

    res.status(200).json({ data: recipe });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Error fetching recipe", error: error.message });
  }
};

// Update recipe by ID
export const updateRecipe = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid recipe ID" });
    }

    const updatedRecipe = await Recipe.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    if (!updatedRecipe) {
      return res.status(404).json({ message: "Recipe not found" });
    }

    res
      .status(200)
      .json({ message: "Recipe updated successfully", data: updatedRecipe });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Error updating recipe", error: error.message });
  }
};

// Delete recipe by ID
export const deleteRecipe = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid recipe ID" });
    }

    const deletedRecipe = await Recipe.findByIdAndDelete(id);
    if (!deletedRecipe) {
      return res.status(404).json({ message: "Recipe not found" });
    }

    res.status(200).json({ message: "Recipe deleted successfully" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Error deleting recipe", error: error.message });
  }
};
