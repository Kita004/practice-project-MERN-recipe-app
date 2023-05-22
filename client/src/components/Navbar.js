import { useCookies } from "react-cookie";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
    const [cookies, setCookies] = useCookies(["access_token"]);
    const nav = useNavigate();

    const logout = () => {
        setCookies("access_token", "");
        window.localStorage.clear();
        nav("/auth");
    };
    return (
        <nav className="navbar">
            <Link to="/">Home</Link>
            <Link to="/create-recipe">Create Recipe</Link>
            <Link to="/recipes">Recipes</Link>
            {cookies.access_token ? (
                <button onClick={() => logout()}>Logout</button>
            ) : (
                <Link to="/auth">Register/Login</Link>
            )}
        </nav>
    );
};
