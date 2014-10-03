'use strict';

var $           = require('jquery'),
    initiiereAp = require('./initiiereAp');
//require('jquery-ui');

var returnFunction = function () {
    if (!localStorage.apzielId) {
        // es fehlen benötigte Daten > eine Ebene höher
        initiiereAp();
        return;
    }

    var apziel_initiiert = $.Deferred(),
        $ZielJahr        = $("#ZielJahr");

    // Felder zurücksetzen
    window.apf.leereFelderVonFormular("apziel");

    // Daten für die apziel aus der DB holen
    $.ajax({
        type: 'get',
        url: 'api/v1/apflora/tabelle=tblZiel/feld=ZielId/wertNumber=' + localStorage.apzielId,
        dataType: 'json'
    }).done(function (data) {
        // Rückgabewert null wird offenbar auch als success gewertet, gibt weiter unten Fehler, also Ausführung verhindern
        if (data && data[0]) {
            data = data[0];
            // apziel bereitstellen
            window.apf.apziel = data;
            // Felder mit Daten beliefern
            $ZielJahr.val(data.ZielJahr);
            $("#ZielTyp" + data.ZielTyp).prop("checked", true);
            $("#ZielBezeichnung").val(data.ZielBezeichnung);
            // Formulare blenden
            window.apf.zeigeFormular("apziel");
            history.replaceState({apziel: "apziel"}, "apziel", "index.html?ap=" + localStorage.apId + "&apziel=" + localStorage.apzielId);
            // bei neuen Datensätzen Fokus steuern
            if (!$ZielJahr.val()) {
                $ZielJahr.focus();
            }
            apziel_initiiert.resolve();
        }
    });

    return apziel_initiiert.promise();
};

module.exports = returnFunction;