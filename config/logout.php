<?php

include_once 'controlSesion.inc.php';
include_once 'redireccion.inc.php';

echo "<script>console.log('aqui tamo');</script>";
ControlSesion :: cerrarSesion();
Redireccion :: redirigir('../dist/index.php');