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


// SQL-Anfrage ausführen
$result = mysqli_query($link, "SELECT * FROM tblAktionsplan WHERE ApArtId = $ApArtId");

//$output = mysqldump --user="alexande" --password="excalibu" --databases "alexande_apflora" > apflora.sql;

// set the headers
$size_in_bytes = strlen($result);
header("Content-type: application/text");
header("Content-disposition:  attachment; filename=apflora.sql; size=$size_in_bytes");

print($result);

?>