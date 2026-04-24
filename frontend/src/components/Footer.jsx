import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-r from-primary-900 to-primary-800 border-t border-accent-500/30 mt-20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-2xl font-bold text-accent-400 mb-4">🍽️ Zephyr</h3>
            <p className="text-light/70">
              Experience luxury dining at its finest with Mediterranean and Asian fusion cuisine.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold text-accent-400 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/menu" className="text-light/70 hover:text-accent-400 transition">
                  Menu
                </Link>
              </li>
              <li>
                <Link to="/reservations" className="text-light/70 hover:text-accent-400 transition">
                  Reservations
                </Link>
              </li>
              <li>
                <Link to="/events" className="text-light/70 hover:text-accent-400 transition">
                  Events
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-light/70 hover:text-accent-400 transition">
                  Gallery
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="text-lg font-semibold text-accent-400 mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-light/70">
                <Phone size={16} />
                +880 1321-197337
              </li>
              <li className="flex items-center gap-2 text-light/70">
                <Mail size={16} />
                zephyrlounge12@gmail.com
              </li>
              <li className="flex items-start gap-2 text-light/70">
                <MapPin size={16} className="mt-1" />
                <span>Catharsis Tower, House-133, Road-12, Banani, Dhaka</span>
              </li>
            </ul>
          </motion.div>

          {/* Social Media */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h4 className="text-lg font-semibold text-accent-400 mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/zephyr.restaurant.lounge"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-accent-500/20 hover:bg-accent-500/40 rounded-full transition"
              >
                <Facebook size={20} className="text-accent-400" />
              </a>
              <a
                href="#"
                className="p-3 bg-accent-500/20 hover:bg-accent-500/40 rounded-full transition"
              >
                <Instagram size={20} className="text-accent-400" />
              </a>
              <a
                href="#"
                className="p-3 bg-accent-500/20 hover:bg-accent-500/40 rounded-full transition"
              >
                <Twitter size={20} className="text-accent-400" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-light/50 text-sm">
              &copy; {currentYear} Zephyr Restaurant & Lounge. All rights reserved.
            </p>
            <div className="flex gap-6 mt-4 md:mt-0 text-sm text-light/50">
              <a href="#" className="hover:text-accent-400 transition">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-accent-400 transition">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
