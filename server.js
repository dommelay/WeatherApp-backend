//___________________
//Dependencies
//___________________
const express = require('express');
const mongoose = require ('mongoose');
const app = express ();
const db = mongoose.connection;
require('dotenv').config()
const cors = require('cors')
const City = require('./models/city.js')
//___________________
//Port
//___________________
// Allow use of Heroku's port or your own local port, depending on the environment
const PORT = process.env.PORT
//___________________
//Database
//___________________
// How to connect to the database either via heroku or locally
const MONGODB_URI = process.env.MONGODB_URI;

// Connect to Mongo &
// Fix Depreciation Warnings from Mongoose
// May or may not need these depending on your Mongoose version
mongoose.connect(MONGODB_URI)

//___________________
//Middleware
//___________________

//use public folder for static assets
app.use(express.static('public'));

// populates req.body with parsed info from forms - if no data from forms will return an empty object {}
app.use(express.urlencoded({ extended: false }));// extended: false - does not allow nested objects in query strings
app.use(express.json());// returns middleware that only parses JSON - may or may not need it depending on your project
app.use(cors());
//___________________
// Routes
//___________________
//localhost:3000
app.post('/cities', (req, res) => {
    City.create(req.body).then((createdCity) => {
        res.json(createdCity)
    })
})
app.get('/cities' , (req, res) => {
  City.find({}).then((foundCities) => {
    res.json(foundCities)
  })
})
app.delete('/cities/:id', (req, res) => {
    City.findByIdAndRemove(req.params.id).then((deletedCity) => {
        res.json(deletedCity)
    })
})
app.put('/cities/:id', (req, res) => {
    City.findByIdAndUpdate(req.params.id, req.body).then((updatedCity) => {
        res.json(updatedCity)
    })
})



//___________________
//Listener
//___________________
app.listen(PORT, () => console.log( 'Listening on port:', PORT));
mongoose.connection.once('open', ()=>{
    console.log('connected to mongod...');
});