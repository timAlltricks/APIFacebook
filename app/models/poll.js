const mongoose = require('mongoose')

const pollSchema = new mongoose.Schema({
  author: { type: mongoose.ObjectId, required: true },
  questions: [{
    question: {
      body: { type: String, required: true },
      answers: [{ 
        answer: {
          body: { type: String, required: true },
          votes: {type: Number, required: true}
        }
      }]
    }
  }]
}, {
  collection: 'polls',
  minimize: false,
  versionKey: false
})

module.exports = pollSchema
