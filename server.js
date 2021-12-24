const express = require('express');
const connectDB = require('./config/db')
const app = express();

connectDB();

app.get('/', (req, res) => {
  res.send('API running succesfully')
})

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`)
})