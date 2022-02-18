<?php

//a simple session handler
class ControlSesion{

    public static function IniciarSesion($address){
        if(session_id() == ''){
            session_start();
        }

        $_SESSION['address'] = $address;
    }

        public static function cerrarSesion(){
            if(session_id() == ''){
                session_start();
            }
            if(isset($_SESSION['address'])){
                unset($_SESSION['address']);
            }

            session_destroy();
        }

        public static function sesionIniciada(){
            if(session_id() == ''){
                session_start();
            }

            if(isset($_SESSION['address'])){
                return true;
            }else{
                return false;
            }
        }
    }