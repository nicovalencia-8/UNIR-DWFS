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
            <Link className="navbar__item" to='/about'>
                Acerca De
            </Link>
            <Link className="navbar__item" to='/contact'>
                Contacto
            </Link>


        </nav>
    )
}

export default Navbar