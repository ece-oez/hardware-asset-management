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

// Auto increment neu setzen

$arrLength = count($arr);

$sql = "UPDATE hardware SET id=:id WHERE seriennummer=:seriennummer";

// $sql = "UPDATE hardware SET id = :id WHERE name = :name";

$statement = $pdo->prepare($sql);

$i = 0;

foreach($arr as $value){
    $i++;
    $statement->bindParam('id', $i, PDO::PARAM_INT);
    $statement->bindParam('seriennummer', $value['seriennummer'], PDO::PARAM_STR_CHAR);
    $statement->execute();
}
unset($value);

$increment = $pdo->lastInsertId();

$sql = "ALTER TABLE hardware AUTO_INCREMENT=:incrementId";

$statement = $pdo->prepare($sql);

$statement->bindParam(':incrementId', $increment, PDO::PARAM_INT);

$statement->execute();

echo json_encode($arr);

$pdo = null;

?>