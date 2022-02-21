<?php

include_once 'Rcon.php';
include_once 'config.php';
include_once '../config/redireccion.inc.php';

//Send commands to console through post
use Thedudeguy\Rcon;

$rcon = new Rcon($host, $port, $password, $timeout);

echo $_POST['command'];
if ($rcon->connect())
{
  $rcon->sendCommand($_POST['command']);
  $rcon->disconnect();
  echo "Scoobies received!";
}else{
  echo "snap";
}

