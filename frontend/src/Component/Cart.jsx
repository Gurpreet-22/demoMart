import { useCart } from "./CartContext";


const Cart = () => {
  const { cart, removeFromCart, clearCart, increaseQty, decreaseQty } = useCart();

  const total = cart.reduce(
    (acc, item) => acc + item.product_price * item.quantity,
    0
  );

  return (
    
  
    <div className="max-w-3xl mx-auto p-6 mt-10 bg-white shadow rounded-xl">
      <h2 className="text-2xl font-bold mb-4">🛒 Your Cart</h2>

      {cart.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <>

          <ul className="divide-y divide-gray-200">
            {cart.map((item,id) => (
              <li key={id} className="flex justify-between py-4 items-center">
                <div>
                  <h3 className="font-semibold text-gray-800">{item.product_name}</h3>
                    <h3 className="font-semibold text-gray-800">{item.product_description}</h3>
                  <p className="text-sm text-gray-500">
                    ₹{item.product_price} × {item.quantity} = ₹{item.product_price * item.quantity}
                  </p>
                </div>

                {/* Quantity Controls */}
                <div className="flex items-center gap-2">
                  <button
                    className="px-2 py-1 border rounded-lg hover:bg-gray-100"
                    onClick={() => decreaseQty(item.id)}
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    className="px-2 py-1 border rounded-lg hover:bg-gray-100"
                    onClick={() => increaseQty(item.id)}
                  >
                    +
                  </button>

                  <button
                    className="text-red-500 hover:underline ml-2"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <div className="flex justify-between items-center mt-6">
            <p className="text-xl font-bold">Total: ₹{total}</p>
            <div className="flex gap-3">
              <button
                className="px-4 py-2 border border-gray-400 rounded-lg hover:bg-gray-100"
                onClick={clearCart}
              >
                Clear
              </button>
              <button className="px-4 py-2 bg-black text-white rounded-lg hover:opacity-90">
                Checkout
              </button>
            </div>
          </div>
        </>
      )}
    </div>
    
  );
};

export default Cart;
