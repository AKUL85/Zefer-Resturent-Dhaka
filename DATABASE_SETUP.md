# PostgreSQL Database Setup Guide

## Prerequisites
- PostgreSQL installed and running
- psql command line tool available

## Database Setup Instructions

### 1. Create the Database User (if needed)
```bash
sudo -u postgres createuser postgres
```

### 2. Create the Database
```bash
sudo -u postgres createdb zephyr_restaurant
```

### 3. Connect to Database
```bash
psql -U postgres -d zephyr_restaurant
```

### 4. Tables will be automatically created when you run the backend

Run the backend initialization:
```bash
cd backend
npm install
npm run dev
```

The server will automatically:
- Create all required tables
- Seed initial menu data
- Set up database structure

## Database Tables Created

1. **menu_items** - Restaurant menu items with categories and prices
2. **reservations** - Customer reservations
3. **contact_submissions** - Contact form submissions
4. **gallery** - Gallery images and metadata
5. **users** - Admin user accounts

## Accessing the Database

### From Command Line
```bash
psql -U postgres -d zephyr_restaurant
```

### Common psql Commands
```
\dt                    # List all tables
\d table_name         # Describe table structure
SELECT * FROM menu_items;  # View data
```

## Connection String

Format: `postgresql://username:password@host:port/database`

Example:
```
postgresql://postgres:password@localhost:5432/zephyr_restaurant
```

## Backup Database

```bash
pg_dump -U postgres zephyr_restaurant > backup.sql
```

## Restore Database

```bash
psql -U postgres zephyr_restaurant < backup.sql
```

## Troubleshooting

### Connection Refused
- Ensure PostgreSQL service is running
- Check connection parameters in .env

### Permission Denied
- Verify PostgreSQL user permissions
- Update .env with correct credentials

### Tables Not Created
- Run backend: `npm run dev`
- Check server logs for migration status
