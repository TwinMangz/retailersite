export default function Footer() {
  return (
    <footer className="bg-black text-white mt-20">
      <div
        className="max-w-6xl mx-auto px-6 py-12 grid 
                      grid-cols-1 md:grid-cols-3 gap-10"
      >
        {/* COMPANY INFO */}
        <div>
          <h2 className="text-xl font-bold mb-4">PholvaHubs</h2>
          <p className="text-gray-400 text-sm">
            Premium quality T-shirts designed for comfort and style. We deliver
            exclusively to selected villages.
          </p>
        </div>

        {/* CONTACT INFO */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Contact Us</h2>
          <p className="text-gray-400 text-sm">Phone: +91 87299 50407</p>
          <p className="text-gray-400 text-sm">Email: support@pholvahubs.com</p>
          <p className="text-gray-400 text-sm">Available: 9AM - 6PM</p>
        </div>

        {/* DELIVERY INFO */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Delivery Area</h2>
          <p className="text-gray-400 text-sm">We currently deliver only to:</p>
          <ul className="text-gray-400 text-sm mt-2 space-y-1">
            <li>• Motbung</li>
            <li>• Leikot</li>
            <li>• K Orphanage</li>
          </ul>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="border-t border-gray-700 text-center py-4 text-sm text-gray-500">
        © {new Date().getFullYear()} PholvaHubs. All rights reserved.
      </div>
    </footer>
  );
}
