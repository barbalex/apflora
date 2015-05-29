'use strict'

var $ = require('jquery'),
  ordneBeobEinerTpopZu = require('../../../ordneBeobEinerTpopZu')

module.exports = function () {
  var beobId = window.localStorage.beobId,
    tpopId = $(this).val(),
    beobTpopId

  beobTpopId = window.apf.beob.zuordnung && window.apf.beob.zuordnung.TPopId ? window.apf.beob.zuordnung.TPopId : null

  ordneBeobEinerTpopZu(beobId, 'zugeordnet', tpopId, beobTpopId)
}
