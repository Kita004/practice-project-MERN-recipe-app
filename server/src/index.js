import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

import { userRouter } from "./routes/users.js";
import { recipeRouter } from "./routes/recipes.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth", userRouter);
app.use("/recipes", recipeRouter);

mongoose.connect(process.env.ATLAS_URI);

app.listen(3001, () => console.info("SERVER STARTED!"));
