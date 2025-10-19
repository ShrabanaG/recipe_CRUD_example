import mongoose from "mongoose";

const ingredientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  amount: {
    type: String,
    required: true,
  },
});

const recipeSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, minlength: 2 },
    description: { type: String },
    ingredients: { type: [ingredientSchema], default: [] },
    instructions: { type: String, required: true },
    prepTimeMinutes: { type: Number, min: 0, default: 0 },
    cookTimeMinutes: { type: Number, min: 0, default: 0 },
    servings: { type: Number, min: 1, default: 1 },
    tags: { type: [String], default: [] },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Recipe", recipeSchema);
