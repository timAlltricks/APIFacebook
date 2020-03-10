const Album = require('../../models/album')

/**
 * Show
 * @Class
 */
class Show {
  constructor (app, connect) {
    this.app = app
    this.Album = connect.model('Album', Album)

    this.run()
  }

  /**
   * middleWare
   */
  middleware () {
    this.app.get('/album/show/:id', (req, res) => {
      try {
        const { id } = req.params

        this.Album.findById(id).then(album => {
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

module.exports = Show
