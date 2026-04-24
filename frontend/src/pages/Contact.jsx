import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'
import axios from 'axios'
import { useState } from 'react'
import { Phone, Mail, MapPin } from 'lucide-react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'

// Fix leaflet default icon
delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-shadow.png',
})

export default function Contact() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm()
  const [submitStatus, setSubmitStatus] = useState(null)
  const [loading, setLoading] = useState(false)

  const onSubmit = async (data) => {
    setLoading(true)
    try {
      await axios.post('/api/contact', data)
      setSubmitStatus('success')
      reset()
      setTimeout(() => setSubmitStatus(null), 5000)
    } catch (error) {
      setSubmitStatus('error')
      setTimeout(() => setSubmitStatus(null), 5000)
    }
    setLoading(false)
  }

  const restaurantLocation = [23.7954, 90.3956] // Banani, Dhaka coordinates

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
          💬
        </motion.div>

        <div className="relative h-full flex items-center justify-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold text-center text-light"
          >
            Get in <span className="text-accent-400">Touch</span>
          </motion.h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="p-8 bg-gradient-to-br from-primary-800 to-primary-900 rounded-lg border border-accent-500/20">
              <h2 className="text-2xl font-bold text-accent-400 mb-6">Send us a Message</h2>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Name */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <label className="block text-light font-semibold mb-2">
                    Full Name *
                  </label>
                  <input
                    {...register('name', { required: 'Name is required' })}
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 bg-primary-700/50 border border-accent-500/20 rounded-lg text-light placeholder:text-light/40 focus:outline-none focus:border-accent-500 transition-all"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                  )}
                </motion.div>

                {/* Email */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <label className="block text-light font-semibold mb-2">
                    Email Address *
                  </label>
                  <input
                    {...register('email', { required: 'Email is required' })}
                    type="email"
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 bg-primary-700/50 border border-accent-500/20 rounded-lg text-light placeholder:text-light/40 focus:outline-none focus:border-accent-500 transition-all"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                  )}
                </motion.div>

                {/* Subject */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <label className="block text-light font-semibold mb-2">
                    Subject *
                  </label>
                  <input
                    {...register('subject', { required: 'Subject is required' })}
                    type="text"
                    placeholder="How can we help?"
                    className="w-full px-4 py-3 bg-primary-700/50 border border-accent-500/20 rounded-lg text-light placeholder:text-light/40 focus:outline-none focus:border-accent-500 transition-all"
                  />
                  {errors.subject && (
                    <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>
                  )}
                </motion.div>

                {/* Message */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <label className="block text-light font-semibold mb-2">
                    Message *
                  </label>
                  <textarea
                    {...register('message', { required: 'Message is required' })}
                    placeholder="Tell us more..."
                    className="w-full px-4 py-3 bg-primary-700/50 border border-accent-500/20 rounded-lg text-light placeholder:text-light/40 focus:outline-none focus:border-accent-500 transition-all resize-none"
                    rows="5"
                  ></textarea>
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                  )}
                </motion.div>

                {/* Submit Button */}
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 bg-gradient-to-r from-accent-500 to-accent-400 text-dark font-bold rounded-lg hover:shadow-lg hover:shadow-accent-500/50 transition-all disabled:opacity-50"
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </motion.button>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-green-500/20 border border-green-500 rounded-lg text-green-400"
                  >
                    ✓ Message sent successfully! We'll get back to you soon.
                  </motion.div>
                )}
                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-red-500/20 border border-red-500 rounded-lg text-red-400"
                  >
                    ✗ Error sending message. Please try again.
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Phone */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="p-6 bg-gradient-to-br from-primary-800 to-primary-900 rounded-lg border border-accent-500/20"
            >
              <div className="flex items-center gap-3 mb-3">
                <Phone className="text-accent-400" />
                <h3 className="text-lg font-bold text-light">Phone</h3>
              </div>
              <a
                href="tel:+8801321197337"
                className="text-accent-400 hover:text-accent-300 transition text-lg font-semibold"
              >
                +880 1321-197337
              </a>
            </motion.div>

            {/* Email */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="p-6 bg-gradient-to-br from-primary-800 to-primary-900 rounded-lg border border-accent-500/20"
            >
              <div className="flex items-center gap-3 mb-3">
                <Mail className="text-accent-400" />
                <h3 className="text-lg font-bold text-light">Email</h3>
              </div>
              <a
                href="mailto:zephyrlounge12@gmail.com"
                className="text-accent-400 hover:text-accent-300 transition text-lg font-semibold"
              >
                zephyrlounge12@gmail.com
              </a>
            </motion.div>

            {/* Address */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="p-6 bg-gradient-to-br from-primary-800 to-primary-900 rounded-lg border border-accent-500/20"
            >
              <div className="flex items-start gap-3 mb-3">
                <MapPin className="text-accent-400 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-light">Location</h3>
                </div>
              </div>
              <p className="text-light/80">
                Catharsis Tower, House-133, Road-12, Banani Model Town, Dhaka 1213, Bangladesh
              </p>
            </motion.div>

            {/* Hours */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="p-6 bg-gradient-to-br from-primary-800 to-primary-900 rounded-lg border border-accent-500/20"
            >
              <h3 className="text-lg font-bold text-accent-400 mb-3">Hours</h3>
              <div className="space-y-1 text-light/80">
                <p>Monday - Sunday</p>
                <p className="text-accent-400 font-semibold">3:00 PM - 3:30 AM</p>
              </div>
            </motion.div>

            {/* Social */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="p-6 bg-gradient-to-br from-primary-800 to-primary-900 rounded-lg border border-accent-500/20"
            >
              <h3 className="text-lg font-bold text-accent-400 mb-4">Follow Us</h3>
              <a
                href="https://www.facebook.com/zephyr.restaurant.lounge"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-light hover:text-accent-400 transition"
              >
                f Facebook
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-20 rounded-lg overflow-hidden border border-accent-500/20 h-96"
        >
          <MapContainer center={restaurantLocation} zoom={15} scrollWheelZoom={true} style={{ height: '100%', width: '100%' }}>
            <TileLayer
              url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={restaurantLocation}>
              <Popup>
                <div className="text-center">
                  <h3 className="font-bold">Zephyr Restaurant & Lounge</h3>
                  <p className="text-sm">Banani, Dhaka</p>
                </div>
              </Popup>
            </Marker>
          </MapContainer>
        </motion.div>
      </div>
    </div>
  )
}
