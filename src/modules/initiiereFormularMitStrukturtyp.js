'use strict';

/**
 * nimmt einen Strukturtyp des tree entgegen
 * sucht die Funktion, welche dessen Formular initiiert
 * ruft diese Funktion auf
 */

var conf                       = require('./configuration'),
    fn                         = {},
    fnInitiiereFunktion;

fn.initiiereIdealbiotop    = require('./initiiereIdealbiotop');
fn.initiiereAp             = require('./initiiereAp');
fn.initiierePop            = require('./initiierePop');
fn.initiiereApziel         = require('./initiiereApziel');
fn.initiiereZielber        = require('./initiiereZielber');
fn.initiiereErfkrit        = require('./initiiereErfkrit');
fn.initiiereJber           = require('./initiiereJber');
fn.initiiereJberUebersicht = require('./initiiereJberUebersicht');
fn.initiiereBer            = require('./initiiereBer');
fn.initiiereAssozarten     = require('./initiiereAssozarten');
fn.initiierePopMassnBer    = require('./initiierePopMassnBer');
fn.initiiereTPop           = require('./initiiereTPop');
fn.initiierePopBer         = require('./initiierePopBer');
fn.initiiereTPopFeldkontr  = require('./initiiereTPopFeldkontr');
fn.initiiereTPopMassn      = require('./initiiereTPopMassn');
fn.initiiereTPopMassnBer   = require('./initiiereTPopMassnBer');
fn.initiiereTPopBer        = require('./initiiereTPopBer');

var returnFunction = function(strukturtyp) {
    if (strukturtyp === "tpopfreiwkontr") {
        // der Initiierung mitteilen, dass es eine Freiwilligenkontrolle ist und keine Feldkontrolle
        localStorage.tpopfreiwkontr = true;
        // Freiwilligen-Kontrollen werden von derselben Funktion initiiert, wie Feldkontrollen
        fn.initiiereTPopFeldkontr();

    } else {
        fnInitiiereFunktion = _.filter(conf.tables, function(table) {
            return table.treeTyp === strukturtyp;
        })[0].initiiereFunktion;
        fn[fnInitiiereFunktion]();
    }
};

module.exports = returnFunction;