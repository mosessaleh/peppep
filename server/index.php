<?php
    if (isset($_GET['get'])) {
        include 'methods/get.php';
    }else if (isset($_POST['post'])) {
        include 'methods/post.php';
    }
?>