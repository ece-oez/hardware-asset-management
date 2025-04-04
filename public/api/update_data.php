<?php

header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

if($_SERVER['REQUEST_METHOD'] !== 'POST'){
    http_response_code(403);
    exit();
}

// Hole übergebene Daten und parse sie

$data = file_get_contents('php://input');  // Json string (obj = daten)
$parsed = json_decode($data, true);

// DB-Verbindung

$pdo = new PDO("mysql:host=earth.stb-walhoefer.de:443;dbname=WALH_ITSOT4eceoez", "eceoez", "Pwd456789!");


$statement = $pdo->prepare('UPDATE hardware SET name=?, modellnummer=?, seriennummer=?, erfassungsdatum=?, hersteller=?, kategorie=?, ort=?, verbaut=? WHERE id = ?');
    
    $statement->bindParam(1, $parsed['name'], PDO::PARAM_STR_CHAR);
    $statement->bindParam(2, $parsed['modellnummer'], PDO::PARAM_STR_CHAR);
    $statement->bindParam(3, $parsed['seriennummer'], PDO::PARAM_STR_CHAR);
    $statement->bindParam(4, $parsed['erfassungsdatum'], PDO::PARAM_STR_CHAR);
    $statement->bindParam(5, $parsed['hersteller'], PDO::PARAM_STR_CHAR);
    $statement->bindParam(6, $parsed['kategorie'], PDO::PARAM_STR_CHAR);
    $statement->bindParam(7, $parsed['ort'], PDO::PARAM_STR_CHAR);
    $statement->bindParam(8, $parsed['verbaut'], PDO::PARAM_STR_CHAR);
    $statement->bindParam(9, $parsed['id'], PDO::PARAM_INT);


    $statement->execute();

    if($statement){
        $data = [
            'errormessage' => "Alles gut, Daten wurden ueberarbeitet!"
        ];
    }else{
        $data = [
            'errormessage' => "Unbekannter Fehler beim Speichern aufgetreten!"
        ];
    }

    echo json_encode($data);

$pdo = null;


if($statement){
    $data = [
        'errormessage' => "Hardware wurde erfolgreich ueberarbeitet!"
    ];
}else{
    $data = [
        'errormessage' => "Unbekannter Fehler beim Ueberarbeiten aufgetreten!"
    ];
}

echo json_encode($data);

$pdo = null;
?>