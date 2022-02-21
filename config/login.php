<?php

include_once 'controlSesion.inc.php';
include_once 'redireccion.inc.php';

ControlSesion :: IniciarSesion($_POST['address']);
Redireccion :: redirigir('../dist/index.php');