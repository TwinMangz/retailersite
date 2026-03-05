"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import ProductCard from "@/components/ProductCard"
import { allProducts } from "@/data/products"

export default function Home() {
  const [search, setSearch] = useState("")
  const router = useRouter()

  const handleSearch = () => {
    router.push(`/products?search=${search}`)
  }

  const latestProducts = allProducts.filter(
    (product) => product.category === "latest"
  )

  const topProducts = allProducts.filter(
    (product) => product.category === "top"
  )

  return (
    <div className="space-y-20">

      {/* HERO */}
      <section className="text-center py-16">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-6">
          Welcome to UrbanWear
        </h1>

        {/* SEARCH */}
        <div className="max-w-xl mx-auto flex gap-2">
          <input
            type="text"
            placeholder="Search T-shirts..."
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
      </section>

      {/* LATEST */}
      <section>
        <h2 className="text-2xl font-bold mb-8 text-center">
          Latest Products
        </h2>

        <div className="grid gap-8 justify-items-center
          [grid-template-columns:repeat(auto-fit,minmax(280px,1fr))]">
          {latestProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* TOP SELLING */}
      <section>
        <h2 className="text-2xl font-bold mb-8 text-center">
          Top Selling
        </h2>

        <div className="grid gap-8 justify-items-center
          [grid-template-columns:repeat(auto-fit,minmax(280px,1fr))]">
          {topProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

    </div>
  )
}