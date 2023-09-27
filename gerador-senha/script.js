let sliderElement = document.querySelector("#slider")
let buttonElement = document.querySelector("#button")

let sizePassword = document.querySelector("#valor")
let password = document.querySelector("#password")

let containerPassword = document.querySelector("#container-pasword")

let charset ="abcdefghijklmnoparstuvxzABCDEFGHIJKLMNOPQRSTUVXZ0987654321"
let novaSenha= '';

sizePassword.innerHTML = sliderElement.value; 

sliderElement.oninput = function(){
    sizePassword.innerHTML = this.value;
}
function generatePassword(){
    let pass = '';
    for(let i=0 n = charset.length; 1 <sliderElement.value; ++i){

    }
}