import { useState } from 'react'
import { motion } from 'framer-motion'
import { X } from 'lucide-react'

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null)

  const galleryItems = [
    { id: 1, title: 'Rooftop Ambiance', category: 'ambiance' },
    { id: 2, title: 'Signature Dish', category: 'food' },
    { id: 3, title: 'Evening View', category: 'ambiance' },
    { id: 4, title: 'Gourmet Preparation', category: 'food' },
    { id: 5, title: 'Indoor Lounge', category: 'ambiance' },
    { id: 6, title: 'Cocktail Selection', category: 'drinks' },
    { id: 7, title: 'Plated Perfection', category: 'food' },
    { id: 8, title: 'Event Setup', category: 'events' },
  ]

  return (
    <div className="bg-dark">
      {/* Hero Section */}
      <div className="relative h-72 bg-gradient-to-br from-primary-900 to-primary-800 overflow-hidden">
        <motion.div
          animate={{
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
          className="absolute inset-0 flex items-center justify-center opacity-20 text-9xl"
        >
          📸
        </motion.div>

        <div className="relative h-full flex items-center justify-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold text-center text-light"
          >
            Our <span className="text-accent-400">Gallery</span>
          </motion.h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              onClick={() => setSelectedImage(item)}
              className="relative h-64 rounded-lg overflow-hidden cursor-pointer group"
            >
              {/* Placeholder gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent-500/30 to-primary-900 group-hover:from-accent-500/50 group-hover:to-primary-800 transition-all duration-300"></div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="text-4xl"
                >
                  🔍
                </motion.div>
              </div>

              {/* Text overlay */}
              <div className="absolute inset-0 flex items-end p-4 bg-gradient-to-t from-black/60 to-transparent">
                <div>
                  <h3 className="text-lg font-bold text-light">
                    {item.title}
                  </h3>
                  <p className="text-sm text-accent-400 capitalize">
                    {item.category}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-light hover:text-accent-400 transition"
            >
              <X size={32} />
            </button>

            <div className="bg-gradient-to-br from-accent-500/20 to-primary-900 rounded-lg p-8 aspect-video flex items-center justify-center text-6xl">
              🖼️
            </div>

            <div className="mt-6 text-center">
              <h2 className="text-2xl font-bold text-light mb-2">
                {selectedImage.title}
              </h2>
              <p className="text-accent-400 capitalize">
                {selectedImage.category}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  )
}
