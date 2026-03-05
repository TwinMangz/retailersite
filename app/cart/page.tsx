"use client"
import { useCart } from "@/context/CartContext"
import { useRouter } from "next/navigation"

export default function Cart() {
  const { cart, removeFromCart, increaseQty, decreaseQty } = useCart()
  const router = useRouter()

  const total = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  )

  return (
    <div className="max-w-4xl mx-auto">
      <button
        onClick={() => router.back()}
        className="mb-6 text-sm text-gray-500 hover:text-black"
      >
        ← Back
      </button>

      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>

      {cart.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="space-y-6">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex flex-col sm:flex-row items-center gap-4 bg-white p-4 rounded-xl shadow-sm"
            >
              <img
                src={item.images[0]}
                className="w-24 h-24 object-cover rounded-lg"
              />

              <div className="flex-1 text-center sm:text-left">
                <h2 className="font-semibold">{item.name}</h2>
                <p className="text-gray-600">₹{item.price}</p>

                <div className="flex justify-center sm:justify-start items-center gap-3 mt-2">
                  <button
                    onClick={() => decreaseQty(item.id)}
                    className="px-3 py-1 border rounded"
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => increaseQty(item.id)}
                    className="px-3 py-1 border rounded"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="text-right">
                <p className="font-semibold">
                  ₹{item.price * item.quantity}
                </p>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 text-sm mt-2"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          <div className="text-right mt-6">
            <h2 className="text-xl font-bold">Total: ₹{total}</h2>
          </div>
        </div>
      )}
    </div>
  )
}