<?php

$jsonData = file_get_contents("php://input");

$data = json_decode($jsonData, true);

if ($data === null) {
    echo "Invalid JSON data";
    exit;
}

$code = $data['code'];

// replace the "demo" apikey below with your own key from https://www.alphavantage.co/support/#api-key
$json = file_get_contents("https://www.alphavantage.co/query?function=$code&interval=monthly&apikey=E5EY2MM5EYM3GCZ8");

//echo json_encode($json);
echo $json;

?>