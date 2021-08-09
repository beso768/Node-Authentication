const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const blogsRouter = require('./routes/blogsRoutes')

const cors = require('cors')

const app = express();
app.use(cors())
// middleware
app.use(express.static('public'));
app.use(express.json());

// database connection

const dbURI = 'mongodb+srv://besogigashvili:HppCnfv7LeDSjZ6S@cluster0.5gmlh.mongodb.net/blog';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true ,useFindAndModify:false})
  .then((result) => {
    console.log('connected to db');
    app.listen(8080)
  })
  .catch((err) => console.log(err));

app.use(authRoutes);
// app.use(blogsRouter)
app.use(blogsRouter)