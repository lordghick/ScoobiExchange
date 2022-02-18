<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="../config/userSelector.php" method="POST">
        <label for="Auth">We've sent you a captcha to your ingame character, check your chat!</label>
        <input type="text" name="auth" placeholder="Wrong Captcha, try again!">
        <label for="username">Inserted username:</label>
        <input type="text" name="username" value="<?php echo $_SESSION['newUsername'] ?>" readonly>
        <button type="submit">Submit</button>
    </form>
</body>
</html>
