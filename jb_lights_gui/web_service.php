<?php

$command = filter_input(INPUT_GET, "command");

if (!isset($command)) {
    die();
}

$result = new stdClass();
$result->data = "";

switch($command){
    case "SET_COLOR":
        $color = filter_input(INPUT_GET, "color");
        $result->data = ("COLOR SHOULD BE: $color");
        break;
    case "TURN_ON":
        $result->data = ("SHOULD TURN ON");
        //$result = shell_exec("./turn_on.sh");
        break;
    case "TURN_OFF":
        $result->data = ("SHOULD TURN OFF");
        //$result = shell_exec("./turn_off.sh");
        break;
}

header('Content-Type: application/json; charset=utf-8');
echo json_encode($result);