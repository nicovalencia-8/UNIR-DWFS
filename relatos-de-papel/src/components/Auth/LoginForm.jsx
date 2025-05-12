const LoginForm = () => {
    return (
        <form>
            <input type="email" placeholder="Correo electrónico" className="auth__input" />
            <input type="password" placeholder="Contraseña" className="auth__input" />
            <button type="submit" className="auth__button">Iniciar sesión</button>
        </form>
    );
};

export default LoginForm;
