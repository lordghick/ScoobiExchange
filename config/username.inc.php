<?php

function usernameExists($conexion, $address){
        $usuario = "";
            if(isset($conexion)){
                try{
                    $sql = "SELECT * FROM user WHERE address = :address";
                    $sentencia = $conexion -> prepare($sql);
                    $sentencia -> bindParam(':address', $address, PDO::PARAM_STR);
                    $sentencia -> execute();
                    $resultado = $sentencia -> fetch();
                    if($resultado){
                        $usuario = $resultado['username'];
                    }
                }catch (PDOException $ex){
                    echo $ex;
                }
            }
        return $usuario;
    }

