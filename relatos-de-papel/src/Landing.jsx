import React from 'react'
import books from './data/books.json'

const Landing = () => {
    return (
        <div className="content">
            <ul className="content__list">
            {
                books.map(book =>(
                    <li className="list__book">
                        <img className="book__image" src="../public/images/portadalibro.jpg" alt=""/>
                        <p className="book__title">{book.titulo}</p>
                        <p>{book.autor}</p>
                        <p>${book.precio}</p>
                    </li>
                ))
            }
            </ul>
        </div>
    )
}

export default Landing