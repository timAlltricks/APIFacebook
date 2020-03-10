const mongoose = require('mongoose')

const shoppingListSchema = new mongoose.Schema({
  list: [{
    object: {
      author: { type: mongoose.ObjectId, required: true },
      date: { type: Date, default: Date.now },
      name: { type: String, required: true },
      quantity: { type: Number, required: true }
    }
  }]
}, {
  collection: 'albums',
  minimize: false,
  versionKey: false
})

module.exports = shoppingListSchema
