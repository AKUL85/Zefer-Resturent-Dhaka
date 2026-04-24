import HeroSection from '../components/HeroSection'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Link } from 'react-router-dom'
import { Clock, Users, Utensils, Wine } from 'lucide-react'

export default function Home() {
  const { ref: refHighlights, inView: inViewHighlights } = useInView({ threshold: 0.2 })
  const { ref: refMenu, inView: inViewMenu } = useInView({ threshold: 0.2 })

  const highlights = [
    {
      icon: <Utensils size={40} />,
      title: 'Premium Cuisine',
      description: 'Mediterranean and Asian fusion with finest ingredients'
    },
    {
      icon: <Wine size={40} />,
      title: 'Curated Selection',
      description: 'Extensive collection of wines, cocktails, and beverages'
    },
    {
      icon: <Users size={40} />,
      title: 'Event Hosting',
      description: 'Perfect venue for private events and gatherings'
    },
    {
      icon: <Clock size={40} />,
      title: 'Extended Hours',
      description: 'Open till 3:30 AM for your late-night dining'
    },
  ]

  const menuCategories = [
    { name: 'Appetizers', emoji: '🍤', count: '12+ Items' },
    { name: 'Salads', emoji: '🥗', count: '8+ Items' },
    { name: 'Sushi', emoji: '🍣', count: '10+ Items' },
    { name: 'Pizza', emoji: '🍕', count: '6+ Items' },
    { name: 'Main Course', emoji: '🥩', count: '8+ Items' },
    { name: 'Desserts', emoji: '🍰', count: '5+ Items' },
  ]

  return (
    <div>
      <HeroSection />

      {/* Highlights Section */}
      <section ref={refHighlights} className="py-20 bg-dark">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inViewHighlights ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why Choose <span className="text-accent-400">Zephyr?</span>
            </h2>
            <p className="text-light/60 max-w-2xl mx-auto">
              Discover what makes us one of Dhaka's most beloved fine dining destinations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inViewHighlights ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-6 bg-gradient-to-br from-primary-800 to-primary-900 rounded-lg border border-accent-500/20 hover:border-accent-500/50 transition-all group hover:shadow-lg hover:shadow-accent-500/20"
              >
                <div className="text-accent-400 mb-4 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-light">
                  {item.title}
                </h3>
                <p className="text-light/60">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Preview Section */}
      <section ref={refMenu} className="py-20 bg-gradient-to-b from-primary-900 to-dark">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inViewMenu ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="text-accent-400">Menu</span>
            </h2>
            <p className="text-light/60 max-w-2xl mx-auto">
              Explore our diverse culinary offerings across multiple categories
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {menuCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={inViewMenu ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-6 bg-gradient-to-br from-accent-500/10 to-accent-400/5 rounded-lg border border-accent-500/30 hover:border-accent-500/50 text-center transition-all hover:shadow-lg hover:shadow-accent-500/20 cursor-pointer group"
              >
                <div className="text-5xl mb-3 group-hover:scale-125 transition-transform">
                  {category.emoji}
                </div>
                <h3 className="text-xl font-semibold text-light mb-2">
                  {category.name}
                </h3>
                <p className="text-light/60">
                  {category.count}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/menu"
              className="inline-block px-8 py-3 bg-gradient-to-r from-accent-500 to-accent-400 text-dark font-semibold rounded-lg hover:shadow-lg hover:shadow-accent-500/50 transition-all hover:scale-105"
            >
              View Full Menu
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-dark">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              What Our Guests Say
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: item * 0.1 }}
                className="p-6 bg-primary-800/50 backdrop-blur rounded-lg border border-accent-500/20"
              >
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-accent-400">⭐</span>
                  ))}
                </div>
                <p className="text-light/80 mb-4">
                  "Exceptional dining experience with outstanding service, delicious food, and a beautiful rooftop ambiance. Highly recommend!"
                </p>
                <p className="font-semibold text-accent-400">Happy Customer</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
