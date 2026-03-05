import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { CartProvider } from "@/context/CartContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <CartProvider>
          {/* GLOBAL NAVBAR */}
          <Navbar />

          {/* PAGE CONTENT */}
          <main className="w-full flex-grow max-w-6xl mx-auto px-4 py-6">
            {children}
          </main>

          {/* GLOBAL FOOTER */}
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
