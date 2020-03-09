const mongoose = require('mongoose')

const groupSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    default: "https://fontawesome.com/icons/Groups?style=solid",
    required: true
  },
  photo: {
    type: String,
    required: true
  },
  group_type: {
    type: Number, //# 1=public 2=private secret=3
    required: true
  },
  membersCanPubli: {
    type: Boolean,
    required: true
  },
  membersCanEvent: {
    type: Boolean,
    required: true
  },
  admins: {
    type: Array,
    required: true
  },
  members: {
    type: Array,
    required: true
  },
  conversation: mongoose.ObjectId,
  events: Array
}, {
  collection: 'groups',
  minimize: false,
  versionKey: false
}).set('toJSON', {
  transform: (doc, ret) => {
    ret.id = ret._id

    delete ret._id
  }
})

module.exports = groupSchema
