<?php
// Verbindung aufbauen, Datenbank auswählen
$MysqlUser = getenv('MYSQL_USER');
$MysqlPasswort = getenv('MYSQL_PASSWORD');
$link = new mysqli("localhost", $MysqlUser, $MysqlPasswort, "alexande_apflora");

/* check connection */
if ($link->connect_errno) {
    printf("Connect failed: %s\n", $link->connect_error);
    exit();
}

mysqli_set_charset($link, "utf8");

$id = $_POST["id"];
settype($id, "integer");
$Feld = $_POST["Feld"];
$Wert = $_POST["Wert"];
$user = $_POST["user"];
$time = date('Y-m-d H:i:s');

// zeit muss umgewandelt werden!
if ($Feld == "TPopKontrDatum") {
	if ($Wert || $Wert == 0) {
		$Wert = date("Y-m-d H:i:s", strtotime($Wert));
	} else {
		$Wert = NULL;
	}
}

/*if ($Wert || $Wert == 0) {
	$Querystring = 'UPDATE tblTeilPopFeldkontrolle SET '.mysqli_real_escape_string($link, $Feld).'="'.mysqli_real_escape_string($link, $Wert).'", MutWann="'.mysqli_real_escape_string($link, $time).'", MutWer="'.mysqli_real_escape_string($link, $user).'" WHERE TPopKontrId = '.mysqli_real_escape_string($link, $id);
} else {
	// Null speichern, sonst werden aus Nullwerten in Zahlenfeldern 0 gemacht
	//$Querystring = 'UPDATE tblTeilPopFeldkontrolle SET '.mysqli_real_escape_string($link, $Feld).'= NULL, MutWann="'.mysqli_real_escape_string($link, $time).'", MutWer="'.mysqli_real_escape_string($link, $user).'" WHERE TPopKontrId = '.mysqli_real_escape_string($link, $id);
	$Querystring = 'UPDATE tblTeilPopFeldkontrolle SET '.mysqli_real_escape_string($link, $Feld).'=9999, MutWann="'.mysqli_real_escape_string($link, $time).'", MutWer="'.mysqli_real_escape_string($link, $user).'" WHERE TPopKontrId = '.mysqli_real_escape_string($link, $id);
}*/

if ($Wert == NULL) {
	// Null speichern, sonst werden aus Nullwerten in Zahlenfeldern 0 gemacht
	$Querystring = 'UPDATE tblTeilPopFeldkontrolle SET '.mysqli_real_escape_string($link, $Feld).'= NULL, MutWann="'.mysqli_real_escape_string($link, $time).'", MutWer="'.mysqli_real_escape_string($link, $user).'" WHERE TPopKontrId = '.mysqli_real_escape_string($link, $id);
} else {
	$Querystring = 'UPDATE tblTeilPopFeldkontrolle SET '.mysqli_real_escape_string($link, $Feld).'="'.mysqli_real_escape_string($link, $Wert).'", MutWann="'.mysqli_real_escape_string($link, $time).'", MutWer="'.mysqli_real_escape_string($link, $user).'" WHERE TPopKontrId = '.mysqli_real_escape_string($link, $id);
}

// SQL-Anfrage ausführen
$result = mysqli_query($link, $Querystring);

if (!$result) {
	print "Fehler: Wert ".mysqli_real_escape_string($link, $Wert)." konnte nicht im Feld ".mysqli_real_escape_string($link, $Feld)." gespeichert werden";
}

// Verbindung schliessen
mysqli_close($link);
?>