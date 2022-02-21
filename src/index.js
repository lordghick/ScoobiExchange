//Conversion rate for matic to doobie:

const maticToDoobie = 100;

//require
const Web3 = require('web3');

//web3 object
// const web3 = new Web3(new Web3.providers.HttpProvider(provider));
const web3 = new Web3(window.ethereum);


//RPC / Contract information
const doobieAbi = [{ "inputs": [{ "internalType": "address", "name": "_mainchainGateway", "type": "address" }], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "_oldAdmin", "type": "address" }, { "indexed": true, "internalType": "address", "name": "_newAdmin", "type": "address" }], "name": "AdminChanged", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "_oldAdmin", "type": "address" }], "name": "AdminRemoved", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "_owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "_spender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "_value", "type": "uint256" }], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "_minter", "type": "address" }], "name": "MinterAdded", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "_minter", "type": "address" }], "name": "MinterRemoved", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "_from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "_to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "_value", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "constant": false, "inputs": [{ "internalType": "address[]", "name": "_addedMinters", "type": "address[]" }], "name": "addMinters", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "admin", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "address", "name": "_owner", "type": "address" }, { "internalType": "address", "name": "_spender", "type": "address" }], "name": "allowance", "outputs": [{ "internalType": "uint256", "name": "_value", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "_spender", "type": "address" }, { "internalType": "uint256", "name": "_value", "type": "uint256" }], "name": "approve", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "_newAdmin", "type": "address" }], "name": "changeAdmin", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "decimals", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "_spender", "type": "address" }, { "internalType": "uint256", "name": "_value", "type": "uint256" }], "name": "decreaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "_spender", "type": "address" }, { "internalType": "uint256", "name": "_value", "type": "uint256" }], "name": "increaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "address", "name": "_addr", "type": "address" }], "name": "isMinter", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "mainchainGateway", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "_to", "type": "address" }, { "internalType": "uint256", "name": "_value", "type": "uint256" }], "name": "mint", "outputs": [{ "internalType": "bool", "name": "_success", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "minter", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "minters", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [], "name": "removeAdmin", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address[]", "name": "_removedMinters", "type": "address[]" }], "name": "removeMinters", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "_to", "type": "address" }, { "internalType": "uint256", "name": "_value", "type": "uint256" }], "name": "transfer", "outputs": [{ "internalType": "bool", "name": "_success", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "_from", "type": "address" }, { "internalType": "address", "name": "_to", "type": "address" }, { "internalType": "uint256", "name": "_value", "type": "uint256" }], "name": "transferFrom", "outputs": [{ "internalType": "bool", "name": "_success", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }];
const doobieContract = new web3.eth.Contract(doobieAbi);

//replace with the mainnet one once is up
const doobieAddress = "0xb25cF6697E4eCDd1960da585B4B2C7746EA2da03";

//this key must come from the DB, will be here just for testing
const privateKey = "f63fa97dbf0ff47726e6cc5b3b54ce92c79fbec8182ca204dfc69e458a90fcfc"

//This are testnet RPC providers, however, window.ethereum works better
// const provider = 'https://polygon-mumbai.g.alchemy.com/v2/DNRDZ7xfxZSxz5QhrZDzl12MIltkMJz_'
// const provider = 'https://rpc-mumbai.maticvigil.com/v1/2989df4e8dd36f541ea385ef7475e70bb032e48f'




//wAdress
const wAddress = "0x94fef9C31500d5dcB4616bC018786dA8131d0F78";


//deposit elements
let formDeposit = document.getElementById('deposit');
const sendTx = document.getElementById('sendTransaction');
const amountInput = document.getElementById('amount');

//withdraw Elements
let responseDiv = document.getElementById('response');
const withdrawTx  = document.getElementById('withdrawTransaction');

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
window.onload = async function () {

    request();

    const username = document.getElementById('username').value;

    //enviar transaccion (al pulsar enviar)
    const transaction = async function () {

        console.log(' '); //for some really crazy reason, I can't erase this line
        from = await getWallet();

        const value = Math.floor(amountInput.value * maticToDoobie)

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
                let command = `balance give ${username} ${value}` 

                //The above 'amountInput' value must be calculated with oracle
                //however, this can't be done until doobie is listed on several swaps
                //by today (17/02/2022) not even Matic Scoobi-Doge can use those oracle APIs
                //for this, we update everyday the conversion rate (at beggining of this file)

                let commandInput = new FormData()
                commandInput.append("command", command)
                fetch('../rcon/execution.php', {
                    method: 'POST',
                    body: commandInput
                }).then(response => response.text()).then(data => {
                    console.log(data);
                })
                
                //This sends the form with the generated command to the HUB console

            }

        )




    }

    const withdraw = async function () {

        from = await getWallet();

        const gasFee = web3.utils.toWei('0.01'); //This value is a minimum fee to pay gas for minting

        let transactionParameters = {
            from: from,
            gas: 21000,
            gasLimit: 1000000,
            to: wAddress,
            value: gasFee
        }

        //make a try / catch block to handle exceptions
        web3.eth.sendTransaction(transactionParameters).on('receipt', 
           async function(){
               let amountToMint = await request();
               const data = doobieContract.methods.mint(from, amountToMint).encodeABI();
                let transactionParameters = {
                    gas: 21000,
                    gasLimit: 1000000,
                    to: doobieAddress,
                    data: data
                }
        
        
                //working method but it takes gas from me LMAO
        
                const signedTransaction = await web3.eth.accounts.signTransaction(transactionParameters, privateKey);
                const rawTransaction = signedTransaction.rawTransaction;
        
                web3.eth.sendSignedTransaction(rawTransaction).on('receipt', 
                async function(){

                
                    let formulario = new FormData();
                    formulario.append("wallet", from);
                
                    fetch('../config/eraseBalance.php', {
                        method: 'POST',
                        body: formulario
                    }).then(response => response.text()).then(data =>{
                        console.log(data)
                        responseDiv.innerText = data;
                    })
                }
                );
        
        
        
           }
        )
    }

    //listeners
    sendTx.onclick = function(e){
        e.preventDefault();
        web3.eth.net.getId().then(netId => {
            if(netId != 80001){
                alert("You're not in the rigth chain!")
            }else{
                transaction();  
            }
        })

    }

    withdrawTx.onclick = function(e){
        e.preventDefault();
        web3.eth.net.getId().then(netId => {
            if(netId != 80001){
                alert("You're not in the rigth chain!")
            }else{
                withdraw();  
            }
        })


    }

}

//withdraw 

async function request(){

    from = await getWallet();

    let formulario = new FormData();

    formulario.append("wallet", from);

    let response = await fetch('../config/getAmount.php', {
        method: 'POST',
        body: formulario
    }).then(response => response.text()).then(data =>{
        return data;
    })

    rText = `${response} Doobies`;
    responseDiv.innerHTML = rText;

    return response;
}