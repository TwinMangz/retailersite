import { Suspense } from "react"
import ProductsClient from "./ProductsClient"

export default function Page() {
  return (
    <Suspense fallback={<div className="text-center p-10">Loading...</div>}>
      <ProductsClient />
    </Suspense>
  )
}