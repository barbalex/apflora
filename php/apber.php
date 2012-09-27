<?php
// Verbindung aufbauen, Datenbank auswählen
$link = new mysqli("barbalex.ch", "alexande", "excalibu", "alexande_apflora");
//$link = new mysqli("127.0.0.1", "root", "admin", "apflora");

/* check connection */
if ($link->connect_errno) {
    printf("Connect failed: %s\n", $link->connect_error);
    exit();
}

mysqli_set_charset($link, "utf8");

$ApBerId = $_GET["id"];
settype($ApBerId, "integer");

// SQL-Anfrage ausführen
$result = mysqli_query($link, "SELECT * FROM tblApJBer WHERE ApBerId=".$ApBerId);

$row = mysqli_fetch_assoc($result);
$ApBerDatum = $row["ApBerDatum"];
//leerwerte nicht antasten - werden sonst zu 1.1.1970
if ($ApBerDatum) {
	$row["ApBerDatum"] = date("d.m.Y", strtotime($ApBerDatum));
}

//in json verwandeln
$return = json_encode($row);

print($return);

// Resultset freigeben
mysqli_free_result($result);

// Verbindung schliessen
mysqli_close($link);
?>