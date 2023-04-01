const mongoose = require('mongoose')

const citySchema = new mongoose.Schema({
   name: String,
   temp: Number,
   tempMax: Number,
   tempMin: Number,
   tempFeels: Number,
   time: String,
   humidity: Number,
   windSpeed: Number,
   weatherMain: String,
   weatherDescription: String,
   weatherIcon: String,
   cloud: Number,
   country: String,
   url: String
})

const City = mongoose.model('City', citySchema)

module.exports = City