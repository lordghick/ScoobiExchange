const connect = async function() {
    //confirma la existencia de metamask
    if(window.ethereum){

        //bloque trycatch para recuperar errores (el await dará
        //error si el usuario rechaza la transacción)
        try{

        //Se conecta a metamask
        await window.ethereum.request({method: 'eth_requestAccounts'});

        //Guarda las cuentas recibidas por el metodo de web3 en un array
        let accounts = await ethereum.request({ method: 'eth_accounts' });


        //guarda la primera cuenta en una variable fuera del ámbito (la recupera)
        from = accounts[0];

        //Muestra la dirección obtenida en el HTML
        return from;
        }catch (err){
            alert('has rechazado la conexión')
        }

    }else{
        alert('Necesitas un proveedor de web3')
    }
}

const connectButton = document.getElementById('connect');
const addressInput = document.getElementById('addressInput');
const formObject = document.getElementById('loginForm');

connectButton.onclick = async function(){
    let address = await connect();
    addressInput.value = address;
    formObject.submit();
};