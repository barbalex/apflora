<?php
// Verbindung aufbauen, Datenbank auswählen

$link = new mysqli("barbalex.ch", "alexande", "excalibu", "alexande_apflora");

/* check connection */
if ($link->connect_errno) {
    printf("Connect failed: %s\n", $link->connect_error);
    exit();
}

mysqli_set_charset($link, "utf8");

// SQL-Anfrage ausführen
$result = mysqli_query($link, "SELECT ZaehleinheitCode, ZaehleinheitTxt FROM DomainTPopKontrZaehleinheit ORDER BY ZaehleinheitOrd");

//benötigte Datenstruktur aufbauen
$rows = array();
while($r = mysqli_fetch_assoc($result)) {
	$ZaehleinheitCode = $r['ZaehleinheitCode'];
	settype($ZaehleinheitCode, "integer");
	$row = array("ZaehleinheitTxt" => $r['ZaehleinheitTxt'], "id" => $ZaehleinheitCode);
    $rows[] = $row;
}

//in json verwandeln
$rows = json_encode($rows);
$Object = "{\"rows\": $rows}";

print($Object);

// Resultset freigeben
mysqli_free_result($result);

// Verbindung schliessen
mysqli_close($link);
?>