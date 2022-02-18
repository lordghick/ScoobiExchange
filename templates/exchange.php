<?php
include_once '../rcon/Rcon.php';
include_once '../rcon/config.php';

use Thedudeguy\Rcon;
$rcon = new Rcon($host, $port, $password, $timeout);


//This checks if the connection with the hub is possible, as it may be buggy to lose it during
//a transaction

if($rcon->connect()){
    $rcon->disconnect();
    include_once 'paymentforms.php';
}else{
    include_once 'error.html';
}
?>

