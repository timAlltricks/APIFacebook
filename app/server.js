const express = require('express')
const routes = require('./controllers/routes.js')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

/**
 * Server
 * @Class
 */
class Server {
  constructor () {
    this.app = express()
  }

  /**
   * db connect
   * @Return {Object} connect
   */
  dbConnect () {
    const host = 'mongodb://localhost:27017/facebook'
    const connect = mongoose.createConnection(host, {useNewUrlParser: true})

    connect.on('error', (err) => {
      setTimeout(() => {
        console.log('[ERROR] stream mentions api dbConnect() -> mongodb error')
        this.connect = this.dbConnect(host)
      }, 5000)

      console.error(`[ERROR] api dbConnect() -> ${err}`)
    })

    connect.on('disconnected', () => {
      setTimeout(() => {
        console.log('[DISCONNECTED] api dbConnect() -> mongodb disconnected')
        this.connect = this.dbConnect(host)
      }, 5000)
    })

    process.on('SIGINT', () => {
      connect.close(() => {
        console.log('[API END PROCESS] api dbConnect() -> mongodb connection')
        process.exit(0)
      })
    })

    return connect
  }

  /**
   * middleware
   */
  middleware () {
    this.app.use(bodyParser.urlencoded({ 'extended': true }))
    this.app.use(bodyParser.json())
  }

  /**
   * Routes
   */
  routes () {
    // User
    new routes.users.CreateUser(this.app, this.connect)
    new routes.users.ShowUser(this.app, this.connect)
    new routes.users.UpdateUser(this.app, this.connect)
    new routes.users.DeleteUser(this.app, this.connect)

    // Group
    new routes.groups.CreateGroup(this.app, this.connect)
    new routes.groups.ShowGroup(this.app, this.connect)
    new routes.groups.UpdateGroup(this.app, this.connect)
    new routes.groups.DeleteGroup(this.app, this.connect)

    // Event
    new routes.events.CreateEvent(this.app, this.connect)
    new routes.events.ShowEvent(this.app, this.connect)
    new routes.events.UpdateEvent(this.app, this.connect)
    new routes.events.DeleteEvent(this.app, this.connect)

    // Album
    new routes.albums.CreateAlbum(this.app, this.connect)
    new routes.albums.ShowAlbum(this.app, this.connect)
    new routes.albums.UpdateAlbum(this.app, this.connect)
    new routes.albums.DeleteAlbum(this.app, this.connect)

    this.app.use((req, res) => {
      res.status(404).json({
        'code': 404,
        'message': 'Not found in API'
      })
    })
  }

  /**
   * Run
   */
  run () {
    try {
      this.connect = this.dbConnect()
      this.dbConnect()
      this.middleware()
      this.routes()
      this.app.listen(3000)
    } catch (err) {
      console.error(`[ERROR] Server -> ${err}`)
    }
  }
}

module.exports = Server
