import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link className="navbar__item" to='/home'>
                Inicio
            </Link>
            <Link className="navbar__item" to='/categorias'>
                Categorias
            </Link>
            <div className="navbar__item">
                Acerca De
            </div>
            <div className="navbar__item">
                Contacto
            </div>


        </nav>
    )
}

export default Navbar