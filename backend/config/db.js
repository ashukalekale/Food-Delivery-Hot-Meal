import mongoose from "mongoose";

export const connectDB = async () => {
  const uri = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/Food-delivery';

  try {
    await mongoose.connect(uri);
    console.log('DB connected');
  } catch (error) {
    console.error('MongoDB connection error:', error.message || error);
    process.exit(1);
  }
};
