import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const LoginForm = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();
        if (!email.trim() || !password.trim()) {
            setError("Todos los campos son requeridos");
            return;
        }
        setError("");
        navigate("/home");
    }
    return (
        <form onSubmit={handleLogin}>
            <input 
                type="email"
                placeholder="Correo electrónico" 
                className="auth__input" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input 
                type="password"
                placeholder="Contraseña"
                className="auth__input" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" className="auth__button">Iniciar sesión</button>
            {error && <p className="text-red-500">{error}</p>}
            <div className="mt-4 text-right">
                <span >¿No tienes una cuenta? </span>
            <Link to='/register' className="text-purple-900">Registrate aquí</Link>
            </div>
        </form>
    );
};

export default LoginForm;
