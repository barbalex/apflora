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
$Feld = $_GET["Feld"];
$Wert = $_GET["Wert"];
$user = $_GET["user"];
$time = date('Y-m-d H:i:s');

if ($Wert || $Wert == 0) {
	$Querystring = 'UPDATE tblPopBericht SET '.$Feld.'="'.$Wert.'", MutWann="'.$time.'", MutWer="'.$user.'" WHERE PopBerId = '.$id;
} else {
	//Null speichern, sonst werden aus Nullwerten in Zahlenfeldern 0 gemacht
	$Querystring = 'UPDATE tblPopBericht SET '.$Feld.'=null, MutWann="'.$time.'", MutWer="'.$user.'" WHERE PopBerId = '.$id;
}


// SQL-Anfrage ausführen
$result = mysqli_query($link, $Querystring);

if (!$result) {
	print "Fehler: Wert ".$Wert." konnte nicht im Feld ".$Feld." gespeichert werden";
}

// Verbindung schliessen
mysqli_close($link);
?>