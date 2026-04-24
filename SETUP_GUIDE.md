# Zephyr Restaurant Website - Setup & Running Guide

## Quick Start

### Step 1: Install Backend Dependencies
```bash
cd backend
npm install
cd ..
```

### Step 2: Install Frontend Dependencies
```bash
cd frontend
npm install
cd ..
```

### Step 3: Setup PostgreSQL Database

First, create the database:
```bash
createdb zephyr_restaurant
```

### Step 4: Start Backend Server
```bash
cd backend
npm run dev
```
Backend will run on: `http://localhost:5000`

### Step 5: Start Frontend Server (in new terminal)
```bash
cd frontend
npm run dev
```
Frontend will run on: `http://localhost:5173`

## Project Features

### 🎨 Beautiful Design
- Modern dark theme with golden/orange accents
- Smooth Framer Motion animations
- Responsive grid layout
- Custom color scheme with gradients
- Professional typography

### 📱 Pages & Features

1. **Home** - Hero section, highlights, menu preview, testimonials
2. **About** - Restaurant story, values, statistics
3. **Menu** - Categorized menu items with prices and descriptions
4. **Gallery** - Image showcase with categories
5. **Events** - Event types, packages, and amenities
6. **Reservations** - Booking form with validation
7. **Contact** - Contact form, info cards, and map

### 🔧 Backend Capabilities

- Menu management with categories
- Reservation system
- Contact form submissions
- Gallery management
- PostgreSQL database integration
- RESTful API endpoints
- Error handling and validation

### 🎯 Technology Stack

**Frontend:**
- React 18
- Vite (fast build tool)
- Tailwind CSS
- Framer Motion
- React Router
- Axios
- React Hook Form
- Leaflet Maps
- Lucide Icons

**Backend:**
- Node.js
- Express.js
- PostgreSQL
- Helmet (security)
- CORS support
- Morgan (logging)

## File Structure

```
restrurent/
├── frontend/              # React application
│   ├── src/
│   │   ├── components/    # Navbar, Footer, HeroSection
│   │   ├── pages/         # All 7 pages
│   │   ├── App.jsx
│   │   └── index.css      # Global styles
│   ├── vite.config.js
│   ├── tailwind.config.js
│   └── package.json
├── backend/               # Express API
│   ├── src/
│   │   ├── config/        # Database & config
│   │   ├── controllers/   # Business logic
│   │   ├── database/      # Migrations & seeding
│   │   ├── routes/        # API routes
│   │   └── server.js      # Main server file
│   ├── .env               # Configuration
│   └── package.json
├── DATABASE_SETUP.md      # Database setup guide
├── SETUP_GUIDE.md         # This file
└── README.md              # Full documentation
```

## API Endpoints

### Menu
- `GET /api/menu` - All items
- `GET /api/menu?category=appetizers` - By category
- `GET /api/menu/:id` - Single item

### Reservations
- `POST /api/reservations` - Create reservation
- `GET /api/reservations` - All reservations
- `PATCH /api/reservations/:id` - Update status

### Contact
- `POST /api/contact` - Submit message
- `GET /api/contact` - All submissions

### Gallery
- `GET /api/gallery` - All items
- `GET /api/gallery?category=food` - By category

## Configuration

### Frontend (.env in frontend/)
```
VITE_API_URL=http://localhost:5000/api
```

### Backend (.env in backend/)
```
PORT=5000
DB_HOST=localhost
DB_PORT=5432
DB_NAME=zephyr_restaurant
DB_USER=postgres
DB_PASSWORD=password
```

## Build for Production

### Frontend
```bash
cd frontend
npm run build
# Deploy dist folder to Vercel, Netlify, etc.
```

### Backend
```bash
cd backend
npm start
# Deploy to Heroku, Railway, etc.
```

## Development Tips

- Hot reload enabled for both frontend and backend
- API proxy configured in Vite for seamless development
- Database seeding happens automatically on first run
- Check browser console and terminal logs for debugging

## Color Scheme

| Element | Color | Hex |
|---------|-------|-----|
| Primary | Dark Brown | #3a3425 |
| Primary Hover | Medium Brown | #5a523a |
| Accent | Golden Orange | #f4b589 |
| Accent Dark | Burnt Orange | #d48c54 |
| Background | Very Dark | #1a1a1a |
| Text | Light | #f5f5f5 |

## Common Issues

### Port Already in Use
```bash
# Change port in backend .env
PORT=5001
```

### Database Connection Error
- Ensure PostgreSQL is running
- Check .env credentials match your setup
- Verify database exists: `psql -l`

### Frontend Not Loading
- Clear browser cache
- Check if `npm run dev` is running
- Verify Vite is on port 5173

### API Calls Failing
- Ensure backend is running on port 5000
- Check CORS configuration
- Verify database is initialized

## Next Steps

1. ✅ Install dependencies
2. ✅ Setup PostgreSQL
3. ✅ Start backend server
4. ✅ Start frontend server
5. ✅ Open `http://localhost:5173`
6. ✅ Test all pages and features
7. ✅ Customize restaurant info
8. ✅ Deploy to production

## Support

For issues:
1. Check terminal for error messages
2. Review API response in browser Network tab
3. Check database connection
4. Review .env configuration

Enjoy your beautiful restaurant website! 🍽️
