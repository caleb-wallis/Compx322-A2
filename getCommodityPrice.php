<?php
/**
 * Name: Caleb Wallis
 * Student ID: 1637640
 * 
 * Fetches commodity price details using Alpha Vantage API and returns them as JSON
 */

$jsonData = file_get_contents("php://input");

$data = json_decode($jsonData, true);

if ($data === null) {
    echo "Invalid JSON data";
    exit;
}

$code = $data['code'];

$json = file_get_contents("https://www.alphavantage.co/query?function=$code&interval=monthly&apikey=E5EY2MM5EYM3GCZ8");

echo $json;

?>