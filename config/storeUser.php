<?php
include_once 'user.inc.php';
include_once 'connection.inc.php';
include_once 'user.repository.php';
include_once 'redireccion.inc.php';
session_start();
Conexion :: abrirConexion();

if(isset($_POST['usernameCreator'])){
    $usuario = new User($_POST['username'], $_SESSION['address']);
    $usuarioInsertado = RepositorioUsuario :: insertarUsuarios(Conexion :: obtenerConexion(), $usuario);
    // Conexion :: cerrarConexion();
    // Redireccion :: redirigir('../done.html');
}else{
    // Conexion :: cerrarConexion();
    // Redireccion :: redirigir('../dont.html');
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
    echo $usuarioInsertado;
?>
</body>
</html>