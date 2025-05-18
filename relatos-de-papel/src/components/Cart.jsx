import useCart from "../hooks/cart";

const Cart = () => {
    const { cart, clearCart } = useCart();
    const total = cart.reduce((sum, book) => sum + book.precio, 0);
    return (
         <div className="p-4">
            <h2 className="text-xl font-bold mb-4">Carrito de compras</h2>

            {cart.length === 0 ? (
                <p>El carrito está vacío.</p>
            ) : (
                <>
                <ul className="space-y-2 mb-4">
                    {cart.map((book, index) => (
                    <li key={index} className="border p-2 rounded">
                        {book.titulo} - ${book.precio.toFixed(2)}
                    </li>
                    ))}
                </ul>

                <div className="text-right font-semibold text-lg mb-4">
                    Total: <span className="text-purple-600">${total.toFixed(2)}</span>
                </div>

                <button
                    onClick={clearCart}
                    className="bg-red-700 text-white px-4 py-2 rounded hover:bg-red-600"
                >
                    Vaciar carrito
                </button>
                </>
            )}
        </div>
    );
}

export default Cart