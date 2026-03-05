"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { useCart } from "@/context/CartContext"

export default function ProductCard({ product }: any) {
  const router = useRouter()
  const { addToCart } = useCart()

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation() // prevent redirect
    addToCart(product)
  }

  return (
    <div
      onClick={() => router.push(`/products/${product.id}`)}
      className="bg-white rounded-2xl shadow-md hover:shadow-xl 
                 transition duration-300 cursor-pointer 
                 p-4 w-full max-w-sm"
    >
      {/* IMAGE */}
      <div className="overflow-hidden rounded-xl">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-64 object-cover 
                     hover:scale-105 transition duration-300"
        />
      </div>

      {/* INFO */}
      <div className="mt-4 space-y-2">
        <h3 className="text-lg font-semibold">
          {product.name}
        </h3>

        <p className="text-gray-600">
          ৳ {product.price}
        </p>

        {/* ADD TO CART BUTTON */}
        <button
          onClick={handleAddToCart}
          className="w-full bg-black text-white 
                     py-2 rounded-lg 
                     hover:bg-gray-800 transition"
        >
          Add to Cart
        </button>
      </div>
    </div>
  )
}