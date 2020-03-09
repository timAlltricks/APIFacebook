const Event = require('../../models/event')

/**
 * Show
 * @Class
 */
class Show {
  constructor (app, connect) {
    this.app = app
    this.Event = connect.model('Event', Event)

    this.run()
  }

  /**
   * middleWare
   */
  middleware () {
    this.app.get('/event/show/:id', (req, res) => {
      try {
        const { id } = req.params

        this.Event.findById(id).then(event => {
          res.status(200).json(event || {})
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
