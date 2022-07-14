let sliderElement = document.querySelector('#slider');
let buttonElement = document.querySelector('#button');
let sizePassword = document.querySelector('#valor');
let password = document.querySelector('#password');
let passwordContainer = document.querySelector('#container-password')
let novaSenha = '';
let charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

sizePassword.innerHTML = sliderElement.value;

slider.oninput = function() {
    sizePassword.innerHTML = this.value;
}

function generatePassword() {
    let pass = '';
    for(i = 0, n = charset.length; i < sliderElement.value; i++) {
        pass += charset.charAt(Math.floor(Math.random() * n));
    }
    novaSenha = pass;
}

function printPassword() {
    generatePassword()
    password.innerHTML = novaSenha;
    passwordContainer.classList.remove('hide');
}

function copyPassword() {
    navigator.clipboard.writeText(novaSenha);
}