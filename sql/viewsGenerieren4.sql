/*
 * diese Views hängen von anderen ab, die in viewsGenerieren3.sql erstellt werden
 * daher muss diese Date NACH viewsGenerieren3.sql ausgeführt werden
 */

CREATE OR REPLACE VIEW v_tpop_anzkontrinklletzterundletztertpopberundanz AS
SELECT apflora_views.v_tpop_anzkontrinklletzterundletztertpopber.ApArtId, apflora_views.v_tpop_anzkontrinklletzterundletztertpopber.Familie, apflora_views.v_tpop_anzkontrinklletzterundletztertpopber.`AP Art`, apflora_views.v_tpop_anzkontrinklletzterundletztertpopber.`AP Status`, apflora_views.v_tpop_anzkontrinklletzterundletztertpopber.`AP Start im Jahr`, apflora_views.v_tpop_anzkontrinklletzterundletztertpopber.`AP Stand Umsetzung`, apflora_views.v_tpop_anzkontrinklletzterundletztertpopber.`AP verantwortlich`, apflora_views.v_tpop_anzkontrinklletzterundletztertpopber.`Pop Guid`, apflora_views.v_tpop_anzkontrinklletzterundletztertpopber.`Pop Nr`, apflora_views.v_tpop_anzkontrinklletzterundletztertpopber.`Pop Name`, apflora_views.v_tpop_anzkontrinklletzterundletztertpopber.`Pop Herkunft`, apflora_views.v_tpop_anzkontrinklletzterundletztertpopber.`Pop bekannt seit`, apflora_views.v_tpop_anzkontrinklletzterundletztertpopber.`TPop ID`, apflora_views.v_tpop_anzkontrinklletzterundletztertpopber.`TPop Guid`, apflora_views.v_tpop_anzkontrinklletzterundletztertpopber.`TPop Nr`, apflora_views.v_tpop_anzkontrinklletzterundletztertpopber.`TPop Gemeinde`, apflora_views.v_tpop_anzkontrinklletzterundletztertpopber.`TPop Flurname`, apflora_views.v_tpop_anzkontrinklletzterundletztertpopber.`TPop Status`, apflora_views.v_tpop_anzkontrinklletzterundletztertpopber.`TPop bekannt seit`, apflora_views.v_tpop_anzkontrinklletzterundletztertpopber.`TPop Status unklar`, apflora_views.v_tpop_anzkontrinklletzterundletztertpopber.`TPop Begruendung fuer unklaren Status`, apflora_views.v_tpop_anzkontrinklletzterundletztertpopber.`TPop X-Koordinaten`, apflora_views.v_tpop_anzkontrinklletzterundletztertpopber.`TPop Y-Koordinaten`, apflora_views.v_tpop_anzkontrinklletzterundletztertpopber.`TPop Radius m`, apflora_views.v_tpop_anzkontrinklletzterundletztertpopber.`TPop Hoehe`, apflora_views.v_tpop_anzkontrinklletzterundletztertpopber.`TPop Exposition`, apflora_views.v_tpop_anzkontrinklletzterundletztertpopber.`TPop Klima`, apflora_views.v_tpop_anzkontrinklletzterundletztertpopber.`TPop Hangneigung`, apflora_views.v_tpop_anzkontrinklletzterundletztertpopber.`TPop Beschreibung`, apflora_views.v_tpop_anzkontrinklletzterundletztertpopber.`TPop Kataster-Nr`, apflora_views.v_tpop_anzkontrinklletzterundletztertpopber.`TPop fuer AP-Bericht relevant`, apflora_views.v_tpop_anzkontrinklletzterundletztertpopber.`TPop EigentuemerIn`, apflora_views.v_tpop_anzkontrinklletzterundletztertpopber.`TPop Kontakt vor Ort`, apflora_views.v_tpop_anzkontrinklletzterundletztertpopber.`TPop Nutzungszone`, apflora_views.v_tpop_anzkontrinklletzterundletztertpopber.`TPop BewirtschafterIn`, apflora_views.v_tpop_anzkontrinklletzterundletztertpopber.`TPop Bewirtschaftung`, apflora_views.v_tpop_anzkontrinklletzterundletztertpopber.`TPop Anzahl Kontrollen`, apflora_views.v_tpop_anzkontrinklletzterundletztertpopber.TPopKontrId, apflora_views.v_tpop_anzkontrinklletzterundletztertpopber.TPopId, apflora_views.v_tpop_anzkontrinklletzterundletztertpopber.`Kontr Guid`, apflora_views.v_tpop_anzkontrinklletzterundletztertpopber.`Kontr Jahr`, apflora_views.v_tpop_anzkontrinklletzterundletztertpopber.`Kontr Datum`, apflora_views.v_tpop_anzkontrinklletzterundletztertpopber.`Kontr Typ`, apflora_views.v_tpop_anzkontrinklletzterundletztertpopber.`Kontr BearbeiterIn`, apflora_views.v_tpop_anzkontrinklletzterundletztertpopber.`Kontr Ueberlebensrate`, apflora_views.v_tpop_anzkontrinklletzterundletztertpopber.`Kontr Vitalitaet`, apflora_views.v_tpop_anzkontrinklletzterundletztertpopber.`Kontr Entwicklung`, apflora_views.v_tpop_anzkontrinklletzterundletztertpopber.`Kontr Ursachen`, apflora_views.v_tpop_anzkontrinklletzterundletztertpopber.`Kontr Erfolgsbeurteilung`, apflora_views.v_tpop_anzkontrinklletzterundletztertpopber.`Kontr Aenderungs-Vorschlaege Umsetzung`, apflora_views.v_tpop_anzkontrinklletzterundletztertpopber.`Kontr Aenderungs-Vorschlaege Kontrolle`, apflora_views.v_tpop_anzkontrinklletzterundletztertpopber.`Kontr X-Koord`, apflora_views.v_tpop_anzkontrinklletzterundletztertpopber.`Kontr Y-Koord`, apflora_views.v_tpop_anzkontrinklletzterundletztertpopber.`Kontr Bemerkungen`, apflora_views.v_tpop_anzkontrinklletzterundletztertpopber.`Kontr Lebensraum Delarze`, apflora_views.v_tpop_anzkontrinklletzterundletztertpopber.`Kontr angrenzender Lebensraum Delarze`, apflora_views.v_tpop_anzkontrinklletzterundletztertpopber.`Kontr Vegetationstyp`, apflora_views.v_tpop_anzkontrinklletzterundletztertpopber.`Kontr Konkurrenz`, apflora_views.v_tpop_anzkontrinklletzterundletztertpopber.`Kontr Moosschicht`, apflora_views.v_tpop_anzkontrinklletzterundletztertpopber.`Kontr Krautschicht`, apflora_views.v_tpop_anzkontrinklletzterundletztertpopber.`Kontr Strauchschicht`, apflora_views.v_tpop_anzkontrinklletzterundletztertpopber.`Kontr Baumschicht`, apflora_views.v_tpop_anzkontrinklletzterundletztertpopber.`Kontr Bodentyp`, apflora_views.v_tpop_anzkontrinklletzterundletztertpopber.`Kontr Boden Kalkgehalt`, apflora_views.v_tpop_anzkontrinklletzterundletztertpopber.`Kontr Boden Durchlaessigkeit`, apflora_views.v_tpop_anzkontrinklletzterundletztertpopber.`Kontr Boden Humusgehalt`, apflora_views.v_tpop_anzkontrinklletzterundletztertpopber.`Kontr Boden Naehrstoffgehalt`, apflora_views.v_tpop_anzkontrinklletzterundletztertpopber.`Kontr Oberbodenabtrag`, apflora_views.v_tpop_anzkontrinklletzterundletztertpopber.`Kontr Wasserhaushalt`, apflora_views.v_tpop_anzkontrinklletzterundletztertpopber.`Kontr Uebereinstimmung mit Idealbiotop`, apflora_views.v_tpop_anzkontrinklletzterundletztertpopber.`Kontr Handlungsbedarf`, apflora_views.v_tpop_anzkontrinklletzterundletztertpopber.`Kontr Ueberpruefte Flaeche`, apflora_views.v_tpop_anzkontrinklletzterundletztertpopber.`Kontr Flaeche der Teilpopulation m2`, apflora_views.v_tpop_anzkontrinklletzterundletztertpopber.`Kontr auf Plan eingezeichnet`, apflora_views.v_tpop_anzkontrinklletzterundletztertpopber.`Kontr Deckung durch Vegetation`, apflora_views.v_tpop_anzkontrinklletzterundletztertpopber.`Kontr Deckung nackter Boden`, apflora_views.v_tpop_anzkontrinklletzterundletztertpopber.`Kontr Deckung durch ueberpruefte Art`, apflora_views.v_tpop_anzkontrinklletzterundletztertpopber.`Kontr auch junge Pflanzen`, apflora_views.v_tpop_anzkontrinklletzterundletztertpopber.`Kontr maximale Veg-hoehe cm`, apflora_views.v_tpop_anzkontrinklletzterundletztertpopber.`Kontr mittlere Veg-hoehe cm`, apflora_views.v_tpop_anzkontrinklletzterundletztertpopber.`Kontr Gefaehrdung`, apflora_views.v_tpop_anzkontrinklletzterundletztertpopber.`Kontrolle zuletzt geaendert`, apflora_views.v_tpop_anzkontrinklletzterundletztertpopber.`Kontrolle zuletzt geaendert von`, apflora_views.v_tpop_anzkontrinklletzterundletztertpopber.AnzTPopBer, apflora_views.v_tpop_anzkontrinklletzterundletztertpopber.TPopBerId, apflora_views.v_tpop_anzkontrinklletzterundletztertpopber.`TPopBer Jahr`, apflora_views.v_tpop_anzkontrinklletzterundletztertpopber.`TPopBer Entwicklung`, apflora_views.v_tpop_anzkontrinklletzterundletztertpopber.`TPopBer Bemerkungen`, apflora_views.v_tpop_anzkontrinklletzterundletztertpopber.`TPopBer  MutWann`, apflora_views.v_tpop_anzkontrinklletzterundletztertpopber.`TPopBer MutWer`, GROUP_CONCAT(apflora.tpopkontrzaehl.Anzahl SEPARATOR ', ') AS Anzahlen, GROUP_CONCAT(apflora.tpopkontrzaehl_einheit_werte.ZaehleinheitTxt SEPARATOR ', ') AS Zaehleinheiten, GROUP_CONCAT(apflora.tpopkontrzaehl_methode_werte.BeurteilTxt SEPARATOR ', ') AS Methoden
FROM ((apflora_views.v_tpop_anzkontrinklletzterundletztertpopber LEFT JOIN apflora.tpopkontrzaehl ON apflora_views.v_tpop_anzkontrinklletzterundletztertpopber.TPopKontrId = apflora.tpopkontrzaehl.TPopKontrId) LEFT JOIN apflora.tpopkontrzaehl_einheit_werte ON apflora.tpopkontrzaehl.Zaehleinheit = apflora.tpopkontrzaehl_einheit_werte.ZaehleinheitCode) LEFT JOIN apflora.tpopkontrzaehl_methode_werte ON apflora.tpopkontrzaehl.Methode = apflora.tpopkontrzaehl_methode_werte.BeurteilCode
GROUP BY apflora_views.v_tpop_anzkontrinklletzterundletztertpopber.TPopKontrId