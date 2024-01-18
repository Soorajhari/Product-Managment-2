const mongoose = require('mongoose');

async function connectToMongoDB() {
  try {
    await mongoose.connect('mongodb+srv://soorajhari1999:O0VeOzmX0ibVnFG7@cluster0.d3scysj.mongodb.net/', {
      
    });
        console.log('Connected to MongoDB hi every');
  } catch (error) {
    console.error('Failed to connect to MongoDB', error);
  }
}

module.exports= connectToMongoDB 