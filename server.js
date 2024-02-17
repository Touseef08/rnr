const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB Atlas (replace YOUR_MONGODB_URI with your actual MongoDB Atlas URI)
mongoose.connect('mongodb+srv://bhai:35202@cluster0.yrqtmyn.mongodb.net/RNR?retryWrites=true&w=majority',{
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
// Create a user schema
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const User = mongoose.model('User', userSchema);


// Details Model
const detailsSchema = new mongoose.Schema({
  name: String,
  pickupDate: String,
  returnDate: String,
  phoneNo: String,
  paymentMethod: String,
  location: String,
});

const DetailsModel = mongoose.model('Details', detailsSchema);

// Routes
app.post('/api/details', async (req, res) => {
  try {
    const details = new DetailsModel(req.body);
    await details.save();
    res.status(201).send(details);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error.message });
  }
});

app.post('/api/payment', async (req, res) => {
  try {
    // Assuming req.body contains the necessary payment information
    
    // Implement payment gateway logic here
    const paymentResponse = await axios.post('payment_gateway_api_url', req.body);

    // Check the payment gateway response and handle accordingly
    if (paymentResponse.data.success) {
      // If payment is successful, send a 200 OK response with a success message
      res.status(200).send({ message: 'Payment successful', paymentDetails: paymentResponse.data });
    } else {
      // If payment is not successful, send a 400 Bad Request response with an error message
      res.status(400).send({ message: 'Payment failed', error: 'Payment gateway error' });
    }

  } catch (error) {
    // If there's an error during payment processing, send a 400 Bad Request response
    // with a failure message and include details about the error in the response
    res.status(400).send({ message: 'Payment failed', error: error.message });
  }
});

// Register endpoint
app.post('/api/register', async (req, res) => {
  const { name, email, password } = req.body;
  
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(400).json({ message: 'Email already exists' });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = new User({
    name,
    email,
    password: hashedPassword,
  });

  await newUser.save();
  res.json({ message: 'User registered successfully' });
});

// Login endpoint
app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    return res.status(401).json({ message: 'Invalid email or password' });
  }

  const passwordMatch = await bcrypt.compare(password, user.password);

  if (!passwordMatch) {
    return res.status(401).json({ message: 'Invalid email or password' });
  }

  const token = jwt.sign({ email }, 'your-secret-key', { expiresIn: '12h' });

  res.json({ token });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
