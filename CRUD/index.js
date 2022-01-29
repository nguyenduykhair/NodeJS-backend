const express = require('express');

const { PORT } = require('./config');
const connectDB = require('./config/db');

const todoRoutes = require('./routes/todoRoutes');
const app = express();

app.use(express.json());

// connect DB
connectDB();

//routes
app.use('/api/v1/todo', todoRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
