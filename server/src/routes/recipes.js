import express from "express";
import mongoose from "mongoose";
import { RecipeModel } from "../models/Recipes.js";
import { UserModel } from "../models/Users.js";

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const response = await RecipeModel.find({});
        res.json(response);
    } catch (err) {
        return res.json(err);
    }
});

router.post("/create", async (req, res) => {
    const recipe = new RecipeModel(req.body);
    try {
        const response = await recipe.save();
        res.json(response);
    } catch (err) {
        return res.json("ERROR when Creating Recipe: ", err);
    }
});

router.put("/", async (req, res) => {
    try {
        const recipe = await RecipeModel.findById(req.body.recipeId);
        const user = await UserModel.findById(req.body.userId);

        user.savedRecipes.push(recipe);
        await user.save();

        res.json({ savedRecipes: user.savedRecipes });
    } catch (err) {
        return res.json(err);
    }
});

router.get("/saved-recipes/ids", async () => {
    try {
        const user = await UserModel.findById(req.body.userId);
        res.json({ savedRecipes: user?.savedRecipes });
    } catch (err) {
        res.json(err);
    }
});

router.get("/saved-recipes", async () => {
    try {
        const user = await UserModel.findById(req.body.userId);
        const savedRecipes = await RecipeModel.find({
            _id: { $in: user.savedRecipes },
        });
        res.json({ savedRecipes });
    } catch (err) {
        res.json(err);
    }
});

export { router as recipeRouter };
