<?php
// Verbindung aufbauen, Datenbank auswählen

$link = new mysqli("barbalex.ch", "alexande", "excalibu", "alexande_apflora");

/* check connection */
if ($link->connect_errno) {
    printf("Connect failed: %s\n", $link->connect_error);
    exit();
}

mysqli_set_charset($link, "utf8");

$id = $_GET["id"];
settype($id, "integer");

$Querystring = "DELETE FROM tblPopBericht WHERE PopBerId = ".$id;

// SQL-Anfrage ausführen
$result = mysqli_query($link, $Querystring);

if (!$result) {
	print "Fehler: Der Populations-Bericht wurde nicht gelöscht";
}

// Verbindung schliessen
mysqli_close($link);
?>