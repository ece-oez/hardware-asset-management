<?php

header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(403);
    exit();
}

$pdo = new PDO("mysql:host=earth.stb-walhoefer.de:443;dbname=WALH_ITSOT4eceoez", "eceoez", "Pwd456789!");

$statement = $pdo->prepare('SELECT * FROM hardware');

$status = $statement->execute();

$arr=[];

while ($row = $statement->fetch(PDO::FETCH_NAMED)) {
    array_push($arr, $row);
}

echo json_encode($arr);

$pdo = null;

?>