// User
const CreateUser = require('./users/create.js')
const ShowUser = require('./users/show.js')
const UpdateUser = require('./users/update.js')
const DeleteUser = require('./users/delete.js')

// Group
const CreateGroup = require('./groups/create.js')
const ShowGroup = require('./groups/show.js')
const UpdateGroup = require('./groups/update.js')
const DeleteGroup = require('./groups/delete.js')

// Event
const CreateEvent = require('./events/create.js')
const ShowEvent = require('./events/show.js')
const UpdateEvent = require('./events/update.js')
const DeleteEvent = require('./events/delete.js')

module.exports = {
  users: {
    CreateUser,
    ShowUser,
    UpdateUser,
    DeleteUser
  },
  groups: {
    CreateGroup,
    ShowGroup,
    UpdateGroup,
    DeleteGroup
  },
  events: {
    CreateEvent,
    ShowEvent,
    UpdateEvent,
    DeleteEvent
  }
}

/*
const CreateEvent = require('./groups/create.js')
const ShowEvent = require('./groups/show.js')
const UpdateEvent = require('./groups/update.js')
const DeleteEvent = require('./groups/delete.js')
module.exports = {
  groups: {
    CreateEvent,
    ShowEvent,
    UpdateEvent,
    DeleteEvent
  }
}
*/
