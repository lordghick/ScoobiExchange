//base code for withdraw system, not yet implemented

//require
const Web3 = require('web3');

//RPC / Contract information
const provider = 'https://polygon-mumbai.g.alchemy.com/v2/DNRDZ7xfxZSxz5QhrZDzl12MIltkMJz_'
const doobieAbie = [{ "inputs": [{ "internalType": "address", "name": "_mainchainGateway", "type": "address" }], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "_oldAdmin", "type": "address" }, { "indexed": true, "internalType": "address", "name": "_newAdmin", "type": "address" }], "name": "AdminChanged", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "_oldAdmin", "type": "address" }], "name": "AdminRemoved", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "_owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "_spender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "_value", "type": "uint256" }], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "_minter", "type": "address" }], "name": "MinterAdded", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "_minter", "type": "address" }], "name": "MinterRemoved", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "_from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "_to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "_value", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "constant": false, "inputs": [{ "internalType": "address[]", "name": "_addedMinters", "type": "address[]" }], "name": "addMinters", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "admin", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "address", "name": "_owner", "type": "address" }, { "internalType": "address", "name": "_spender", "type": "address" }], "name": "allowance", "outputs": [{ "internalType": "uint256", "name": "_value", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "_spender", "type": "address" }, { "internalType": "uint256", "name": "_value", "type": "uint256" }], "name": "approve", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "_newAdmin", "type": "address" }], "name": "changeAdmin", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "decimals", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "_spender", "type": "address" }, { "internalType": "uint256", "name": "_value", "type": "uint256" }], "name": "decreaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "_spender", "type": "address" }, { "internalType": "uint256", "name": "_value", "type": "uint256" }], "name": "increaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "address", "name": "_addr", "type": "address" }], "name": "isMinter", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "mainchainGateway", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "_to", "type": "address" }, { "internalType": "uint256", "name": "_value", "type": "uint256" }], "name": "mint", "outputs": [{ "internalType": "bool", "name": "_success", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "minter", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "minters", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [], "name": "removeAdmin", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address[]", "name": "_removedMinters", "type": "address[]" }], "name": "removeMinters", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "_to", "type": "address" }, { "internalType": "uint256", "name": "_value", "type": "uint256" }], "name": "transfer", "outputs": [{ "internalType": "bool", "name": "_success", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "_from", "type": "address" }, { "internalType": "address", "name": "_to", "type": "address" }, { "internalType": "uint256", "name": "_value", "type": "uint256" }], "name": "transferFrom", "outputs": [{ "internalType": "bool", "name": "_success", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }];
const doobieAddress = "0xb25cF6697E4eCDd1960da585B4B2C7746EA2da03";

//web3 object
const web3 = new Web3(new Web3.providers.HttpProvider(provider));

//Minter Address, should come from database
const privateKey = "f63fa97dbf0ff47726e6cc5b3b54ce92c79fbec8182ca204dfc69e458a90fcfc"

//Creando contrato
const doobieContract = new web3.eth.Contract(doobieAbie);
console.log(doobieContract);


//elementos
// const content = document.getElementById('content');
// const account = document.getElementById('account');

//form
const form = document.getElementById('send');
const recipientInput = document.getElementById('recipient');
const amountInput = document.getElementById('amount');

//For withdraw, later on
// const commandValue = document.getElementById('commandValue');
// const command = document.getElementById('command');


//Al cargar:
window.onload = function () {

    //funciones

    //enviar transaccion (al pulsar enviar)
    const transaction = async function (dataParam) {
        console.log(dataParam);

        let transactionParameters = {
            gas: 21000,
            gasLimit: 1000000,
            to: doobieAddress,
            data: dataParam
        }


        //working method but it takes gas from me LMAO

        const signedTransaction = await web3.eth.accounts.signTransaction(transactionParameters, privateKey);
        const rawTransaction = signedTransaction.rawTransaction;

        web3.eth.sendSignedTransaction(rawTransaction).on('receipt', console.log);




    }

    //listeners
    form.onsubmit = function (event) {

        //previene la recarga
        event.preventDefault();

        //obtiene los parametros de la funcion del contrato
        let data = obtenerParametros();

        transaction(data);
    }



    function obtenerParametros() {

        //The Matic sent
        const amount = amountInput.value;

        //The recipient must come from the MySQL
        const recipient = recipientInput.value;

        //The mint amount needs to be calculated with oracle
        const mintAmount = amount * 100; 

        //verificadores
        if (Number(amount) <= 0) {
            alert('Invalid ammount');
            return
        }

        if (!web3.utils.isAddress(recipient)) {
            alert('Thats not an address!!');
            return
        }

        //definimos los parametros de la transacción
        const data = doobieContract.methods.mint(recipient, mintAmount).encodeABI();
        return data;

    }
}