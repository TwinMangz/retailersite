"use client"
import { useState } from "react"

const allowedVillages = ["VillageA", "VillageB", "VillageC"]

export default function Checkout() {
  const [village, setVillage] = useState("")
  const [house, setHouse] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = () => {
    if (!allowedVillages.includes(village)) {
      setError("Delivery not available in this village")
      return
    }
    alert("Proceeding to payment...")
  }

  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>

      <input
        className="border p-2 w-full mb-2"
        placeholder="Village"
        onChange={(e) => setVillage(e.target.value)}
      />

      <input
        className="border p-2 w-full mb-2"
        placeholder="House Number"
        onChange={(e) => setHouse(e.target.value)}
      />

      {error && <p className="text-red-500">{error}</p>}

      <button
        onClick={handleSubmit}
        className="bg-black text-white px-4 py-2 w-full"
      >
        Pay Now
      </button>
    </div>
  )
}