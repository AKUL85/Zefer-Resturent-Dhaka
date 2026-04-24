import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import axios from 'axios'
import { useEffect } from 'react'

export default function Menu() {
  const [selectedCategory, setSelectedCategory] = useState('appetizers')
  const [menuItems, setMenuItems] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchMenuItems()
  }, [selectedCategory])

  const fetchMenuItems = async () => {
    setLoading(true)
    try {
      const response = await axios.get(`/api/menu?category=${selectedCategory}`)
      setMenuItems(response.data)
    } catch (error) {
      console.error('Error fetching menu:', error)
      setMenuItems(defaultMenuItems[selectedCategory] || [])
    }
    setLoading(false)
  }

  const categories = [
    { id: 'appetizers', name: 'Appetizers', emoji: '🍤' },
    { id: 'salads', name: 'Salads', emoji: '🥗' },
    { id: 'sushi', name: 'Sushi', emoji: '🍣' },
    { id: 'pizza', name: 'Pizza', emoji: '🍕' },
    { id: 'main_course', name: 'Main Course', emoji: '🥩' },
    { id: 'desserts', name: 'Desserts', emoji: '🍰' },
    { id: 'beverages', name: 'Beverages', emoji: '🥤' },
  ]

  const defaultMenuItems = {
    appetizers: [
      { id: 1, name: 'Australian Beef Cubes', price: '650 BDT', description: 'Tender beef cubes with special seasoning' },
      { id: 2, name: 'Grilled Baby Calamari', price: '450 BDT', description: 'Fresh calamari grilled to perfection' },
      { id: 3, name: 'Beef Bao Bun', price: '350 BDT', description: 'Soft bao buns filled with tender beef' },
      { id: 4, name: 'Guac & Chips', price: '280 BDT', description: 'Fresh guacamole with crispy chips' },
    ],
    salads: [
      { id: 5, name: 'Ceviche White Fish Salad', price: '580 BDT', description: 'Fresh white fish ceviche' },
      { id: 6, name: 'Burrata Salad', price: '420 BDT', description: 'Creamy burrata with greens' },
      { id: 7, name: 'Crispy Chicken Salad', price: '350 BDT', description: 'Crispy chicken with fresh vegetables' },
      { id: 8, name: 'Salmon Quinoa Salad', price: '580 BDT', description: 'Grilled salmon with quinoa' },
    ],
    sushi: [
      { id: 9, name: 'Crispy Crazy', price: '450 BDT', description: 'Crispy roll with mixed vegetables' },
      { id: 10, name: 'Dragon Roll', price: '520 BDT', description: 'Premium dragon roll with avocado' },
      { id: 11, name: 'Crunchy Salmon', price: '480 BDT', description: 'Salmon roll with crispy tempura' },
      { id: 12, name: 'Shrimpy', price: '420 BDT', description: 'Shrimp tempura roll' },
    ],
    pizza: [
      { id: 13, name: 'Vegetariana', price: '380 BDT', description: 'Fresh vegetables with mozzarella' },
      { id: 14, name: 'Diavola', price: '420 BDT', description: 'Spicy pizza with hot peppers' },
      { id: 15, name: 'Tartufata', price: '520 BDT', description: 'Truffle-infused pizza' },
      { id: 16, name: 'Prosciutto di Parma', price: '480 BDT', description: 'Premium prosciutto pizza' },
    ],
    main_course: [
      { id: 17, name: 'Beef Filet', price: '1200 BDT', description: 'Tender beef filet with seasonal vegetables' },
      { id: 18, name: 'Chicken Breast', price: '900 BDT', description: 'Grilled chicken with herbs' },
      { id: 19, name: 'Grilled Salmon', price: '1100 BDT', description: 'Fresh salmon with lemon butter' },
      { id: 20, name: 'Mongolian Beef', price: '950 BDT', description: 'Tender beef in Mongolian sauce' },
    ],
    desserts: [
      { id: 21, name: 'Chocolate Cake', price: '280 BDT', description: 'Rich chocolate cake with frosting' },
      { id: 22, name: 'Red Velvet Cake', price: '280 BDT', description: 'Classic red velvet with cream cheese' },
      { id: 23, name: 'Baklava', price: '250 BDT', description: 'Crispy phyllo with honey and nuts' },
    ],
    beverages: [
      { id: 24, name: 'Negroni', price: '350 BDT', description: 'Classic Italian cocktail' },
      { id: 25, name: 'Mojito', price: '320 BDT', description: 'Refreshing mint cocktail' },
      { id: 26, name: 'Margarita', price: '320 BDT', description: 'Classic lime margarita' },
      { id: 27, name: 'Cosmopolitan', price: '350 BDT', description: 'Elegant vodka cocktail' },
    ],
  }

  if (!menuItems.length) {
    setMenuItems(defaultMenuItems[selectedCategory] || [])
  }

  return (
    <div className="bg-dark">
      {/* Hero Section */}
      <div className="relative h-72 bg-gradient-to-br from-primary-900 to-primary-800 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
          className="absolute inset-0 flex items-center justify-center opacity-20 text-9xl"
        >
          👨‍🍳
        </motion.div>

        <div className="relative h-full flex items-center justify-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold text-center text-light"
          >
            Explore Our <span className="text-accent-400">Menu</span>
          </motion.h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-20">
        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-wrap gap-3 justify-center mb-12 sticky top-24 bg-dark py-4 z-10"
        >
          {categories.map((cat) => (
            <motion.button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                selectedCategory === cat.id
                  ? 'bg-gradient-to-r from-accent-500 to-accent-400 text-dark shadow-lg shadow-accent-500/50'
                  : 'bg-primary-800 text-light border border-accent-500/30 hover:border-accent-500/50'
              }`}
            >
              {cat.emoji} {cat.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Menu Items Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="wait">
            {(menuItems.length > 0 ? menuItems : defaultMenuItems[selectedCategory]).map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: index * 0.05 }}
                className="p-6 bg-gradient-to-br from-primary-800 to-primary-900 rounded-lg border border-accent-500/20 hover:border-accent-500/50 group overflow-hidden transition-all hover:shadow-lg hover:shadow-accent-500/20"
              >
                <div className="absolute -top-10 -right-10 w-20 h-20 bg-accent-500/10 rounded-full group-hover:scale-150 transition-transform duration-300"></div>

                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-light flex-1">
                      {item.name}
                    </h3>
                    <span className="text-accent-400 font-bold whitespace-nowrap ml-3">
                      {item.price}
                    </span>
                  </div>

                  <p className="text-light/60 text-sm mb-4">
                    {item.description}
                  </p>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full py-2 bg-accent-500/20 text-accent-400 rounded-lg hover:bg-accent-500/40 transition-all font-semibold"
                  >
                    Order Now
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  )
}
