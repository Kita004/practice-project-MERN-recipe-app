import { useState } from "react";
import axios from "axios";

export const AuthPage = () => {
    return (
        <div className="auth">
            <Login />
            <Register />
        </div>
    );
};

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return (
        <Form
            label={"Login"}
            username={username}
            setUsername={setUsername}
            password={password}
            setPassword={setPassword}
        />
    );
};

const Register = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            await axios.post("http://localhost:3001/auth/register", {
                username,
                password,
            });
            alert("Registration Completed! Please Login..");
        } catch (err) {
            console.info("ERROR: ", err);
        }
    };

    return (
        <Form
            label={"Register"}
            handleSubmit={handleSubmit}
            username={username}
            setUsername={setUsername}
            password={password}
            setPassword={setPassword}
        />
    );
};

const Form = ({
    label,
    handleSubmit,
    username,
    setUsername,
    password,
    setPassword,
}) => {
    return (
        <div className="auth-container">
            <form onSubmit={handleSubmit}>
                <h2>{label}</h2>
                <div className="form-group">
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id={"username" + label}
                        value={username}
                        onChange={(event) => setUsername(event.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id={"password" + label}
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                </div>
                <button type="submit">{label}</button>
            </form>
        </div>
    );
};
