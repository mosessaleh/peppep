<?php
    include 'functions.php';
    if ($_POST['post'] == 'editVl') {
        $id = $_POST['id'];
        echo json_encode(array('status' => true));
    }
?>