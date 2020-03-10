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

// Album
const CreateAlbum = require('./albums/create.js')
const ShowAlbum = require('./albums/show.js')
const UpdateAlbum = require('./albums/update.js')
const DeleteAlbum = require('./albums/delete.js')

// Prototype
/* const CreateCamel = require('./minuscules/create.js')
const ShowCamel = require('./minuscules/show.js')
const UpdateCamel = require('./minuscules/update.js')
const DeleteCamel = require('./minuscules/delete.js') */

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
  },
  albums: {
    CreateAlbum,
    ShowAlbum,
    UpdateAlbum,
    DeleteAlbum
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
