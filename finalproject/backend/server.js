require('dotenv').config();
const express = require('express');
const sequelize = require('./config/config');
const cors =require('cors');
const bodyParser = require('body-parser');


const authRoutes = require('./routes/authRoutes');
const accountRoutes = require('./routes/accountRoutes');
const managerRoutes = require('./routes/managerRoutes');



const app = express();

app.use(express.json());

app.use('/auth', authRoutes);
app.use('/account', accountRoutes);
app.use('/manager', managerRoutes);
// In your backend server file

app.use(cors());


const PORT = process.env.PORT || 5000;
app.use(bodyParser.json());
app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials:true
}));








sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
