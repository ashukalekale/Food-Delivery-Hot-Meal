# Hotmeal Food Delivery

A full-stack food delivery platform where customers can browse meals, manage a cart, place Razorpay orders, and track their order history. The project also includes an admin dashboard for managing food items and order statuses.

## Features

### Customer experience

- User registration and login
- Browse food items by category
- Add and remove items from a shopping cart
- Place orders with Razorpay payment integration
- View previous orders
- Responsive React interface for desktop and mobile

### Admin dashboard

- Add food items with images
- View the available food catalog
- Remove food items
- View customer orders
- Update order status

## Tech Stack

**Customer frontend**

- React 18
- React Router
- Vite
- Axios
- React Toastify

**Admin frontend**

- React 18
- React Router
- Vite
- Axios

**Backend**

- Node.js
- Express
- MongoDB with Mongoose
- JWT authentication
- Multer image uploads
- Razorpay payments

## Project Structure

```text
Hotmeal-foodDelivery/
├── admin/                 # Admin dashboard
│   ├── public/            # Static public assets
│   ├── src/
│   │   ├── assets/        # Dashboard icons, logos, and images
│   │   ├── components/
│   │   │   ├── Navbar/    # Admin navigation bar
│   │   │   └── Sidebar/   # Admin sidebar navigation
│   │   ├── pages/
│   │   │   ├── Add/       # Add food item page
│   │   │   ├── List/      # Food catalog management page
│   │   │   └── Orders/    # Order management page
│   │   ├── App.jsx        # Admin routes and layout
│   │   ├── index.css      # Global admin styles
│   │   └── main.jsx       # Admin app entry point
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
├── backend/               # Express API and database models
│   ├── config/            # Database configuration
│   ├── controllers/       # Request handlers
│   ├── middleware/        # Authentication middleware
│   ├── models/            # Mongoose models
│   ├── routes/            # API routes
│   ├── uploads/            # Uploaded food images, ignored by Git
│   ├── package.json
│   └── server.js          # API entry point
├── frontend/              # Customer-facing React application
│   ├── public/             # Static public assets
│   ├── src/
│   │   ├── assets/         # Food, menu, branding, and UI images
│   │   ├── components/
│   │   │   ├── AppDownload/    # Mobile app download section
│   │   │   ├── ExploreMenu/    # Food category menu
│   │   │   ├── FoodDisplay/    # Food listing section
│   │   │   ├── FoodItem/       # Individual food card
│   │   │   ├── Footer/         # Site footer
│   │   │   ├── Header/         # Home page header
│   │   │   ├── LoginPopup/     # Login and registration modal
│   │   │   ├── Navbar/         # Customer navigation bar
│   │   │   └── context/        # Cart and user state management
│   │   ├── pages/
│   │   │   ├── Home/           # Restaurant home page
│   │   │   ├── Cart/           # Shopping cart page
│   │   │   ├── PlaceOrder/     # Delivery and checkout page
│   │   │   ├── MyOrders/       # Customer order history
│   │   │   └── Verify/         # Payment verification page
│   │   ├── App.jsx             # Customer routes and layout
│   │   ├── index.css           # Global customer styles
│   │   └── main.jsx            # Customer app entry point
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
└── README.md
```

## Prerequisites

- Node.js 16 or later
- npm
- MongoDB local instance or MongoDB Atlas database
- Razorpay account and API credentials for payments

## Installation

Clone the repository and install dependencies for each application:

```bash
git clone https://github.com/ashukalekale/Food-Delivery-Hot-Meal.git
cd Food-Delivery-Hot-Meal

cd backend
npm install

cd ../frontend
npm install

cd ../admin
npm install
```

## Environment Variables

Create `backend/.env` from the example file:

```bash
cd backend
copy .env.example .env
```

On macOS or Linux, use `cp .env.example .env` instead. Update the values in `backend/.env`:

```env
MONGO_URI=mongodb://127.0.0.1:27017/Food-delivery
JWT_SECRET=replace_with_a_long_random_secret
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
```

Never commit real credentials or `.env` files.

## Running Locally

Start the backend in one terminal:

```bash
cd backend
npm run dev
```

The API runs at `http://localhost:4000`. The root endpoint can be used as a basic health check: `GET /`.

Start the customer application in another terminal:

```bash
cd frontend
npm run dev
```

Start the admin dashboard in a third terminal:

```bash
cd admin
npm run dev
```

Vite normally serves the first frontend at `http://localhost:5173`. If both frontend applications run together, Vite assigns the second available port and prints it in the terminal.

## API Overview

The backend exposes these route groups:

### Users: `/api/user`

- `POST /register` - Create a customer account
- `POST /login` - Authenticate a customer

### Food: `/api/food`

- `GET /list` - List food items
- `POST /add` - Add a food item with an image
- `POST /remove` - Remove a food item

### Cart: `/api/cart`

- `POST /add` - Add an item to the authenticated user's cart
- `POST /remove` - Remove an item from the cart
- `POST /get` - Get the authenticated user's cart

### Orders: `/api/order`

- `POST /place` - Create an order for the authenticated user
- `POST /verify` - Verify Razorpay payment
- `POST /userorders` - Get the current user's orders
- `GET /list` - List orders for the admin dashboard
- `POST /status` - Update an order status

Food images are served from `/images`.

## Production Builds

Build the customer frontend:

```bash
cd frontend
npm run build
```

Build the admin dashboard:

```bash
cd admin
npm run build
```

Run the backend in production mode with:

```bash
cd backend
npm start
```

Before deployment, configure production MongoDB, Razorpay, JWT, CORS, and frontend API URLs for the hosting environment.

## Security Notes

- Keep `backend/.env` private.
- Use a strong, unique `JWT_SECRET` in production.
- Do not expose the Razorpay secret key in either frontend application.
- Review CORS and authentication settings before deploying publicly.

## License

ISC
