import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ChevronDown } from 'lucide-react'

export default function HeroSection() {
  return (
    <div className="relative h-screen bg-gradient-to-br from-primary-900 via-dark to-primary-800 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            y: [0, 30, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
          }}
          className="absolute top-20 right-20 w-72 h-72 bg-accent-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, -30, 0],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            delay: 1,
          }}
          className="absolute bottom-20 left-20 w-72 h-72 bg-accent-400/10 rounded-full blur-3xl"
        />
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center justify-center">
        <div className="text-center space-y-8 px-4 max-w-4xl">
          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-7xl font-bold"
          >
            <span className="text-accent-400">Zephyr</span>
            <br />
            <span className="text-light">Restaurant & Lounge</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-light/80"
          >
            Rooftop Dining Experience with Mediterranean & Asian Fusion Cuisine
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-light/60 max-w-2xl mx-auto"
          >
            Experience luxury dining with a stunning rooftop ambiance, world-class cuisine, and exceptional service in the heart of Banani, Dhaka.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mt-10"
          >
            <Link
              to="/reservations"
              className="px-8 py-3 bg-gradient-to-r from-accent-500 to-accent-400 text-dark font-semibold rounded-lg hover:shadow-lg hover:shadow-accent-500/50 transition-all hover:scale-105"
            >
              Make a Reservation
            </Link>
            <Link
              to="/menu"
              className="px-8 py-3 border-2 border-accent-400 text-accent-400 font-semibold rounded-lg hover:bg-accent-400/10 transition-all"
            >
              View Our Menu
            </Link>
          </motion.div>

          {/* Info Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 text-left"
          >
            <div className="p-4 bg-primary-800/50 backdrop-blur rounded-lg border border-accent-500/20">
              <h3 className="text-accent-400 font-semibold mb-2">⭐ Rating</h3>
              <p className="text-light/70">4.4/5 based on 606 reviews</p>
            </div>
            <div className="p-4 bg-primary-800/50 backdrop-blur rounded-lg border border-accent-500/20">
              <h3 className="text-accent-400 font-semibold mb-2">📍 Location</h3>
              <p className="text-light/70">Catharsis Tower, Banani, Dhaka</p>
            </div>
            <div className="p-4 bg-primary-800/50 backdrop-blur rounded-lg border border-accent-500/20">
              <h3 className="text-accent-400 font-semibold mb-2">🕒 Hours</h3>
              <p className="text-light/70">3:00 PM - 3:30 AM Daily</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <ChevronDown size={32} className="text-accent-400" />
      </motion.div>
    </div>
  )
}
