/* eslint-disable standard/object-curly-even-spacing */
const mongoose = require('mongoose')

const ticketingSchema = new mongoose.Schema({
  tickets: [{
    ticket_type: { type: mongoose.ObjectId, required: true },
    buyer: { type: mongoose.ObjectId, required: true },
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    adress: { type: String, required: true },
    buy_date: { type: Date, default: Date.now}
  }],
  ticket_types: [{
    ticket_type: {
      id: mongoose.SchemaTypes.ObjectId(),
      name: { type: String, required: true },
      price: { type: String, required: true },
      quantity: { type: String, required: true }
    }
  }]
}, {
  collection: 'ticketings',
  minimize: false,
  versionKey: false
})

module.exports = ticketingSchema
