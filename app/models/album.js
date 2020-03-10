const mongoose = require('mongoose')

const albumSchema = new mongoose.Schema({
  photos: [{
    author: { type: mongoose.ObjectId, required: true },
    date: { type: Date, default: Date.now },
    url: { type: String, required: true },
    comments: [{
      author: { type: mongoose.ObjectId, required: true },
      date: { type: Date, default: Date.now },
      body: { type: String, required: true }
    }]
  }]
}, {
  collection: 'albums',
  minimize: false,
  versionKey: false
})

module.exports = albumSchema
