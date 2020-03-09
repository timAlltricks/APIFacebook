const mongoose = require('mongoose')

const eventSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  date_start: {
    type: Date,
    required: true
  },
  date_end: {
    type: Date,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  photo: {
    type: String,
    required: true
  },
  private: {
    type: Boolean,
    required: true
  },
  organizers: {
    type: Array,
    required: true
  },
  participants: {
    type: Array,
    required: true
  },
  conversation: mongoose.ObjectId,
  album: mongoose.ObjectId,
  poll: mongoose.ObjectId,
  ticketing: mongoose.ObjectId,
  shoppingListOn: Boolean,
  shoppingList: Array,
  covoiturage: Boolean,
  covoiturageList: Array
}, {
  collection: 'events',
  minimize: false,
  versionKey: false
})

module.exports = eventSchema
