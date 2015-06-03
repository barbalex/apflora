'use strict'

var $ = require('jquery'),
  erstelleIdAusDomAttributId = require('../erstelleIdAusDomAttributId'),
  melde = require('../melde'),
  pruefeSchreibvoraussetzungen = require('../pruefeSchreibvoraussetzungen'),
  getApiHost = require('../getApiHost')

module.exports = function (aktiverNode) {
  // nur aktualisieren, wenn Schreibrechte bestehen
  if (!pruefeSchreibvoraussetzungen()) { return }
  window.apf.tpopNodeKopiert = aktiverNode
  // Daten des Objekts holen
  $.ajax({
    type: 'get',
    url: getApiHost() + '/apflora/tabelle=tpop/feld=TPopId/wertNumber=' + erstelleIdAusDomAttributId($(aktiverNode).attr('id'))
  }).done(function (data) {
    window.apf.tpopObjektKopiert = data[0]
  }).fail(function () {
    melde('Fehler: Die Teilpopulation wurde nicht kopiert')
  })
}
