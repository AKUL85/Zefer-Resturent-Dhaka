import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
import { config } from './config/config.js'
import { initializeDatabase, seedDatabase } from './database/migrations.js'
import routes from './routes/routes.js'

const app = express()

// Middleware
app.use(helmet())
app.use(morgan('dev'))
app.use(cors(config.cors))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Routes
app.use('/api', routes)

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', message: 'Server is running' })
})

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).json({ error: 'Internal server error' })
})

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' })
})

// Initialize and start server
async function startServer() {
  try {
    if (config.nodeEnv === 'production') {
      console.log('Initializing database...')
      await initializeDatabase()
      console.log('Seeding database...')
      await seedDatabase()
    } else {
      console.log('⚠️  Skipping database initialization in development mode')
      console.log('📝 Note: Set up PostgreSQL or database will be initialized on first production run')
    }

    app.listen(config.port, () => {
      console.log(`\n✅ Server running on port ${config.port}`)
      console.log(`📱 Frontend: http://localhost:5173`)
      console.log(`🔌 Backend API: http://localhost:${config.port}`)
      console.log(`✓ Environment: ${config.nodeEnv}\n`)
    })
  } catch (error) {
    if (config.nodeEnv === 'production') {
      console.error('Failed to start server:', error)
      process.exit(1)
    } else {
      console.warn('⚠️  Database not available, running in mock mode')
      app.listen(config.port, () => {
        console.log(`\n✅ Server running on port ${config.port} (Mock Mode - No Database)`)
        console.log(`📱 Frontend: http://localhost:5173`)
        console.log(`🔌 Backend API: http://localhost:${config.port}\n`)
      })
    }
  }
}

startServer()

export default app
