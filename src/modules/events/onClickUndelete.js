'use strict'

var undeleteDatensatz = require('../undeleteDatensatz')

module.exports = function (event) {
  event.preventDefault()
  undeleteDatensatz()
}
