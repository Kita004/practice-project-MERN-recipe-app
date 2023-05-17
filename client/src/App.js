import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { AuthPage } from "./pages/AuthPage";
import { RecipeFormPage } from "./pages/RecipeFormPage";
import { RecipeList } from "./pages/RecipeList";

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/auth" element={<AuthPage />} />
                    <Route path="/create-recipe" element={<RecipeFormPage />} />
                    <Route path="/recipes" element={<RecipeList />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
