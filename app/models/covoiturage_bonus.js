const mongoose = require('mongoose')

const covoiturageSchema = new mongoose.Schema({
  author: {type: mongoose.ObjectId, required: true},
  departure_local: { type: String, required: true },
  departure_time: {
    hour: { type: Number, required: true },
    minute: { type: Number, required: true }
  },
  price: { type: Number, required: true },
  size: { type: Number, required: true },
  max_gap: { type: Number, required: true }
}, {
  collection: 'covoiturages',
  minimize: false,
  versionKey: false
})

module.exports = covoiturageSchema
