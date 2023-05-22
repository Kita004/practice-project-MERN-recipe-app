import { useState } from "react";

export const RecipeFormPage = () => {
    const [recipe, setRecipe] = useState({
        name: "",
        ingredients: [],
        instructions: "",
        imgURL: "",
        cookingTime: 0,
        userOwner: 0,
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setRecipe({ ...recipe, [name]: value });
    };

    return (
        <div className="create-recipe">
            <h2>Create Recipe!</h2>
            <form>
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    onChange={handleChange}
                />

                <label htmlFor="description">Description</label>
                <textarea
                    id="description"
                    name="description"
                    onChange={handleChange}
                ></textarea>

                <label htmlFor="ingredients">Ingredients</label>

                <label htmlFor="instructions">Instructions</label>
                <textarea
                    id="instructions"
                    name="instructions"
                    onChange={handleChange}
                ></textarea>

                <label htmlFor="imageUrl">Image URL</label>
                <input
                    type="text"
                    id="imageUrl"
                    name="imageUrl"
                    onChange={handleChange}
                />

                <label htmlFor="cookingTime">Cooking Time (minutes)</label>
                <input
                    type="number"
                    id="cookingTime"
                    name="cookingTime"
                    onChange={handleChange}
                />

                <button type="submit">Create Recipe</button>
            </form>
        </div>
    );
};
