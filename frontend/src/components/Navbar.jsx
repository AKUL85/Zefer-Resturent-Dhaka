import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, Phone, Mail } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Menu', path: '/menu' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Events', path: '/events' },
    { name: 'Reservations', path: '/reservations' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <nav className="bg-gradient-to-r from-primary-900 to-primary-800 sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="text-3xl font-bold text-accent-500"
            >
              🍽️
            </motion.div>
            <span className="text-xl font-bold text-accent-400 hidden sm:inline">Zephyr</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-light hover:text-accent-400 transition relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent-400 group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </div>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center gap-6">
            <a
              href="tel:+8801321197337"
              className="flex items-center gap-2 text-accent-400 hover:text-accent-300"
            >
              <Phone size={20} />
              <span className="text-sm">+880 1321-197337</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-light"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden pb-4 space-y-2"
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2 text-light hover:bg-accent-500/20 rounded transition"
              >
                {link.name}
              </Link>
            ))}
            <div className="border-t border-primary-700 mt-4 pt-4">
              <a
                href="tel:+8801321197337"
                className="block px-4 py-2 text-accent-400 hover:text-accent-300"
              >
                📞 +880 1321-197337
              </a>
              <a
                href="mailto:zephyrlounge12@gmail.com"
                className="block px-4 py-2 text-accent-400 hover:text-accent-300"
              >
                ✉️ zephyrlounge12@gmail.com
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  )
}
