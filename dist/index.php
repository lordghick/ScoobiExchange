<?php
include_once '../config/controlSesion.inc.php';
include_once '../config/redireccion.inc.php';
include_once '../config/user.repository.php';
include_once '../config/user.inc.php';
include_once '../config/connection.inc.php';
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exchange</title>
</head>

<?php
    if(ControlSesion::sesionIniciada()){
        Conexion :: abrirConexion();
        $usernameValue = RepositorioUsuario::usernameExists(Conexion ::obtenerConexion(), $_SESSION['address']);
        if($usernameValue){
            $_SESSION['username'] = $usernameValue;
            Conexion ::cerrarConexion();
            include_once '../templates/exchange.php';
        }else{
            include_once '../templates/usernameCreator.php';
        }
    }else{
        include_once '../templates/loginWithMetamask.php';
    }

?>

</html>