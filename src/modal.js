let formUser  = document.getElementById('form-user-creator');
let btnForm  = document.getElementById('button-user-creator');
let modalBtn = document.getElementById('button-modal');
let closeModalBtn = document.getElementById("button-modal-close");
let modalContainer  = document.getElementById("modal-container");
let modalContent  = document.getElementById('modal-content')
let modalText  = document.getElementById('modal-text')
let newUserInput = document.getElementById('newUserInput');

function modalCall(){

    modalContainer.style.visibility = 'visible';
    modalContainer.style.opacity = 1;
    modalContainer.style.display = 'flex';

    modalContent.style.visibility = 'visible';
    modalContent.style.opacity = 1;
    modalContent.style.top = 0;
}

function modalClose(){
    modalContainer.style.visibility = 'hidden';
    modalContainer.style.opacity = 0;
    modalContainer.style.display = 'none';

    modalContent.style.visibility = 'hidden';
    modalContent.style.opacity = 0;
    modalContent.style.top = '-100%';
}

btnForm.onclick = function (e){
    e.preventDefault();
    modalCall();
}

modalBtn.onclick = function (e){
    e.preventDefault();
    if(newUserInput.value == ""){
        newUserInput.placeholder = "This field can't be empty!"
        modalClose();
    }else{
        formUser.submit();
    }
}

closeModalBtn.onclick = function (e){
    e.preventDefault()
    modalClose();
}
