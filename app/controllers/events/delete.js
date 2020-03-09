const Event = require('../../models/event')
/**
 * Delete
 * @Class
 */
class Delete {
  constructor (app, connect) {
    this.app = app
    this.EventModel = connect.model('Event', Event)

    this.run()
  }

  /**
   * middleWare
   */
  middleware () {
    this.app.delete('/event/delete/:id', (req, res) => {
      // let deletedEvent
      try {
        const { id } = req.params
        this.EventModel.findById(id).then(event => {
          res.json(event || {})
          this.EventModel.findByIdAndDelete(id, event => {
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
