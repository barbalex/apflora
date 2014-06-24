<?php
// Verbindung aufbauen, Datenbank auswählen
// wird offenbar momentan nicht verwendet
$MysqlUser = getenv('MYSQL_USER');
$MysqlPasswort = getenv('MYSQL_PASSWORD');
$link = new mysqli("localhost", $MysqlUser, $MysqlPasswort, "alexande_apflora");

/* check connection */
if ($link->connect_errno) {
	printf("Connect failed: %s\n", $link->connect_error);
	exit();
}

mysqli_set_charset($link, "utf8");

// in diesem Array sammeln wir alle upzudatenden Felder
$Felderarray = $_POST;

// MutWann ergänzen
$time = date('Y-m-d H:i:s');

// Array in zwei kommagetrennte String-Listen verwandeln
$Feldliste = implode(",", array_keys($Felderarray));
$Wertliste = "'".implode("','", array_values($Felderarray))."'";

$Querystring = 'INSERT INTO tblPopulation ('.$Feldliste.',MutWann) VALUES ('.$Wertliste.',"'.mysqli_real_escape_string($link, $time).'")';

// SQL-Anfrage ausführen
$result = mysqli_query($link, $Querystring);

// neue id mitteilen
print mysqli_insert_id($link);


// Verbindung schliessen
mysqli_close($link);
?>