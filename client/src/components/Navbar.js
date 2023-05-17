import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to="/">Home</Link>
            <Link to="/create-recipe">Create Recipe</Link>
            <Link to="/recipes">Recipes</Link>
            <Link to="/auth">Register/Login</Link>
        </nav>
    );
};
