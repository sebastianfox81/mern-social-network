const express = require('express');
const connectDB = require('./config/db')
const app = express();

// Connect DB
connectDB();

app.get('/', (req, res) => {
  res.send('API running succesfully')
})

// Define Routes
app.use('/api/users', require('./routes/users'))
app.use('/api/auth', require('./routes/auth'))
app.use('/api/profile', require('./routes/profile'))
app.use('/api/post', require('./routes/post'))

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`)
})