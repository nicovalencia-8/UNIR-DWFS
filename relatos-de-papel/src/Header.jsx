import React from 'react'

const Header = () => {
  return (
    <div className="header">
        <div className="header__icon"></div>
        <div className="header__buscador">
            <input type="search" id="default-search"
                   className="buscador__input"
                   placeholder="Buscar  ..." required/>
            <div className="buscador__icon">
                <svg className="icon__svg" aria-hidden="true"
                     xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
            </div>
        </div>
        <div className="header__carticon">Carrito</div>
        <div className="header__hearticon">Corazón</div>
        <div className="header__usericon">Usuario</div>
        <div className="header__languageicon">Lenguaje</div>
    </div>
  )
}

export default Header