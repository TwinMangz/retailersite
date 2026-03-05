"use client"

import { useState } from "react"
import ProductCard from "@/components/ProductCard"
import { allProducts } from "@/data/products"
import { useRouter } from "next/navigation"

export default function Products({ searchParams }: { searchParams: { search?: string } }) {
  
  const router = useRouter()

  const query = searchParams?.search || ""
  const [search, setSearch] = useState(query)

  const filteredProducts = allProducts.filter((product) =>
    product.name.toLowerCase().includes(query.toLowerCase())
  )

  const handleSearch = () => {
    router.push(`/products?search=${search}`)
  }

  return (
    <div className="max-w-7xl mx-auto px-4 space-y-10">

      <h1 className="text-3xl font-bold text-center">
        All Products
      </h1>

      {/* SEARCH BAR */}
      <div className="max-w-xl mx-auto flex gap-2">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full border p-3 rounded-lg"
        />
        <button
          onClick={handleSearch}
          className="bg-black text-white px-6 rounded-lg"
        >
          Search
        </button>
      </div>

      {/* PRODUCT GRID */}
      {filteredProducts.length === 0 ? (
        <p className="text-center text-gray-500">
          No products found.
        </p>
      ) : (
        <div
          className="
          grid gap-8
          [grid-template-columns:repeat(auto-fit,minmax(220px,1fr))]
          "
        >
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}

    </div>
  )
}