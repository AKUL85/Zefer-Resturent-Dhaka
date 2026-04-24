import pkg from 'pg'
const { Pool } = pkg
import { config } from './config.js'

const pool = new Pool({
  host: config.database.host,
  port: config.database.port,
  database: config.database.name,
  user: config.database.user,
  password: config.database.password,
})

pool.on('error', (err) => {
  console.error('Unexpected error on idle client', err)
  process.exit(-1)
})

export async function query(text, params) {
  const start = Date.now()
  try {
    const res = await pool.query(text, params)
    const duration = Date.now() - start
    console.log('Executed query', { text, duration, rows: res.rowCount })
    return res
  } catch (error) {
    console.error('Database error', error)
    throw error
  }
}

export async function getClient() {
  const client = await pool.connect()
  return client
}

export default pool
