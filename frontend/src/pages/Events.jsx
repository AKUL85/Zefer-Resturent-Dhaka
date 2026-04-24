import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Calendar, Users, Utensils, Music } from 'lucide-react'

export default function Events() {
  const { ref, inView } = useInView({ threshold: 0.2 })

  const eventTypes = [
    {
      icon: <Users size={40} />,
      title: 'Weddings',
      description: 'Celebrate your special day with rooftop views and gourmet cuisine',
      capacity: '50-200 guests'
    },
    {
      icon: <Utensils size={40} />,
      title: 'Corporate Events',
      description: 'Impress clients with an elegant dining experience',
      capacity: '30-150 guests'
    },
    {
      icon: <Music size={40} />,
      title: 'Private Parties',
      description: 'Host an unforgettable celebration with live entertainment',
      capacity: '20-200 guests'
    },
    {
      icon: <Calendar size={40} />,
      title: 'Customized Events',
      description: 'Let us tailor a unique experience for your needs',
      capacity: 'Flexible capacity'
    },
  ]

  const packages = [
    {
      name: 'Classic Package',
      price: '3,000 - 5,000 BDT/person',
      features: [
        '3-course menu',
        'Beverage selection',
        'Rooftop venue',
        'Basic decoration'
      ]
    },
    {
      name: 'Premium Package',
      price: '5,000 - 8,000 BDT/person',
      features: [
        '4-course gourmet menu',
        'Premium beverages & cocktails',
        'Rooftop venue with setup',
        'Elegant decoration',
        'Live music/DJ'
      ]
    },
    {
      name: 'Exclusive Package',
      price: '8,000+ BDT/person',
      features: [
        'Chef\'s special menu',
        'Premium bar service',
        'Private venue access',
        'Luxury decoration',
        'Live entertainment',
        'Event coordinator'
      ]
    },
  ]

  return (
    <div className="bg-dark">
      {/* Hero Section */}
      <div className="relative h-72 bg-gradient-to-br from-primary-900 to-primary-800 overflow-hidden">
        <motion.div
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
          className="absolute inset-0 flex items-center justify-center opacity-20 text-9xl"
        >
          🎉
        </motion.div>

        <div className="relative h-full flex items-center justify-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold text-center text-light"
          >
            Host Your <span className="text-accent-400">Event</span>
          </motion.h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-20">
        {/* Event Types */}
        <motion.section ref={ref} className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">
              Event <span className="text-accent-400">Types</span>
            </h2>
            <p className="text-light/60">
              From intimate gatherings to grand celebrations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {eventTypes.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-gradient-to-br from-primary-800 to-primary-900 rounded-lg border border-accent-500/20 hover:border-accent-500/50 transition-all group"
              >
                <div className="text-accent-400 mb-4 group-hover:scale-110 transition-transform">
                  {event.icon}
                </div>
                <h3 className="text-xl font-bold text-light mb-2">
                  {event.title}
                </h3>
                <p className="text-light/60 text-sm mb-4">
                  {event.description}
                </p>
                <p className="text-accent-400 text-xs">
                  👥 {event.capacity}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Packages Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <motion.div
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">
              Event <span className="text-accent-400">Packages</span>
            </h2>
            <p className="text-light/60">
              Flexible pricing tailored to your needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {packages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`p-8 rounded-lg border transition-all group ${
                  index === 1
                    ? 'bg-gradient-to-br from-accent-500/20 to-primary-900 border-accent-500 shadow-lg shadow-accent-500/20 scale-105'
                    : 'bg-gradient-to-br from-primary-800 to-primary-900 border-accent-500/20 hover:border-accent-500/50'
                }`}
              >
                <h3 className="text-2xl font-bold text-light mb-2">
                  {pkg.name}
                </h3>
                <p className="text-accent-400 text-lg font-semibold mb-6">
                  {pkg.price}
                </p>

                <ul className="space-y-3 mb-6">
                  {pkg.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center gap-2 text-light/70">
                      <span className="text-accent-400">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-3 rounded-lg font-semibold transition-all ${
                    index === 1
                      ? 'bg-gradient-to-r from-accent-500 to-accent-400 text-dark hover:shadow-lg hover:shadow-accent-500/50'
                      : 'bg-accent-500/20 text-accent-400 hover:bg-accent-500/40'
                  }`}
                >
                  Inquire Now
                </motion.button>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Amenities */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-12 text-center">
            Event <span className="text-accent-400">Amenities</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {['🏢 Rooftop Venue', '🎵 Sound System', '💡 Professional Lighting', '🍴 Full Bar Service', '👨‍🍳 Dedicated Chef', '📐 Flexible Setup', '🚗 Valet Parking', '📸 Event Photography'].map((amenity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                className="p-4 bg-primary-800/50 border border-accent-500/20 rounded-lg text-center hover:border-accent-500/50 transition-all"
              >
                <p className="text-light">
                  {amenity}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  )
}
