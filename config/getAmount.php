<?php

include_once 'connection.inc.php';

Conexion :: abrirConexion();

$conexion = Conexion :: obtenerConexion();

$usuario = "";
$amount = 0;

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
        echo $ex;
        // echo "An error occured while retreiving the information";
    }
}

if ($usuario == "") {
    echo "No matching wallet, are you in the right account?";
} else {
    try{
        $sql = "SELECT * FROM xconomy WHERE player = :player";
        $sentencia = $conexion->prepare($sql);
        $sentencia->bindParam(':player', $usuario, PDO::PARAM_STR);
        $sentencia->execute();
        $resultado = $sentencia->fetch();
        if ($resultado) {
            $amount = $resultado['balance'];
        }
    }catch (PDOException $ex){
        echo $ex;
        // echo "An error occured while retreiving the information";
    }
}

if($amount == 0){
    echo "No balance to withdraw";
}else{
    echo intval($amount);
}

Conexion :: cerrarConexion();