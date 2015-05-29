'use strict'

var $ = require('jquery'),
  erstelleIdAusDomAttributId = require('../erstelleIdAusDomAttributId'),
  melde = require('../melde'),
  pruefeSchreibvoraussetzungen = require('../pruefeSchreibvoraussetzungen')

module.exports = function (aktiverNode) {
  // nur aktualisieren, wenn Schreibrechte bestehen
  if (!pruefeSchreibvoraussetzungen()) { return }
  window.apf.popNodeKopiert = aktiverNode
  // Daten des Objekts holen
  $.ajax({
    type: 'get',
    url: 'api/v1/apflora/tabelle=pop/feld=PopId/wertNumber=' + erstelleIdAusDomAttributId($(aktiverNode).attr('id'))
  }).done(function (data) {
    window.apf.popObjektKopiert = data[0]
  }).fail(function () {
    melde('Fehler: Die Population wurde nicht kopiert')
  })
}
