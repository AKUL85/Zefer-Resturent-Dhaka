import express from 'express'
import * as controllers from '../controllers/controllers.js'

const router = express.Router()

// Menu Routes
router.get('/menu', async (req, res) => {
  try {
    const category = req.query.category
    const items = category
      ? await controllers.getMenuByCategory(category)
      : await controllers.getAllMenu()

    res.json(items)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

router.get('/menu/:id', async (req, res) => {
  try {
    const item = await controllers.getMenuItemById(req.params.id)
    if (!item) {
      return res.status(404).json({ error: 'Menu item not found' })
    }
    res.json(item)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// Reservation Routes
router.post('/reservations', async (req, res) => {
  try {
    const { name, email, phone, date, time, guests, specialRequests } = req.body

    // Validation
    if (!name || !email || !phone || !date || !time || !guests) {
      return res.status(400).json({ error: 'Missing required fields' })
    }

    const reservation = await controllers.createReservation({
      name,
      email,
      phone,
      date,
      time,
      guests,
      specialRequests,
    })

    res.status(201).json(reservation)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

router.get('/reservations', async (req, res) => {
  try {
    const reservations = await controllers.getAllReservations()
    res.json(reservations)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

router.get('/reservations/:id', async (req, res) => {
  try {
    const reservation = await controllers.getReservationById(req.params.id)
    if (!reservation) {
      return res.status(404).json({ error: 'Reservation not found' })
    }
    res.json(reservation)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

router.patch('/reservations/:id', async (req, res) => {
  try {
    const { status } = req.body
    if (!status) {
      return res.status(400).json({ error: 'Status is required' })
    }

    const reservation = await controllers.updateReservationStatus(req.params.id, status)
    res.json(reservation)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// Contact Routes
router.post('/contact', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body

    // Validation
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: 'Missing required fields' })
    }

    const submission = await controllers.createContactSubmission({
      name,
      email,
      subject,
      message,
    })

    res.status(201).json(submission)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

router.get('/contact', async (req, res) => {
  try {
    const submissions = await controllers.getAllContactSubmissions()
    res.json(submissions)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// Gallery Routes
router.get('/gallery', async (req, res) => {
  try {
    const category = req.query.category
    const items = category
      ? await controllers.getGalleryByCategory(category)
      : await controllers.getGallery()

    res.json(items)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

export default router
