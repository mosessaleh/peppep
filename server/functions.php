<?php
class App {
    public function __construct() {
        include('dbConn.php');
        try {
            $this->dbConn = new PDO("mysql:host=$host;dbname=$dbName",$dbUser,$dbPass, array(
                PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8",
                PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
                PDO::ATTR_PERSISTENT => true
            ));
        
        } catch (\Throwable $e) {
            die("ERROR: ".$e->getMessage());
        }
    }
    // VL 
    function getAllVl() {
        $sql = $this->dbConn->prepare('SELECT * FROM `vl` WHERE `slettet` = 0');
        $sql->execute();
        $result = $sql->fetchAll();
        return $result;
    }
    function getKunActive() {
        $sql = $this->dbConn->prepare('SELECT * FROM `vl` WHERE `activation` = 1 AND `slettet` = 0');
        $sql->execute();
        $result = $sql->fetchAll();
        return $result;
    }
    function getKunDective() {
        $sql = $this->dbConn->prepare('SELECT * FROM `vl` WHERE `activation` = 0 AND `slettet` = 0');
        $sql->execute();
        $result = $sql->fetchAll();
        return $result;
    }

    // CARS
    function getCars() {
        $sql = $this->dbConn->prepare('SELECT * FROM `cars` WHERE `slet` = 0');
        $sql->execute();
        $result = $sql->fetchAll();
        return $result;
    }
}
$app = new App;
?>