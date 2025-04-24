<?php
/**
 * Name: Caleb Wallis
 * Student ID: 1637640
 * 
 * This script retrieves a list of all events with their IDs and names.
 * Used to populate the initial event listing.
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
