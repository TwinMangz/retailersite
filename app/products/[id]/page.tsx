"use client";
export const dynamic = "force-dynamic";

import { useParams } from "next/navigation";
import { useState } from "react";
import { allProducts } from "@/data/products";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useCart();

  const product = allProducts.find((item) => item.id === Number(id));

  const [currentImage, setCurrentImage] = useState(0);
  const [added, setAdded] = useState(false); // ⭐ new state

  if (!product) {
    return <div className="text-center py-20">Product not found</div>;
  }

  const nextImage = () => {
    setCurrentImage((prev) =>
      prev === product.images.length - 1 ? 0 : prev + 1,
    );
  };

  const prevImage = () => {
    setCurrentImage((prev) =>
      prev === 0 ? product.images.length - 1 : prev - 1,
    );
  };

  const handleAddToCart = () => {
    addToCart(product);

    setAdded(true);

    setTimeout(() => {
      setAdded(false);
    }, 1200);
  };

  return (
    <div className="max-w-6xl mx-auto py-10 px-4 space-y-10">
      {/* BACK BUTTON */}
      <Link
        href="/products"
        className="inline-flex items-center gap-2 
             px-4 py-2 
             bg-gray-100 hover:bg-gray-200 
             rounded-lg 
             transition 
             text-sm font-medium"
      >
        ← Back to Products
      </Link>

      <div className="grid md:grid-cols-2 gap-10">
        {/* IMAGE SLIDER */}
        <div className="space-y-4">
          <div className="relative">
            <img
              src={product.images[currentImage]}
              className="w-full h-96 object-cover rounded-xl"
            />

            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 bg-white px-3 py-1 shadow rounded"
            >
              ◀
            </button>

            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 bg-white px-3 py-1 shadow rounded"
            >
              ▶
            </button>
          </div>

          {/* Thumbnail images */}
          <div className="flex gap-3">
            {product.images.map((img, index) => (
              <img
                key={index}
                src={img}
                onClick={() => setCurrentImage(index)}
                className={`w-20 h-20 object-cover rounded cursor-pointer border ${
                  currentImage === index ? "border-black" : ""
                }`}
              />
            ))}
          </div>
        </div>

        {/* PRODUCT INFO */}
        <div className="space-y-4">
          <h1 className="text-3xl font-bold">{product.name}</h1>

          <p className="text-xl text-gray-700">৳ {product.price}</p>

          <p className="text-gray-600">{product.description}</p>

          {/* ADD TO CART BUTTON */}
          <button
            onClick={handleAddToCart}
            className={`
              px-6 py-3 rounded-lg text-white
              transition duration-200
              active:scale-95
              ${added ? "bg-green-600" : "bg-black hover:bg-gray-800"}
            `}
          >
            {added ? "Added ✓" : "Add to Cart"}
          </button>
        </div>
      </div>

      {/* REVIEWS */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold">Customer Reviews</h2>

        {product.reviews.length === 0 ? (
          <p>No reviews yet.</p>
        ) : (
          product.reviews.map((review) => (
            <div key={review.id} className="border p-4 rounded-lg">
              <p className="font-semibold">{review.user}</p>
              <p>{"⭐".repeat(review.rating)}</p>
              <p className="text-gray-600">{review.comment}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
