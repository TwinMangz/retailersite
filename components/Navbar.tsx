"use client"

import { useState } from "react"
import Link from "next/link"
import { useCart } from "@/context/CartContext"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { cart } = useCart()

  const totalQuantity = cart.reduce(
    (total, item) => total + item.quantity,
    0
  )

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">

        {/* LOGO */}
        <Link href="/" className="text-2xl font-bold">
          PholvaHubs
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="hover:text-gray-600">
            Home
          </Link>

          <Link href="/products" className="hover:text-gray-600">
            Products
          </Link>

          <Link href="/cart" className="relative hover:text-gray-600">
            Cart
            {totalQuantity > 0 && (
              <span className="absolute -top-2 -right-4 bg-black text-white text-xs px-2 py-0.5 rounded-full">
                {totalQuantity}
              </span>
            )}
          </Link>
        </div>

        {/* MOBILE HAMBURGER */}
        <button
          className="md:hidden flex flex-col gap-1"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="w-6 h-0.5 bg-black"></span>
          <span className="w-6 h-0.5 bg-black"></span>
          <span className="w-6 h-0.5 bg-black"></span>
        </button>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="flex flex-col px-6 py-4 gap-4">

            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="hover:text-gray-600"
            >
              Home
            </Link>

            <Link
              href="/products"
              onClick={() => setIsOpen(false)}
              className="hover:text-gray-600"
            >
              Products
            </Link>

            <Link
              href="/cart"
              onClick={() => setIsOpen(false)}
              className="relative hover:text-gray-600"
            >
              Cart
              {totalQuantity > 0 && (
                <span className="ml-2 bg-black text-white text-xs px-2 py-0.5 rounded-full">
                  {totalQuantity}
                </span>
              )}
            </Link>

          </div>
        </div>
      )}
    </nav>
  )
}