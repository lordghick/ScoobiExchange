<?php

class Conexion {
    private static $conexion;
    
    //This connects to the hub database
    public static function abrirConexion() {
        if (!isset(self::$conexion)){
            try {
                self::$conexion = new PDO("mysql:host=209.222.98.118:3306; dbname=s48354_Xeconomy", 'u48354_0D4bob7E9K', 'OB2^@EJwtBMts1BHD^9xwDaF'); //config for connection
                self::$conexion -> setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
                self::$conexion -> exec('SET CHARACTER SET utf8');
            } catch (PDOException $ex) {
                print "ERROR: " . $ex -> getMessage() . "<br>";
                die();
            }

        }
    }

    //always recommended to close connection right after use
    public static function cerrarConexion(){
        if (isset(self::$conexion)) {
            self::$conexion = null;
        }
    }

    //after a connection is open, you can read it from here 
    public static function obtenerConexion(){
        return self::$conexion;
    }
}