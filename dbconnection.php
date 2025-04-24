<?php
/**
 * Name: Caleb Wallis
 * Student ID: 1637640
 * 
 * Database connection script for the event management system.
 * Establishes a PDO connection to the MySQL database.
 */

	//replace username with your username e.g. xyz12  in both places
	// and password with your password
   /*
   try{
   	
   	$con = new PDO('mysql:host=learn-mysql.cms.waikato.ac.nz;dbname=username','username','password');
   	} catch (PDOException $e) {
   		echo "Database connection error " . $e->getMessage();
   	}
		*/

	try{
		 // Database connection details
		 $dsn = 'mysql:host=localhost;dbname=compx322;';
		 $username = 'root'; // Default username for XAMPP
		 $password = ''; // Default password is empty in XAMPP

		$con = new PDO($dsn, $username, $password);
		
	} catch (PDOException $e) {
		echo "Database connection error " . $e->getMessage();
	}

?>