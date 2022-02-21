<?php
include_once 'redireccion.inc.php';

if(isset($_POST['resend'])){
    unset($_SESSION['captcha']);
    unset($_POST['resend']);
    Redireccion :: redirigir('../config/userSelector.php');
}