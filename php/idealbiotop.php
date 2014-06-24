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

$id = $_GET["id"];
settype($id, "integer");

// SQL-Anfrage ausführen
$result = mysqli_query($link, "SELECT * FROM tblIdealbiotop WHERE IbApArtId=".mysqli_real_escape_string($link, $id));

$row = mysqli_fetch_assoc($result);
$IbErstelldatum = $row["IbErstelldatum"];
// leerwerte nicht antasten - werden sonst zu 1.1.1970
if ($IbErstelldatum) {
	$row["IbErstelldatum"] = date("d.m.Y", strtotime($IbErstelldatum));
}

$return = json_encode($row);

print($return);

// Resultset freigeben
mysqli_free_result($result);

// Verbindung schliessen
mysqli_close($link);
?>