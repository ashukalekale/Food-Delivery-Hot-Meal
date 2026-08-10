# Hotmeal Food Delivery

A full-stack food delivery application with React frontend and Express/MongoDB backend.

## Project structure

- `admin/` - Admin dashboard UI
- `backend/` - Node.js API server
- `frontend/` - Customer-facing React app

## Getting started

### Backend

```bash
cd backend
npm install
cp .env.example .env
# update .env with your MongoDB and Razorpay credentials
npm run dev
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

## Environment variables

Create a `.env` file in `backend/` with:

```env
MONGO_URI=mongodb://localhost:27017/Food-delivery
JWT_SECRET=your_jwt_secret
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
```

## Notes

- Do not commit secrets or `.env` files.
- The backend requires a working MongoDB connection.
