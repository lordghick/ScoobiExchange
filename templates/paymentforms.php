<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;700;900&family=Roboto:wght@400;700;900&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="../styles/normalize.css" />
    <link rel="stylesheet" href="../styles/payments.css" />
  </head>
  <body>
    <div class="payment__contenedor contenedor">
      <div class="contenedor__formularios">
        <form
          class="formulario"
          action="../rcon/execution.php"
          method="POST"
          id="deposit"
        >
          <h2 class="formulario__heading">Purchase</h2>

          <div class="username__contenedor">
            <label for="">Username:</label>
            <input type="text" id="username" value="<?php echo $_SESSION['username'] ?>" readonly />
          </div>

          <div class="transfer">
              <img src="../styles/img/polygon-token-logo-freelogovectors.net_.png" alt="">
            <label for="">Matic to transfer:</label>
            <input type="number" id="amount" placeholder="" />
          </div>

          <div class="btn__contenedor">
            <button id="sendTransaction" class="btn">
              Buy Minecraft Doobie!
            </button>
          </div>
          <a href="../config/logout.php" class="help__link"
            >Wrong account? Logout here!</a
          >
        </form>

        <form class="formulario" action="">
          <div id="response"></div>
          <div class="btn__contenedor">
            <button id="sendTransaction" class="btn">
              Withdraw your Minecraft Scoobi!
            </button>
          </div>
        </form>
      </div>
    </div>
    <script src="../dist/main.js"></script>
  </body>
</html>



<!-- <body>
    <div>
        <form action="../rcon/execution.php" method="POST" id="deposit">    
            <input type="text" id="username" readonly>
            <div><input type="number" id="amount" placeholder="Matic to transfer"></div>
            <div><button id="sendTransaction">Buy Minecraft Doobie!</button></div>
        </form>
    </div>
</body>
 -->

