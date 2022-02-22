logoutBtn = document.getElementById('resendBtn');
formContainer = document.getElementById('formContainers');

logoutBtn.onclick = function (e){
    e.preventDefault();
    let newForm = document.createElement("form");
    newForm.method = 'POST';
    newForm.action = '../config/logout.php';
    newForm.style.display = 'none';
    formContainer.appendChild(newForm);
    newForm.submit();
}
