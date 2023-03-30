const mongoose = require('mongoose')

const citiesSchema = new mongoose.Schema({
   code: Object
})

const Cities = mongoose.model('Cities', citiesSchema)

module.exports = Cities