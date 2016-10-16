<?php
// start PHP

//https://api.forecast.io/forecast/API/LAT,LONG

$response = file_get_contents("https://api.forecast.io/forecast/c65b6a20d09844404dee0e759437fc3d/44.9571831,-93.2745275");
// $response = file_get_contents('https://api.forecast.io/forecast/c65b6a20d09844404dee0e759437fc3d/'.$_POST["location"]);

echo $response;

// END PHP

?>
