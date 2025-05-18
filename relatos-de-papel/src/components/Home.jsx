import books from '../data/books.json'
import { FaCartPlus } from 'react-icons/fa'
import useCart from "../hooks/cart"

const Home = () => {
    const { addToCart } = useCart();
    return (
        <div className="content">
            <ul className="content__list">
            {
                books.map((book, key) =>(
                    <li className="list__book" key={key}>
                        <img className="book__image" src="../images/portadalibro.png" alt=""/>
                        <p className="book__title">{book.titulo}</p>
                        <p>{book.autor}</p>
                        <p className="book__pricerow">
                            <span className="pricerow__price">${book.precio}</span>
                            <FaCartPlus 
                                className="pricerow__cart" 
                                onClick={(e) => {
                                        e.stopPropagation();
                                        addToCart(book);
                                    }
                                }
                            />
                        </p>
                    </li>
                ))
            }
            </ul>
        </div>
    )
}

export default Home