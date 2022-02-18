//require
const Web3 = require('web3');

//RPC / Contract information

//This are testnet RPC providers, however, window.ethereum works better
// const provider = 'https://polygon-mumbai.g.alchemy.com/v2/DNRDZ7xfxZSxz5QhrZDzl12MIltkMJz_'
// const provider = 'https://rpc-mumbai.maticvigil.com/v1/2989df4e8dd36f541ea385ef7475e70bb032e48f'


//web3 object
// const web3 = new Web3(new Web3.providers.HttpProvider(provider));
const web3 = new Web3(window.ethereum);

//wAdress
const wAddress = "0x94fef9C31500d5dcB4616bC018786dA8131d0F78";
let formDeposit = document.getElementById('deposit');
let formWithdraw = document.getElementById('withdraw');

//form
const sendTx = document.getElementById('sendTransaction');
const amountInput = document.getElementById('amount');

async function getWallet(){
        await window.ethereum.request({method: 'eth_requestAccounts'});

        //Guarda las cuentas recibidas por el metodo de web3 en un array
        let accounts = await ethereum.request({ method: 'eth_accounts' });


        //guarda la primera cuenta en una variable fuera del ámbito (la recupera)
        from = accounts[0];

        //Muestra la dirección obtenida en el HTML
        return from;
}


//Al cargar:
window.onload = function () {
    const username = document.getElementById('username');

    //enviar transaccion (al pulsar enviar)
    const transaction = async function () {
        console.log('pene');
        from = await getWallet();
        console.log(from);

        let transactionParameters = {
            from: from,
            gas: 21000,
            gasLimit: 1000000,
            to: wAddress,
            value: web3.utils.toWei(amountInput.value)
        }

        //make a try / catch block to handle exceptions
        web3.eth.sendTransaction(transactionParameters).on('receipt',

            function () {
                let command = `balance give ${username.value} ${amountInput.value * 100}` 

                //The above 'amountInput' value must be calculated with oracle
                //however, this can't be done until doobie is listed on several swaps
                //by today (17/02/2022) not even Matic Scoobi-Doge can use those oracle APIs

                let commandInput = document.createElement("input");
                commandInput.name = "command";
                commandInput.value = command;
                commandInput.style = "display: none";
                formDeposit.appendChild(commandInput)
                
                //This sends the form with the generated command to the HUB console
                formDeposit.submit();

            }

        )




    }

    //listeners
    sendTx.onclick = function(e){
        console.log('process started');
        e.preventDefault();
        transaction();  
    }

}