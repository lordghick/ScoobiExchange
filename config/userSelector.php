<?php

include_once 'user.repository.php';
include_once 'connection.inc.php';
include_once 'user.inc.php';
include_once 'redireccion.inc.php';

Conexion :: abrirConexion();

session_start();

if(!isset($_SESSION['captcha'])){
$_SESSION['newUsername'] = $_POST['username'];
$_SESSION['captcha'] = RepositorioUsuario :: selectUsername(Conexion :: obtenerConexion(), $_SESSION['newUsername']);
}


if(isset($_POST['auth'])){
    if($_SESSION['captcha'] == $_POST['auth']){
        $newUser = new User($_SESSION['newUsername'], $_SESSION['address']);
        if(RepositorioUsuario :: insertarUsuarios(Conexion :: obtenerConexion(), $newUser)){
            Redireccion :: redirigir('../dist/index.php');
        };
    }else{
        include_once '../templates/wrongAuth.php';
    }
}else{
    include_once '../templates/waitingAuth.php';
}

?>