'use strict';

var _ = require('underscore')
    , erstelleTpopMassn          = require('./tpopMassn')
    , erstelleTpopMassnBer       = require('./tpopMassnBer')
    , erstelleTpopFeldkontr      = require('./tpopFeldkontr')
    , erstelleTpopFreiwkontr     = require('./tpopFreiwkontr')
    , erstelleTpopBerOrdner            = require('./tpopBerOrdner')
    , erstelleTpopBeobZugeordnet = require('./tpopBeobZugeordnet')
    ;

var returnFunction = function(results, tpop) {
    var tpopNode  = {},
        tpopNodeText,
        tpopSort,
        tpopNodeChildren = [],
        tpopMassnNode,
        tpopMassnBerNode,
        tpopFeldkontrNode,
        tpopFreiwkontrNode,
        tpopBerNode,
        tpopBeobZugeordnetNode;

    // Baum-node sinnvoll beschreiben, auch wenn leere Werte vorhanden
    if (tpop.TPopNr && tpop.TPopFlurname) {
        tpopNodeText = tpop.TPopNr + ": " + tpop.TPopFlurname;
        tpopSort = tpop.TPopNr;
    } else if (tpop.PopBerJahr) {
        tpopNodeText = tpop.TPopNr + ": (kein Flurname)";
        tpopSort = tpop.TPopNr;
    } else if (tpop.TPopFlurname) {
        tpopNodeText = "(keine Nr): " + tpop.TPopFlurname;
        tpopSort = 1000;
    } else {
        tpopNodeText = "(keine Nr): (kein Flurname)";
        tpopSort = 1000;
    }

    // node aufbauen
    tpopNode.data = tpopNodeText;
    tpopNode.attr = {
        id: tpop.TPopId,
        typ: 'tpop',
        sort: tpopSort
    };
    tpopNode.children = tpopNodeChildren;

    // tpopOrdnerMassnahmen aufbauen
    tpopMassnNode = erstelleTpopMassn(results.tpopMassnListe, tpop);
    tpopNodeChildren.push(tpopMassnNode);

    // tpopOrdnerMassnBer aufbauen
    tpopMassnBerNode = erstelleTpopMassnBer(results.tpopMassnBerListe, tpop);
    tpopNodeChildren.push(tpopMassnBerNode);

    // tpopOrdnerFeldkontr aufbauen
    tpopFeldkontrNode = erstelleTpopFeldkontr(results.tpopFeldkontrListe, tpop);
    tpopNodeChildren.push(tpopFeldkontrNode);

    // tpopOrdnerFreiwkontr aufbauen
    tpopFreiwkontrNode = erstelleTpopFreiwkontr(results.tpopFreiwkontrListe, tpop);
    tpopNodeChildren.push(tpopFreiwkontrNode);

    // tpopOrdnerTpopber aufbauen
    tpopBerNode = erstelleTpopBerOrdner(results.tpopBerListe, tpop);
    tpopNodeChildren.push(tpopBerNode);
    
    // tpopOrdnerBeobZugeordnet aufbauen
    tpopBeobZugeordnetNode = erstelleTpopBeobZugeordnet(results.tpopBeobZugeordnetListe, tpop);
    tpopNodeChildren.push(tpopBeobZugeordnetNode);
	
    return tpopNode;
};

module.exports = returnFunction;