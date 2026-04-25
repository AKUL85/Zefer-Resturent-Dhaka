import dotenv from 'dotenv'

dotenv.config()

// CORS origins for different environments
const getCorsOrigins = () => {
  if (process.env.NODE_ENV === 'production') {
    // In production, allow the specific frontend URL or multiple Render domains
    return [
      process.env.CORS_ORIGIN,
      process.env.CORS_ORIGIN_ALT, // fallback
      'https://zephyr-frontend.onrender.com',
    ].filter(Boolean) // Remove undefined values
  }
  
  // Development: allow localhost
  return [
    'http://localhost:5173',
    'http://localhost:3000',
    'http://127.0.0.1:5173',
  ]
}

export const config = {
  port: process.env.PORT || 5000,
  nodeEnv: process.env.NODE_ENV || 'development',
  database: {
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 5432,
    name: process.env.DB_NAME || 'zephyr_restaurant',
    user: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASSWORD || 'password',
  },
  jwt: {
    secret: process.env.JWT_SECRET || 'your-secret-key',
    expiresIn: process.env.JWT_EXPIRES_IN || '7d',
  },
  cors: {
    origin: getCorsOrigins(),
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  },
}
