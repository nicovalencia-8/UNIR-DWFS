import React from 'react'
import Header from './Header'
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";

const App = () => {
  return (
    <div>
      <Header></Header>
      <Navbar></Navbar>
        <p className="content">Contenido de Ejemplo</p>
      <Footer></Footer>
    </div>
  )
}

export default App
