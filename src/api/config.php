<?php
header('Access-Control-Allow-Origin: http://localhost:3000');
// header('Access-Control-Allow-Origin: http://127.0.0.1');

// header('Access-Control-Allow-Origin: http://www.hakvik.se');
// header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
header('Content-Type: application/x-www-form-urlencoded');
// header('Content-Type: application/json');

$db = mysqli_connect('localhost', 'root', '', 'truckcontact');
mysqli_query($db, "SET NAMES utf8");

// $db = mysqli_connect('hakvik.se.mysql', 'hakvik_se_form', 'Augusti144Form', 'hakvik_se_form');
// mysqli_query($db, "SET NAMES utf8");
