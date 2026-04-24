# Zephyr Restaurant & Lounge - Full Stack Web Application

A beautiful, modern full-stack restaurant website built with React, Tailwind CSS, Node.js/Express, and PostgreSQL.

## Features

✨ **Beautiful UI/UX**
- Elegant dark theme with golden accents
- Smooth animations and transitions with Framer Motion
- Responsive design (mobile, tablet, desktop)
- Modern gradient designs and color schemes

🍽️ **Core Features**
- Home page with hero section
- About page with company info
- Interactive menu with categories
- Gallery with image showcase
- Events/Private dining packages
- Online reservations system
- Contact form with location map
- Opening hours display
- Customer ratings and testimonials

⚡ **Technology Stack**

Frontend:
- React 18 with Vite
- Tailwind CSS for styling
- Framer Motion for animations
- React Router for navigation
- Axios for API calls
- React Hook Form for forms
- Leaflet for maps
- Lucide Icons for UI

Backend:
- Node.js with Express.js
- PostgreSQL database
- CORS support
- Request validation
- Environment configuration

## Project Structure

```
zephyr-restaurant/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── HeroSection.jsx
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Menu.jsx
│   │   │   ├── Gallery.jsx
│   │   │   ├── Events.jsx
│   │   │   ├── Reservations.jsx
│   │   │   └── Contact.jsx
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   ├── package.json
│   ├── vite.config.js
│   ├── tailwind.config.js
│   └── index.html
├── backend/
│   ├── src/
│   │   ├── config/
│   │   │   ├── config.js
│   │   │   └── database.js
│   │   ├── controllers/
│   │   │   └── controllers.js
│   │   ├── database/
│   │   │   └── migrations.js
│   │   ├── routes/
│   │   │   └── routes.js
│   │   └── server.js
│   ├── package.json
│   ├── .env
│   └── .env.example
└── README.md
```

## Installation

### Prerequisites
- Node.js (v16 or higher)
- PostgreSQL (v12 or higher)
- npm or yarn

### Backend Setup

1. Navigate to backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create PostgreSQL database:
```bash
createdb zephyr_restaurant
```

4. Configure environment variables (.env file is already created):
```bash
DB_HOST=localhost
DB_PORT=5432
DB_NAME=zephyr_restaurant
DB_USER=postgres
DB_PASSWORD=your_password
```

5. Start the server:
```bash
npm run dev
```

Server will run on `http://localhost:5000`

### Frontend Setup

1. Navigate to frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

Frontend will run on `http://localhost:5173`

## API Endpoints

### Menu
- `GET /api/menu` - Get all menu items
- `GET /api/menu?category=appetizers` - Get menu by category
- `GET /api/menu/:id` - Get specific menu item

### Reservations
- `POST /api/reservations` - Create new reservation
- `GET /api/reservations` - Get all reservations
- `GET /api/reservations/:id` - Get specific reservation
- `PATCH /api/reservations/:id` - Update reservation status

### Contact
- `POST /api/contact` - Submit contact form
- `GET /api/contact` - Get all contact submissions

### Gallery
- `GET /api/gallery` - Get all gallery items
- `GET /api/gallery?category=food` - Get gallery by category

## Database Schema

### menu_items
- id, name, category, description, price, is_available, created_at, updated_at

### reservations
- id, name, email, phone, reservation_date, reservation_time, number_of_guests, special_requests, status, created_at, updated_at

### contact_submissions
- id, name, email, subject, message, status, created_at

### gallery
- id, title, category, image_url, created_at

### users
- id, username, email, password, role, created_at

## Color Scheme

- **Primary**: Dark brown/gold (#3a3425, #b29d6e)
- **Accent**: Warm orange/gold (#f4b589, #d48c54)
- **Dark**: #1a1a1a
- **Light**: #f5f5f5

## Animations

- Fade In/Out transitions
- Slide Up/Down/Left/Right effects
- Scale and zoom animations
- Shimmer loading effects
- Hover interactions
- Stagger delays on grid items

## Restaurant Information

**Zephyr Restaurant & Lounge**
- 📍 Catharsis Tower, House-133, Road-12, Banani Model Town, Dhaka 1213
- 📞 +880 1321-197337
- 📧 zephyrlounge12@gmail.com
- ⭐ Rating: 4.4/5 (606 reviews)
- 🕒 Hours: 3:00 PM - 3:30 AM Daily

## Cuisines Offered

- Mediterranean
- Italian
- Asian
- Chinese
- Vegetarian
- Vegan

## Features Included

✓ Rooftop dining experience
✓ Indoor and outdoor seating
✓ Greenery-filled ambiance
✓ Romantic dinner setting
✓ Small events and gatherings
✓ Delivery available
✓ Private dining options
✓ Bar and cocktail service
✓ Wine selection
✓ Live entertainment for events

## Deployment

### Frontend (Vercel/Netlify)
```bash
npm run build
# Deploy the dist folder
```

### Backend (Heroku/Railway)
```bash
git push heroku main
```

## Future Enhancements

- User authentication system
- Order management system
- Admin dashboard
- Real-time notifications
- Payment integration
- Review and rating system
- Multiple language support
- SEO optimization
- Image upload functionality

## License

MIT License - Feel free to use this template for your restaurant business

## Support

For issues and questions, contact: zephyrlounge12@gmail.com

---

Built with ❤️ for Zephyr Restaurant & Lounge
