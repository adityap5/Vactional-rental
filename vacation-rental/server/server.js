require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');


const authRoutes = require('./routes/auth');
const propertyRoutes = require('./routes/properties');
const recommendationRoutes = require("./routes/recommendations");

const app = express();

console.log('Environment Variables:');
console.log('PORT:', process.env.PORT);
console.log('MONGODB_URI:', process.env.MONGO_URI ? 'Set' : 'Not Set');
console.log('JWT_SECRET:', process.env.JWT_SECRET ? 'Set' : 'Not Set');



connectDB().then(() => {
    console.log('Database connection attempted');
}).catch(err => {
    console.error('Database connection error:', err);
});

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/properties', propertyRoutes);
app.use("/api/recommendations", recommendationRoutes);
// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something broke!' });
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});