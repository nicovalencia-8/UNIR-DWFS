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
        <h3>El carrito está vacío.</h3>
      ) : (
        <>
          <div className="space-y-2 mb-4">
            <div className="flex flex-row w-full gap-x-20">
              <div className="flex-col w-50">Libro</div>
              <div className="flex-col w-50">Precio</div>
              <div className="flex-col w-50">Cantidad</div>
              <div className="flex-col w-50">Total</div>
            </div>
            {cart.map((item, index) => (
              <div key={index} className="flex flex-row w-full gap-x-20">
                    <p className="font-semibold">{item.titulo}</p>
                    <p className="text-sm text-gray-600">{item.cantidad}</p>
                    <p>${item.precio.toFixed(2)} c/u</p>
                    <p className="text-purple-600 font-bold">
                      Total: ${(item.precio * item.cantidad).toFixed(2)}
                    </p>
              </div>
            ))}
          </div>

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