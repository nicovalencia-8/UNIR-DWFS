import books from '../data/books.json'
import { useState } from 'react'
import { FaCartPlus } from 'react-icons/fa'
import useCart from "../hooks/cartHook"
import Modal from './Modal'

const BookDetail = ({id}) => {
  const book = books.find((b) => b.id == id);
  const { addToCart } = useCart();
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="flex justify-center mt-10">
        <img src={book?.img_url} alt={book?.titulo} />
        <div className="flex flex-col ml-4 gap-y-5">
          <p>Titulo: <b>{book?.titulo}</b></p>
          <p>Autor: <b>{book?.autor}</b></p>
          <p>Descripción: <i>{book?.descripcion}</i></p>
          <p>Precio: $ {book?.precio}</p>
          <div className="relative group w-fit flex flex-row">
              Añadir al carrito
              <FaCartPlus     
                  className="pricerow__cart" 
                  onClick={(e) => {
                          e.stopPropagation();
                          addToCart(book);
                          setShowModal(true);
                      }
                  }
              />
              <span className="pricerow__tooltip">Añadir al carrito</span>
          </div>
        </div>
        <Modal show={showModal} onClose={() => setShowModal(false)}>
          <h2 className="text-xl font-semibold">¡Libro añadido!</h2>
          <p className="text-gray-600">El libro <b>{book.titulo}</b> fue añadido al carrito</p>
        </Modal>
    </div>
  )
}

export default BookDetail