const _ = require('node-validator')

module.exports = _.isObject()
  .withOptional('name', _.isString())
  .withOptional('description', _.isString())
  .withOptional('icon', _.isString())
  .withOptional('photo', _.isString())
  .withOptional('group_type', _.isNumber({min: 1, max: 3}))
  .withOptional('membersCanPubli', _.isBoolean())
  .withOptional('membersCanEvent', _.isBoolean())
  .withOptional('admins', _.isArray())
  .withOptional('members', _.isArray())
  .withOptional('conversation', _.isObject())
  .withOptional('events', _.isArray())
