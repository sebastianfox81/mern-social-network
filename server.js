const express = require('express');
const connectDB = require('./config/db')
const cors = require('cors')
const app = express();

// Connect DB
connectDB();

// Init Middleware
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send('API running succesfully')
})

// Define Routes
app.use('/api/users', require('./routes/users'))
app.use('/api/auth', require('./routes/auth'))
app.use('/api/profile', require('./routes/profile'))
app.use('/api/posts', require('./routes/post'))

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`)
})