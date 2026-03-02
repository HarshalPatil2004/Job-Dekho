export default function Footer() {
  return (
    <footer className="relative py-6 sm:py-12 px-2 sm:px-6 mt-6 sm:mt-10 overflow-hidden">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-50"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800')",
        }}
      />

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">

        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Company</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline text-white font-medium">About Us</a></li>
            <li><a href="#" className="hover:underline text-white font-medium">Careers</a></li>
            <li><a href="#" className="hover:underline text-white font-medium">Press</a></li>
            <li><a href="#" className="hover:underline text-white font-medium">Blog</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Products</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline text-white font-medium">Pricing</a></li>
            <li><a href="#" className="hover:underline text-white font-medium">Features</a></li>
            <li><a href="#" className="hover:underline text-white font-medium">Integrations</a></li>
            <li><a href="#" className="hover:underline text-white font-medium">API</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Help</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline text-white font-medium">Support Center</a></li>
            <li><a href="#" className="hover:underline text-white font-medium">Contact Us</a></li>
            <li><a href="#" className="hover:underline text-white font-medium">FAQs</a></li>
            <li><a href="#" className="hover:underline text-white font-medium">Documentation</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Follow Us</h3>
          <ul className="flex space-x-4 text-xl">
            <li><a href="#" aria-label="Facebook" className="hover:text-blue-600 text-white">🌐</a></li>
            <li><a href="#" aria-label="Twitter" className="hover:text-blue-400 text-white">🐦</a></li>
            <li><a href="#" aria-label="LinkedIn" className="hover:text-blue-700 text-white">💼</a></li>
            <li><a href="#" aria-label="Instagram" className="hover:text-pink-600 text-white">📸</a></li>
          </ul>
        </div>

      </div>

      <div className="relative mt-6 sm:mt-10 text-center text-white text-xs sm:text-sm font-medium">
        © 2025 Patil&apos;s Company. All rights reserved.
      </div>
    </footer>
  );
}