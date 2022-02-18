<?php

?>
<body>
    <div>
        <form action="../rcon/execution.php" method="POST" id="deposit">    
            <input type="text" id="username" value="<?php echo $_SESSION['username'] ?>" readonly>
            <div><input type="number" id="amount" placeholder="Matic to transfer"></div>
            <div><button id="sendTransaction">Buy Minecraft Doobie!</button></div>
        </form>
    </div>
    <script src="../dist/main.js"></script>
</body>