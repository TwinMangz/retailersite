"use client";

import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";

export default function FloatingCart() {
  const { cart } = useCart();
  const router = useRouter();

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  if (totalItems === 0) return null;

  return (
    <button
      onClick={() => router.push("/cart")}
      className="
      fixed bottom-6 right-6
      bg-black text-white
      w-16 h-16
      rounded-full
      shadow-xl
      flex items-center justify-center
      text-2xl
      hover:scale-105
      active:scale-95
      transition
      z-50
      "
    >
      🛒
      {/* badge */}
      <span
        className="
        absolute -top-1 -right-1
        bg-red-500
        text-white
        text-xs
        w-6 h-6
        rounded-full
        flex items-center justify-center
        "
      >
        {totalItems}
      </span>
    </button>
  );
}
