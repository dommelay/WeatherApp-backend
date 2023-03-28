const mongoose = require('mongoose')

const weatherSchema = new mongoose.Schema({
    city: String
})

const Weather = mongoose.model('Weather', weatherSchema)

module.exports = Weather