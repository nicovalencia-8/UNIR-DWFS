import useCart from "../hooks/cart";

const Cart = () => {
const { cart, clearCart } = useCart();

  const total = cart.reduce(
    (sum, item) => sum + item.precio * item.cantidad,
    0
  );

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Carrito de compras</h2>

      {cart.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <>
          <ul className="space-y-2 mb-4">
            {cart.map((item, index) => (
              <li key={index} className="border p-2 rounded">
                <div className="flex justify-between">
                  <div>
                    <p className="font-semibold">{item.titulo}</p>
                    <p className="text-sm text-gray-600">Cantidad: {item.cantidad}</p>
                  </div>
                  <div className="text-right">
                    <p>${item.precio.toFixed(2)} c/u</p>
                    <p className="text-purple-600 font-bold">
                      Total: ${(item.precio * item.cantidad).toFixed(2)}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <div className="text-right font-semibold text-lg mb-4">
            Total compra: <span className="text-purple-600">${total.toFixed(2)}</span>
          </div>

          <button
            onClick={clearCart}
            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
          >
            Vaciar carrito
          </button>
        </>
      )}
    </div>
  );
}

export default Cart