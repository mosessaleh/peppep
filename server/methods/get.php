<?php
    include 'functions.php';

    // GET VOGNELOOP
    if (isset($_GET['getAllVl'])) {
        $result = $app->getAllVl();
        echo json_encode(array('vl'=> $result));
    }
    if (isset($_GET['getKunActive'])) {
        $result = $app->getKunActive();
        echo json_encode(array('vl'=> $result));
    }
    if (isset($_GET['getKunDective'])) {
        $result = $app->getKunDective();
        echo json_encode(array('vl'=> $result));
    }

    // CARS
    if (isset($_GET['cars'])) {
        $cars = $app->getCars();
        echo json_encode(array('cars'=>$cars));
    }
?>