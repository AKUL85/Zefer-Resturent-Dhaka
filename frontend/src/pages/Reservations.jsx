import { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { Calendar, Users, Clock, Phone } from 'lucide-react'

export default function Reservations() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm()
  const [submitStatus, setSubmitStatus] = useState(null)
  const [loading, setLoading] = useState(false)

  const onSubmit = async (data) => {
    setLoading(true)
    try {
      await axios.post('/api/reservations', data)
      setSubmitStatus('success')
      reset()
      setTimeout(() => setSubmitStatus(null), 5000)
    } catch (error) {
      setSubmitStatus('error')
      setTimeout(() => setSubmitStatus(null), 5000)
    }
    setLoading(false)
  }

  return (
    <div className="bg-dark">
      {/* Hero Section */}
      <div className="relative h-72 bg-gradient-to-br from-primary-900 to-primary-800 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
          className="absolute inset-0 flex items-center justify-center opacity-20 text-9xl"
        >
          📅
        </motion.div>

        <div className="relative h-full flex items-center justify-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold text-center text-light"
          >
            Make a <span className="text-accent-400">Reservation</span>
          </motion.h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="p-8 bg-gradient-to-br from-primary-800 to-primary-900 rounded-lg border border-accent-500/20">
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
                    placeholder="John Doe"
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
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 bg-primary-700/50 border border-accent-500/20 rounded-lg text-light placeholder:text-light/40 focus:outline-none focus:border-accent-500 transition-all"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                  )}
                </motion.div>

                {/* Phone */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <label className="block text-light font-semibold mb-2">
                    <Phone size={16} className="inline mr-2" />
                    Phone Number *
                  </label>
                  <input
                    {...register('phone', { required: 'Phone is required' })}
                    type="tel"
                    placeholder="+880 1XXXXXXXXX"
                    className="w-full px-4 py-3 bg-primary-700/50 border border-accent-500/20 rounded-lg text-light placeholder:text-light/40 focus:outline-none focus:border-accent-500 transition-all"
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                  )}
                </motion.div>

                <div className="grid grid-cols-2 gap-4">
                  {/* Date */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <label className="block text-light font-semibold mb-2">
                      <Calendar size={16} className="inline mr-2" />
                      Date *
                    </label>
                    <input
                      {...register('date', { required: 'Date is required' })}
                      type="date"
                      className="w-full px-4 py-3 bg-primary-700/50 border border-accent-500/20 rounded-lg text-light focus:outline-none focus:border-accent-500 transition-all"
                    />
                    {errors.date && (
                      <p className="text-red-500 text-sm mt-1">{errors.date.message}</p>
                    )}
                  </motion.div>

                  {/* Time */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <label className="block text-light font-semibold mb-2">
                      <Clock size={16} className="inline mr-2" />
                      Time *
                    </label>
                    <input
                      {...register('time', { required: 'Time is required' })}
                      type="time"
                      className="w-full px-4 py-3 bg-primary-700/50 border border-accent-500/20 rounded-lg text-light focus:outline-none focus:border-accent-500 transition-all"
                    />
                    {errors.time && (
                      <p className="text-red-500 text-sm mt-1">{errors.time.message}</p>
                    )}
                  </motion.div>
                </div>

                {/* Guests */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <label className="block text-light font-semibold mb-2">
                    <Users size={16} className="inline mr-2" />
                    Number of Guests *
                  </label>
                  <select
                    {...register('guests', { required: 'Please select number of guests' })}
                    className="w-full px-4 py-3 bg-primary-700/50 border border-accent-500/20 rounded-lg text-light focus:outline-none focus:border-accent-500 transition-all"
                  >
                    <option value="">Select...</option>
                    {[...Array(10)].map((_, i) => (
                      <option key={i + 1} value={i + 1}>
                        {i + 1} {i === 0 ? 'Guest' : 'Guests'}
                      </option>
                    ))}
                  </select>
                  {errors.guests && (
                    <p className="text-red-500 text-sm mt-1">{errors.guests.message}</p>
                  )}
                </motion.div>

                {/* Special Requests */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  <label className="block text-light font-semibold mb-2">
                    Special Requests
                  </label>
                  <textarea
                    {...register('specialRequests')}
                    placeholder="Any allergies, dietary preferences, or special occasions?"
                    className="w-full px-4 py-3 bg-primary-700/50 border border-accent-500/20 rounded-lg text-light placeholder:text-light/40 focus:outline-none focus:border-accent-500 transition-all resize-none"
                    rows="4"
                  ></textarea>
                </motion.div>

                {/* Submit Button */}
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 bg-gradient-to-r from-accent-500 to-accent-400 text-dark font-bold rounded-lg hover:shadow-lg hover:shadow-accent-500/50 transition-all disabled:opacity-50"
                >
                  {loading ? 'Submitting...' : 'Confirm Reservation'}
                </motion.button>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-green-500/20 border border-green-500 rounded-lg text-green-400"
                  >
                    ✓ Reservation submitted successfully! We'll confirm shortly.
                  </motion.div>
                )}
                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-red-500/20 border border-red-500 rounded-lg text-red-400"
                  >
                    ✗ Error submitting reservation. Please try again.
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>

          {/* Info Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Contact Info */}
            <div className="p-6 bg-gradient-to-br from-primary-800 to-primary-900 rounded-lg border border-accent-500/20">
              <h3 className="text-lg font-bold text-accent-400 mb-4">Need Help?</h3>
              <div className="space-y-3">
                <div>
                  <p className="text-light/60 text-sm">Phone</p>
                  <a href="tel:+8801321197337" className="text-accent-400 font-semibold hover:text-accent-300">
                    +880 1321-197337
                  </a>
                </div>
                <div>
                  <p className="text-light/60 text-sm">Email</p>
                  <a href="mailto:zephyrlounge12@gmail.com" className="text-accent-400 font-semibold hover:text-accent-300">
                    zephyrlounge12@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Hours Info */}
            <div className="p-6 bg-gradient-to-br from-primary-800 to-primary-900 rounded-lg border border-accent-500/20">
              <h3 className="text-lg font-bold text-accent-400 mb-4">Opening Hours</h3>
              <div className="space-y-2 text-light/80">
                <p>Monday - Sunday</p>
                <p className="text-accent-400 font-semibold">3:00 PM - 3:30 AM</p>
                <p className="text-sm text-light/60 mt-4">Reserve at least 2 hours in advance</p>
              </div>
            </div>

            {/* Capacity Info */}
            <div className="p-6 bg-gradient-to-br from-primary-800 to-primary-900 rounded-lg border border-accent-500/20">
              <h3 className="text-lg font-bold text-accent-400 mb-4">Reservation Policy</h3>
              <ul className="space-y-2 text-light/80 text-sm">
                <li>✓ Free cancellation up to 24 hours</li>
                <li>✓ Confirmation call 24 hours before</li>
                <li>✓ Private dining available</li>
                <li>✓ Groups of 10+ require deposit</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
