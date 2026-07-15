const btn = document.querySelector("#btn");
const inputEl = document.getElementById("input");
const alertEl = document.querySelector(".alert-container");
const copy = document.querySelector(".fa-copy");

let pass;
btn.addEventListener("click" ,()=>{
    createPassword();   
});
copy.addEventListener("click" , ()=>{
    window.navigator.clipboard.writeText(inputEl.value);
     alertEl.classList.remove("active");
    alertEl.innerText = pass + " -Copied !!";
});

function createPassword(){
    const char = "0123456789abcdefghijklmnopqrstuvwxtz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ";
     pass = "";
    const passLength = 14;
    for(index =0;index < passLength;index++){
        let randomidx = Math.floor(Math.random()*char.length);
        pass += char.substring(randomidx,randomidx+1);
        console.log(randomidx,pass);
    }
        console.log(pass);  
        inputEl.value = pass;
}

function copyDisplay(){

}


