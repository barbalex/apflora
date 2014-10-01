'use strict';

var returnFunction = function(massnber) {
    if (massnber) {
        var node  = {},
            nodeText;

        // Baum-node sinnvoll beschreiben, auch wenn leere Werte vorhanden
        if (massnber.PopMassnBerJahr && massnber.BeurteilTxt) {
            nodeText = massnber.PopMassnBerJahr + ": " + massnber.BeurteilTxt;
        } else if (massnber.PopMassnBerJahr) {
            nodeText = massnber.PopMassnBerJahr + ": (nicht beurteilt)";
        } else if (massnber.BeurteilTxt) {
            nodeText = "(kein Jahr): " + massnber.BeurteilTxt;
        } else {
            nodeText = "(kein Jahr): (nicht beurteilt)";
        }

        // node aufbauen
        node.data = nodeText;
        node.attr = {
            id: massnber.PopMassnBerId,
            typ: 'popmassnber'
        };

        return node;
    } else {
        return {};
    }
};

module.exports = returnFunction;