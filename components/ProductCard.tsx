"use client"

import { useRouter } from "next/navigation"
import { useCart } from "@/context/CartContext"
import { useState } from "react"

export default function ProductCard({ product }: any) {

  const router = useRouter()
  const { addToCart } = useCart()

  const [added, setAdded] = useState(false)

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation()

    if (added) return

    addToCart(product)

    setAdded(true)

    setTimeout(() => {
      setAdded(false)
    }, 1200)
  }

  return (
    <div
      onClick={() => router.push(`/products/${product.id}`)}
      className="
      bg-white rounded-2xl shadow-md
      hover:shadow-xl transition duration-300
      cursor-pointer p-4 w-full max-w-sm
      "
    >

      {/* IMAGE */}
      <div className="overflow-hidden rounded-xl">
        <img
          src={product.images[0]}
          alt={product.name}
          className="
          w-full h-64 object-cover
          hover:scale-105 transition duration-300
          "
        />
      </div>

      {/* INFO */}
      <div className="mt-4 space-y-2">

        <h3 className="text-lg font-semibold">
          {product.name}
        </h3>

        <p className="text-gray-600">
          ₹ {product.price}
        </p>

        {/* ADD TO CART */}
        <button
          onClick={handleAddToCart}
          disabled={added}
          className={`
            w-full py-2 rounded-lg text-white
            transition duration-200
            active:scale-95
            ${added ? "bg-green-600" : "bg-black hover:bg-gray-800"}
          `}
        >
          {added ? "Added ✓" : "Add to Cart"}
        </button>

      </div>

    </div>
  )
}