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
    <link rel="stylesheet" href="../styles/usernameCreator.css" />
</head>
<body>
    <div class="contenedor contenedor__usernameCreator">
        <div class="contenedor__formularios">
            <form class="form" method="POST" action="../config/userSelector.php">

                <div class="parrafo_form">
                <p class="parrafo">This username must match your ingame username or you wont be able to deposit or withdraw!
                </p>
                </div>
    
                <input type="text" name="username">Your ingame username
                <button type="submit" name="usernameCreator" class="btn submit-btn">Submit!</button>
            </form>
            <form class="form" method="POST" action="../config/logout.php">
                <button type="submit" name="usernameCreator" class="btn logOut-btn">logOut</button>
            </form>
        </div>
    </div>
</body>
</html>