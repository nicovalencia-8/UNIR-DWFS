const RegisterForm = () => {
    return (
        <form>
            <input type="text" placeholder="Nombre" className="auth__input" />
            <input type="email" placeholder="Email" className="auth__input" />
            <input type="password" placeholder="Contraseña" className="auth__input" />
            <button type="submit" className="auth__button">Crear Una Cuenta</button>
        </form>
    );
};

export default RegisterForm;
