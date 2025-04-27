<?php
/**
 * Name: Caleb Wallis
 * Student ID: 1637640
 * 
 * Database connection script for the event management system.
 * Establishes a PDO connection to the MySQL database.
 */

try{
	$con = new PDO('mysql:host=learn-mysql.cms.waikato.ac.nz;dbname=cw500','cw500','my443320sql');
} catch (PDOException $e) {
	echo "Database connection error ". $e->getMessage();
}
?>