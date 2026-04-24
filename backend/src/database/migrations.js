import { query } from '../config/database.js'

export async function initializeDatabase() {
  try {
    // Create extensions
    await query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"')

    // Menu Items table
    await query(`
      CREATE TABLE IF NOT EXISTS menu_items (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        category VARCHAR(50) NOT NULL,
        description TEXT,
        price DECIMAL(10, 2) NOT NULL,
        is_available BOOLEAN DEFAULT true,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `)

    // Reservations table
    await query(`
      CREATE TABLE IF NOT EXISTS reservations (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        phone VARCHAR(20) NOT NULL,
        reservation_date DATE NOT NULL,
        reservation_time TIME NOT NULL,
        number_of_guests INTEGER NOT NULL,
        special_requests TEXT,
        status VARCHAR(50) DEFAULT 'pending',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `)

    // Contact submissions table
    await query(`
      CREATE TABLE IF NOT EXISTS contact_submissions (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        subject VARCHAR(255) NOT NULL,
        message TEXT NOT NULL,
        status VARCHAR(50) DEFAULT 'new',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `)

    // Gallery table
    await query(`
      CREATE TABLE IF NOT EXISTS gallery (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        category VARCHAR(50) NOT NULL,
        image_url VARCHAR(500),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `)

    // Users table (for admin panel)
    await query(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        username VARCHAR(255) UNIQUE NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        role VARCHAR(50) DEFAULT 'user',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `)

    console.log('Database initialized successfully!')
  } catch (error) {
    console.error('Error initializing database:', error)
    throw error
  }
}

// Seed initial data
export async function seedDatabase() {
  try {
    // Check if data exists
    const result = await query('SELECT COUNT(*) FROM menu_items')
    if (parseInt(result.rows[0].count) > 0) {
      console.log('Database already seeded!')
      return
    }

    // Seed menu items
    const menuItems = [
      // Appetizers
      { name: 'Australian Beef Cubes', category: 'appetizers', description: 'Tender beef cubes with special seasoning', price: 650 },
      { name: 'Grilled Baby Calamari', category: 'appetizers', description: 'Fresh calamari grilled to perfection', price: 450 },
      { name: 'Beef Bao Bun', category: 'appetizers', description: 'Soft bao buns filled with tender beef', price: 350 },
      { name: 'Guac & Chips', category: 'appetizers', description: 'Fresh guacamole with crispy chips', price: 280 },
      // Salads
      { name: 'Ceviche White Fish Salad', category: 'salads', description: 'Fresh white fish ceviche', price: 580 },
      { name: 'Burrata Salad', category: 'salads', description: 'Creamy burrata with greens', price: 420 },
      { name: 'Crispy Chicken Salad', category: 'salads', description: 'Crispy chicken with fresh vegetables', price: 350 },
      { name: 'Salmon Quinoa Salad', category: 'salads', description: 'Grilled salmon with quinoa', price: 580 },
      // Sushi
      { name: 'Crispy Crazy', category: 'sushi', description: 'Crispy roll with mixed vegetables', price: 450 },
      { name: 'Dragon Roll', category: 'sushi', description: 'Premium dragon roll with avocado', price: 520 },
      { name: 'Crunchy Salmon', category: 'sushi', description: 'Salmon roll with crispy tempura', price: 480 },
      { name: 'Shrimpy', category: 'sushi', description: 'Shrimp tempura roll', price: 420 },
      // Pizza
      { name: 'Vegetariana', category: 'pizza', description: 'Fresh vegetables with mozzarella', price: 380 },
      { name: 'Diavola', category: 'pizza', description: 'Spicy pizza with hot peppers', price: 420 },
      { name: 'Tartufata', category: 'pizza', description: 'Truffle-infused pizza', price: 520 },
      { name: 'Prosciutto di Parma', category: 'pizza', description: 'Premium prosciutto pizza', price: 480 },
      // Main Course
      { name: 'Beef Filet', category: 'main_course', description: 'Tender beef filet with seasonal vegetables', price: 1200 },
      { name: 'Chicken Breast', category: 'main_course', description: 'Grilled chicken with herbs', price: 900 },
      { name: 'Grilled Salmon', category: 'main_course', description: 'Fresh salmon with lemon butter', price: 1100 },
      { name: 'Mongolian Beef', category: 'main_course', description: 'Tender beef in Mongolian sauce', price: 950 },
      // Desserts
      { name: 'Chocolate Cake', category: 'desserts', description: 'Rich chocolate cake with frosting', price: 280 },
      { name: 'Red Velvet Cake', category: 'desserts', description: 'Classic red velvet with cream cheese', price: 280 },
      { name: 'Baklava', category: 'desserts', description: 'Crispy phyllo with honey and nuts', price: 250 },
    ]

    for (const item of menuItems) {
      await query(
        'INSERT INTO menu_items (name, category, description, price) VALUES ($1, $2, $3, $4)',
        [item.name, item.category, item.description, item.price]
      )
    }

    console.log('Database seeded with menu items!')
  } catch (error) {
    console.error('Error seeding database:', error)
    throw error
  }
}
