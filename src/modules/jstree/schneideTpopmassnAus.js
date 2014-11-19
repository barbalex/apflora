/*jslint node: true, browser: true, nomen: true, todo: true */
'use strict';

module.exports = function (aktiverNode) {
    // nur aktualisieren, wenn Schreibrechte bestehen
    if (!window.apf.pruefeSchreibvoraussetzungen()) {
        return;
    }
    window.apf.tpopmassnNodeAusgeschnitten = aktiverNode;
    // es macht keinen Sinn mehr, den kopierten node zu behalten
    // und stellt sicher, dass nun der ausgeschnittene mit "einfügen" angeboten wird
    delete window.apf.tpopmassnNodeKopiert;
    delete window.apf.tpopmassnObjektKopiert;
};