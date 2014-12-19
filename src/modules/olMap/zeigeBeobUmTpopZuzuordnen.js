/*jslint node: true, browser: true, nomen: true, todo: true */
'use strict';

var $                                   = require('jquery'),
    zeigeFormular                       = require('../zeigeFormular'),
    erstelleTPopLayer                   = require('./erstelleTPopLayer'),
    initiiereLayertree                  = require('./initiiereLayertree'),
    zeigePopInTPop                      = require('./zeigePopInTPop'),
    waehleAusschnittFuerUebergebeneTPop = require('./waehleAusschnittFuerUebergebeneTPop'),
    melde                               = require('../melde'),
    istLayerSichtbarNachName            = require('./istLayerSichtbarNachName');

module.exports = function (tpopListeMarkiert) {
    var markierteTpop,
        // wenn layer "Populationen" sichtbar ist, sichtbar behalten
        overlayPopVisible   = istLayerSichtbarNachName("Populationen");

    markierteTpop = waehleAusschnittFuerUebergebeneTPop(tpopListeMarkiert);

    // Grundkarte aufbauen
    $.when(zeigeFormular("olMap")).then(function () {
        // Karte zum richtigen Ausschnitt zoomen
        window.apf.olMap.map.updateSize();
        window.apf.olMap.map.getView().fitExtent(markierteTpop.bounds, window.apf.olMap.map.getSize());
        // tpop ergänzen
        $.ajax({
            type: 'get',
            url: 'api/v1/tpopKarteAlle/apId=' + window.apf.ap.ApArtId
        }).done(function (tpopListe) {
            $.when(
                // Layer für Symbole und Beschriftung erstellen
                erstelleTPopLayer(tpopListe, markierteTpop.tpopidMarkiert, true),
                // Pop holen, aber ausgeblendet
                zeigePopInTPop(overlayPopVisible)
                // zugeordnete beob holen
                zeigeBeobZugeordnet();
                // nicht beurteilte beob holen
                zeigeBeobNichtBeurteiltZumZuordnen();
            ).then(function () {
                // layertree neu aufbauen
                initiiereLayertree();
            });
        }).fail(function () {
            melde("Fehler: Es konnten keine Teilpopulationen aus der Datenbank abgerufen werden");
        });
    });
};