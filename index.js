require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Example routes
app.get('/', (req, res) => {
  res.send('P2P Lending API is running');
});

app.post('/api/login', (req, res) => {
  const { email, password } = req.body;
  // Add your login logic here
  res.json({ message: 'Login endpoint hit', email });
});

app.post('/api/register', (req, res) => {
  const { email, password } = req.body;
  // Add your registration logic here
  res.json({ message: 'Register endpoint hit', email });
});

app.get('/api/loans', (req, res) => {
  // Mock data
  res.json([{ id: 1, amount: 5000, status: 'open' }]);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));