Exchange code in process for the scoobi server!

by the time of this submit (17/02/2022) this web api is able to: 

1. identify a wallet (through "login with metamask button)
2. check if this wallet exists on the database
    2.a) if so, go to the exchange main page with the retreived username from the database (3)
    2.b) if not, go to the username creator
        2.b.1) ask for an username to link the wallet
        2.b.2) send a 6 digit code and waits for it
        2.b.3) if the code matches, it registers the new user and go to the exchange
3. shows the username and asks for a MATIC ammount to transfer
4. after the payment is done, it gives the Doobie ingame to the selected user

How to use in development:

1. Download and install any local web server (recommended: laragon)
2. for laragon, go to C:/laragon/www and paste the whole project folder
3. start the laragon web server and go to scoobiexchange.test/dist

How to implement on webpage:

1. add the folder to the web hosting and redirect directly to scoobiexchange/dist/index.php from anywhere you desire

To Do:

1. Several unhandled exceptions are listed through code comments, exceptions that will be fixed in the incomming days
2. Private key needs to go to a database

Update 09/27/2022:

As the project stopped, the database or connection to server config won't work anymore. Anyhow this code remains as a "base" for a crypto exchange using php, web3.js and solidity for a Minecraft server (or any other game)
