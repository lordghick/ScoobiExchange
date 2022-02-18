<?php

//simple redirect, would work better with predefined variables
class Redireccion {
    public static function redirigir($direccion){
        header('Location: '.$direccion);
        die();
    }
}