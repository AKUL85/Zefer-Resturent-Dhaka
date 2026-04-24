import { query } from '../config/database.js'

// Mock data for development without database
const mockMenuItems = [
  { id: 1, name: 'Australian Beef Cubes', category: 'appetizers', description: 'Tender beef cubes with special seasoning', price: 650 },
  { id: 2, name: 'Grilled Baby Calamari', category: 'appetizers', description: 'Fresh calamari grilled to perfection', price: 450 },
  { id: 3, name: 'Beef Bao Bun', category: 'appetizers', description: 'Soft bao buns filled with tender beef', price: 350 },
  { id: 4, name: 'Guac & Chips', category: 'appetizers', description: 'Fresh guacamole with crispy chips', price: 280 },
  { id: 5, name: 'Ceviche White Fish Salad', category: 'salads', description: 'Fresh white fish ceviche', price: 580 },
  { id: 6, name: 'Burrata Salad', category: 'salads', description: 'Creamy burrata with greens', price: 420 },
  { id: 7, name: 'Crispy Chicken Salad', category: 'salads', description: 'Crispy chicken with fresh vegetables', price: 350 },
  { id: 8, name: 'Salmon Quinoa Salad', category: 'salads', description: 'Grilled salmon with quinoa', price: 580 },
  { id: 9, name: 'Crispy Crazy', category: 'sushi', description: 'Crispy roll with mixed vegetables', price: 450 },
  { id: 10, name: 'Dragon Roll', category: 'sushi', description: 'Premium dragon roll with avocado', price: 520 },
  { id: 11, name: 'Crunchy Salmon', category: 'sushi', description: 'Salmon roll with crispy tempura', price: 480 },
  { id: 12, name: 'Shrimpy', category: 'sushi', description: 'Shrimp tempura roll', price: 420 },
  { id: 13, name: 'Vegetariana', category: 'pizza', description: 'Fresh vegetables with mozzarella', price: 380 },
  { id: 14, name: 'Diavola', category: 'pizza', description: 'Spicy pizza with hot peppers', price: 420 },
  { id: 15, name: 'Tartufata', category: 'pizza', description: 'Truffle-infused pizza', price: 520 },
  { id: 16, name: 'Prosciutto di Parma', category: 'pizza', description: 'Premium prosciutto pizza', price: 480 },
  { id: 17, name: 'Beef Filet', category: 'main_course', description: 'Tender beef filet with seasonal vegetables', price: 1200 },
  { id: 18, name: 'Chicken Breast', category: 'main_course', description: 'Grilled chicken with herbs', price: 900 },
  { id: 19, name: 'Grilled Salmon', category: 'main_course', description: 'Fresh salmon with lemon butter', price: 1100 },
  { id: 20, name: 'Mongolian Beef', category: 'main_course', description: 'Tender beef in Mongolian sauce', price: 950 },
  { id: 21, name: 'Chocolate Cake', category: 'desserts', description: 'Rich chocolate cake with frosting', price: 280 },
  { id: 22, name: 'Red Velvet Cake', category: 'desserts', description: 'Classic red velvet with cream cheese', price: 280 },
  { id: 23, name: 'Baklava', category: 'desserts', description: 'Crispy phyllo with honey and nuts', price: 250 },
]

// Menu Controllers
export async function getMenuByCategory(category) {
  try {
    const result = await query(
      'SELECT * FROM menu_items WHERE category = $1 AND is_available = true ORDER BY name',
      [category]
    )
    return result.rows
  } catch (error) {
    console.warn('Database error, returning mock menu data')
    return mockMenuItems.filter(item => item.category === category)
  }
}

export async function getAllMenu() {
  try {
    const result = await query(
      'SELECT * FROM menu_items WHERE is_available = true ORDER BY category, name'
    )
    return result.rows
  } catch (error) {
    console.warn('Database error, returning mock menu data')
    return mockMenuItems
  }
}

export async function getMenuItemById(id) {
  try {
    const result = await query(
      'SELECT * FROM menu_items WHERE id = $1',
      [id]
    )
    return result.rows[0]
  } catch (error) {
    console.warn('Database error, returning mock menu item')
    return mockMenuItems.find(item => item.id === parseInt(id))
  }
}

// Reservation Controllers
export async function createReservation(data) {
  try {
    const result = await query(
      `INSERT INTO reservations (name, email, phone, reservation_date, reservation_time, number_of_guests, special_requests, status)
       VALUES ($1, $2, $3, $4, $5, $6, $7, 'pending')
       RETURNING *`,
      [data.name, data.email, data.phone, data.date, data.time, data.guests, data.specialRequests || null]
    )
    return result.rows[0]
  } catch (error) {
    console.warn('Database error, mock reservation created')
    return { id: Date.now(), ...data, status: 'pending', created_at: new Date() }
  }
}

export async function getAllReservations() {
  try {
    const result = await query(
      'SELECT * FROM reservations ORDER BY reservation_date DESC, reservation_time DESC'
    )
    return result.rows
  } catch (error) {
    console.warn('Database error, returning empty reservations')
    return []
  }
}

export async function getReservationById(id) {
  try {
    const result = await query(
      'SELECT * FROM reservations WHERE id = $1',
      [id]
    )
    return result.rows[0]
  } catch (error) {
    console.warn('Database error')
    return null
  }
}

export async function updateReservationStatus(id, status) {
  try {
    const result = await query(
      'UPDATE reservations SET status = $1, updated_at = CURRENT_TIMESTAMP WHERE id = $2 RETURNING *',
      [status, id]
    )
    return result.rows[0]
  } catch (error) {
    console.warn('Database error, returning mock update')
    return { id, status, updated_at: new Date() }
  }
}

// Contact Controllers
export async function createContactSubmission(data) {
  try {
    const result = await query(
      `INSERT INTO contact_submissions (name, email, subject, message, status)
       VALUES ($1, $2, $3, $4, 'new')
       RETURNING *`,
      [data.name, data.email, data.subject, data.message]
    )
    return result.rows[0]
  } catch (error) {
    console.warn('Database error, mock contact submission created')
    return { id: Date.now(), ...data, status: 'new', created_at: new Date() }
  }
}

export async function getAllContactSubmissions() {
  try {
    const result = await query(
      'SELECT * FROM contact_submissions ORDER BY created_at DESC'
    )
    return result.rows
  } catch (error) {
    console.warn('Database error, returning empty submissions')
    return []
  }
}

// Gallery Controllers
export async function getGallery() {
  try {
    const result = await query(
      'SELECT * FROM gallery ORDER BY category, created_at DESC'
    )
    return result.rows
  } catch (error) {
    console.warn('Database error, returning empty gallery')
    return []
  }
}

export async function getGalleryByCategory(category) {
  try {
    const result = await query(
      'SELECT * FROM gallery WHERE category = $1 ORDER BY created_at DESC',
      [category]
    )
    return result.rows
  } catch (error) {
    console.warn('Database error, returning empty gallery')
    return []
  }
}
