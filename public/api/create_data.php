<?php

header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(403);
    exit();
}

$data = file_get_contents('php://input');  // Json string (obj = daten)
$parsed = json_decode($data, true);

$pdo = new PDO("mysql:host=earth.stb-walhoefer.de:443;dbname=WALH_ITSOT4eceoez", "eceoez", "Pwd456789!");

// prüfen ob schon Eintrag gemacht wurde

// $sql = "SELECT count(*) FROM `filme` WHERE Titel = :titel"; // SQL statement 
// $statement = $pdo->prepare($sql);  // Datenbank verbindung (siehe oben)
// $statement->bindParam(':titel', $parsed['titel']);
// $statement->execute(); 
// $number_of_rows = $statement->fetchColumn(); // number of rows

// if($number_of_rows > 0){
//     http_response_code(400);
//     $data = [
//         'errormessage' => 'Film wurde schon angelegt!'
//     ];
//     echo json_encode($data);
//     die();
// }

// prüfen auf leere eingaben

// $errorMessage = '';

//     if($errorMessage === '' && (isset($parsed['titel']) === false|| $parsed['titel'] === '')){
//         $errorMessage = 'Der Filmtitel fehlt';
//     }
    
//     if($errorMessage === '' && (isset($parsed['altersfreigabe']) === false || $parsed['altersfreigabe'] === '')){
//         $errorMessage = 'Die Altersfreigabe fehlt';
//     }
    
//     if($errorMessage === '' && (isset($parsed['erscheinungsjahr']) === false || $parsed['erscheinungsjahr'] === '')){
//         $errorMessage = 'Das Erscheinungsjahr fehlt';
//     }
    
//     if($errorMessage === '' && (isset($parsed['genres'][0]) === false || $parsed['genres'][0] === '')){
//         $errorMessage = 'Das Genre1 fehlt';
//     } 
    
//     if($errorMessage === '' && (isset($parsed['genres'][1]) === false || $parsed['genres'][1] === '')){
//         $errorMessage = 'Das Genre2 fehlt';
//     }
    
//     if($errorMessage === '' && (isset($parsed['genres'][2]) === false || $parsed['genres'][2] === '')){
//         $errorMessage = 'Das Genre3 fehlt';
//     }
    
//     if($errorMessage === '' && (isset($parsed['filmlaenge']) === false || $parsed['filmlaenge'] === '')){
//         $errorMessage = 'Die Filmlaenge fehlt';
//     }
    
//     if($errorMessage === '' && (isset($parsed['file']) === false || $parsed['file'] === '')){
//         $errorMessage = 'Das File fehlt';
//     }
    
//     if($errorMessage !== ''){
//         http_response_code(400);
//         $data = [
//             'errormessage' => $errorMessage
//         ];
//         echo json_encode($data);
//         die();
//     }


$statement = $pdo->prepare('INSERT INTO test (Name,ModellNr,SerienNr) VALUES (?,?,?)');
    
    $statement->bindParam(1, $parsed['name'], PDO::PARAM_STR_CHAR);
    $statement->bindParam(2, $parsed['modellnr'], PDO::PARAM_STR_CHAR);
    $statement->bindParam(3, $parsed['seriennr'], PDO::PARAM_STR_CHAR); 
    
    $statement->execute();

    if($statement){
        $data = [
            'errormessage' => "Alles gut, Daten wurden gespeichert!"
        ];
    }else{
        $data = [
            'errormessage' => "Unbekannter Fehler beim Speichern aufgetreten!"
        ];
    }

    echo json_encode($data);

$pdo = null;

?>