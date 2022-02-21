<?php

include_once 'redireccion.inc.php';
include_once '../rcon/config.php';
include_once '../rcon/Rcon.php';

use Thedudeguy\Rcon;

class RepositorioUsuario{
    
    //just a simple counter, may be usefull later
    public static function obtenerNumeroUsuarios($conexion){
        //User counter, may be usefull
        $conteo = null;
        
        if(isset($conexion)){
            
            try
            {
                $sql = 'SELECT COUNT(*) as total FROM usuarios';
                $sentencia = $conexion -> prepare($sql);
                $sentencia -> execute();
                $resultado = $sentencia -> fetch();
                $conteo = $resultado['total'];
            }catch (PDOException $ex)
            {
                print "ERROR" .  $ex -> getMessage();
            }
        }
        return $conteo;
    }

    public static function insertarUsuarios($conexion, $usuario){
        $usuarioInsertado = false;
        if(isset($conexion)){
            try{
                $sql = "INSERT INTO users(user, wallet) VALUES(:user, :wallet)";

                $username = $usuario -> getUsername();
                $address = $usuario -> getAddress();

                $sentencia = $conexion -> prepare($sql);
                $sentencia -> bindParam(':user', $username, PDO::PARAM_STR);
                $sentencia -> bindParam(':wallet', $address, PDO::PARAM_STR);

                $usuarioInsertado = $sentencia -> execute();


            }catch (PDOException $ex){
                print "ERROR: " . $ex -> getMessage(); 
            }

        }

        return $usuarioInsertado;
    }

    //this function calls the "usernameCreator" if the name exists but it doesn't has any wallet
    //registered, however, it has to reject the call if there is no username like that in the db
    //(not yet implemented)

    public static function usernameExists($conexion, $address){
        $usuario = "";
        echo $usuario;
            if(isset($conexion)){
                try{
                    $sql = "SELECT * FROM users WHERE wallet = :wallet";
                    $sentencia = $conexion -> prepare($sql);
                    $sentencia -> bindParam(':wallet', $address, PDO::PARAM_STR);
                    $sentencia -> execute();
                    $resultado = $sentencia -> fetch();
                    if($resultado){
                        $usuario = $resultado['user'];
                    }
                }catch (PDOException $ex){
                    echo $ex;
                }
            }

            if($usuario == ""){
                return false;
            }else{
                return $usuario;
            }
    }

    public static function selectUsername($conexion, $username){
            if(isset($conexion)){
                try{
                    $sql = "SELECT * FROM xconomy WHERE player = :username";
                    $sentencia = $conexion -> prepare($sql);
                    $sentencia -> bindParam(':username', $username, PDO::PARAM_STR);
                    $sentencia -> execute();
                    $resultado = $sentencia -> fetch();
                    if($resultado){
                        $usuario = $resultado['player'];
                    }
                }catch (PDOException $ex){
                    echo $ex;
                }
            }
            if($usuario){

            $rcon = new Rcon('162.55.95.22', 25652, 'Scoobi2020!', 10);

                if ($rcon->connect()){

                    $secretPass = rand(100000, 999999);

                    {
                        $rcon->sendCommand('msg ' . $usuario . ' ' . $secretPass);
                    }
                
                
                return $secretPass;
                }
            }
    }


}