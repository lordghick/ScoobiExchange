<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;700;900&family=Roboto:wght@400;700;900&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="../styles/normalize.css" />
    <link rel="stylesheet" href="../styles/login.css" />
</head>
<body>
    <div class="login__container contenedor">
        <form class="form" action="../config/login.php" method="POST" id="loginForm">
                <img src="../styles/img/200w.gif" alt="" class="loginPic">
                <input type="text" name="address" id="addressInput" style="display: none;">
                <button id="connect" type="button" class="btn btn-login">login with metamask</button>
        </form>
    </div>
    <script src="../src/login.js"></script>
</body>
</html>