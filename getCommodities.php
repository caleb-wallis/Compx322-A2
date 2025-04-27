<?php
/**
 * Name: Caleb Wallis
 * Student ID: 1637640
 * 
 * Gets all commodities from database, puts them into an array of object literals, and returns that as JSON
 */

require_once('dbconnection.php'); 

$query = "select * from `commodities`";

$result = $con->query($query);

$products = array();
while($row = $result->fetch()) {
    $products[] = $row;
}

echo json_encode($products);
?>
