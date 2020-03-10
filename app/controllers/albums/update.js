const Album = require('../../models/album')
const check = require('../albums/payload-validator/update.js')
const validator = require('node-validator')

/**
 * Update
 * @Class
 */
class Update {
  constructor (app, connect) {
    this.app = app
    this.AlbumModel = connect.model('Album', Album)

    this.run()
  }

  /**
   * middleWare
   */
  middleware () {
    this.app.put('/album/update/:id', validator.express(check), (req, res) => {
      try {
        const { id } = req.params
        const { body } = req
        
        this.AlbumModel.findByIdAndUpdate(id, body, {new: true}).then((album) => {
          res.status(200).json(album || {})
        }).catch(err => {
          res.status(500).json({
            'code': 500,
            'message': err
          })
        })
      } catch (err) {
        res.status(500).json({
          'code': 500,
          'message': err
        })
      }
    })
  }

  /**
   * Run
   */
  run () {
    this.middleware()
  }
}

module.exports = Update
