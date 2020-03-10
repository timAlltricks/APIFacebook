const Album = require('../../models/album')
/**
 * Delete
 * @Class
 */
class Delete {
  constructor (app, connect) {
    this.app = app
    this.AlbumModel = connect.model('Album', Album)

    this.run()
  }

  /**
   * middleWare
   */
  middleware () {
    this.app.delete('/album/delete/:id', (req, res) => {
      // let deletedAlbum
      try {
        const { id } = req.params
        this.AlbumModel.findById(id).then(album => {
          res.json(album || {})
          this.AlbumModel.findByIdAndDelete(id, album => {
            return res.status(200)
          }).catch(err => {
            res.status(500).json({
              'code': 500,
              'message': err
            })
          })
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

module.exports = Delete
