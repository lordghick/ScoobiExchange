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
    <link rel="stylesheet" href="../styles/waitAuth.css" />
</head>
<body>
    <div class="waiting__container contenedor">
        <form action="../config/userSelector.php" method="POST"class="form">
            <label class="parrafo" for="Auth">We've sent you a captcha to your ingame character, check your chat!</label>
            <input type="text" name="auth" placeholder="Waiting for code">
            <label for="username">Inserted username:</label>
            <input type="text" name="username" value="<?php echo $_SESSION['newUsername'] ?>" readonly>
            <button type="submit" class="btn submit-btn">Submit</button>
        </form>
    </div>
</body>
</html>