import React from 'react'
import useCart from '../../hooks/cartHook';

const CheckoutItems = () => {
    const { cart, clearCart, removeFromCart } = useCart();
  
    const total = cart.reduce(
      (sum, item) => sum + item.precio * item.cantidad,
      0
    );

    return (
        <div className="bg-white p-4 rounded shadow w-full md:w-[250px]">
          <h2 className="font-bold flex items-center gap-2 mb-4">🛒 Resumen de la Compra</h2>
          <ul className="space-y-2">
            {cart.map((item) => (
              <li key={item} className="flex gap-2 items-center justify-between">
                <div className="flex gap-2">
                  <span>{item.titulo}({item.cantidad})</span>
                </div>
                <span>$ {(item.precio * item.cantidad).toFixed(2)}</span>
              </li>
            ))}
            <div className="font-semibold text-lg mb-4 justify-end flex">
              Total compra: <span className="text-purple-600 ml-3">  ${total.toFixed(2)}</span>
            </div>
          </ul>
        </div>
      );
    };


export default CheckoutItems