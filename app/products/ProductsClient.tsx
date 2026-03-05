"use client"

import { useState, useEffect } from "react"
import ProductCard from "@/components/ProductCard"
import { allProducts } from "@/data/products"
import { useRouter, useSearchParams } from "next/navigation"

export default function ProductsClient() {

  const router = useRouter()
  const searchParams = useSearchParams()

  const query = searchParams.get("search") || ""

  const [search, setSearch] = useState(query)

  useEffect(() => {
    setSearch(query)
  }, [query])

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

      {/* SEARCH */}
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

      {/* PRODUCTS */}
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