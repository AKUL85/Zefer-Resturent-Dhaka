import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function About() {
  const { ref, inView } = useInView({ threshold: 0.2 })

  const values = [
    { title: 'Excellence', description: 'Committed to serving the finest cuisine and experience' },
    { title: 'Hospitality', description: 'Warm and welcoming service for every guest' },
    { title: 'Innovation', description: 'Constantly evolving our menu and dining experience' },
    { title: 'Community', description: 'Building connections and creating memorable moments' },
  ]

  return (
    <div className="bg-dark">
      {/* Hero Section */}
      <div className="relative h-96 bg-gradient-to-br from-primary-900 to-primary-800 overflow-hidden">
        <motion.div
          animate={{
            y: [0, 30, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
          }}
          className="absolute inset-0 opacity-20"
        >
          <div className="text-9xl text-accent-500 flex items-center justify-center h-full">
            🍽️
          </div>
        </motion.div>

        <div className="relative h-full flex items-center justify-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold text-center text-light"
          >
            About <span className="text-accent-400">Zephyr</span>
          </motion.h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        {/* Story Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold mb-6 text-accent-400">Our Story</h2>
          <p className="text-lg text-light/80 leading-relaxed mb-4">
            Zephyr Restaurant & Lounge was born from a vision to create a unique dining destination that celebrates culinary excellence and hospitality. Located in the heart of Banani, our rooftop venue offers stunning views and an ambiance that captures the essence of modern luxury.
          </p>
          <p className="text-lg text-light/80 leading-relaxed">
            With a carefully curated menu blending Mediterranean, Italian, and Asian cuisines, we've established ourselves as one of Dhaka's premier fine dining establishments. Our commitment to quality ingredients, innovative cooking techniques, and exceptional service ensures every visit is memorable.
          </p>
        </motion.section>

        {/* Values Section */}
        <motion.section
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold mb-12 text-accent-400">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-6 bg-gradient-to-br from-primary-800 to-primary-900 rounded-lg border border-accent-500/20"
              >
                <h3 className="text-2xl font-bold text-accent-400 mb-3">
                  {value.title}
                </h3>
                <p className="text-light/70">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Highlights */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="text-center p-8 bg-primary-800/50 rounded-lg border border-accent-500/20">
            <div className="text-5xl mb-4">606</div>
            <p className="text-light/80 text-lg font-semibold">Happy Reviews</p>
            <p className="text-accent-400">4.4★ Rating</p>
          </div>
          <div className="text-center p-8 bg-primary-800/50 rounded-lg border border-accent-500/20">
            <div className="text-5xl mb-4">50+</div>
            <p className="text-light/80 text-lg font-semibold">Menu Items</p>
            <p className="text-accent-400">Multiple Cuisines</p>
          </div>
          <div className="text-center p-8 bg-primary-800/50 rounded-lg border border-accent-500/20">
            <div className="text-5xl mb-4">12</div>
            <p className="text-light/80 text-lg font-semibold">Hours Daily</p>
            <p className="text-accent-400">3 PM - 3:30 AM</p>
          </div>
        </motion.section>
      </div>
    </div>
  )
}
