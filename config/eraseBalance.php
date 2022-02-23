<?php

include_once 'connection.inc.php';

Conexion::abrirConexion();

$conexion = Conexion::obtenerConexion();

$usuario = "";

//this function should be a class for optimization
if (isset($conexion)) {
    try {
        $sql = "SELECT * FROM users WHERE wallet = :wallet";
        $sentencia = $conexion->prepare($sql);
        $sentencia->bindParam(':wallet', $_POST['wallet'], PDO::PARAM_STR);
        $sentencia->execute();
        $resultado = $sentencia->fetch();
        if ($resultado) {
            $usuario = $resultado['user'];
        }
    } catch (PDOException $ex) {
        echo "An error occured while retreiving the information";
    }
}

try {
    $sql = "UPDATE xconomy set balance=0 WHERE player = :player";
    $sentencia = $conexion->prepare($sql);
    $sentencia->bindParam(':player', $usuario, PDO::PARAM_STR);
    $result = $sentencia->execute();
    if ($result) {
        echo "Withdraw completed!";
    }else{
        echo "Something went wrong :(";
    }
} catch (PDOException $ex) {
    echo "An error occured while retreiving the information";
}

Conexion :: cerrarConexion();