let inputSlider=document.querySelector("#inputSlider");
let sliderValue= document.querySelector("#sliderValue");

let passBox=document.querySelector("#passBox");
let lowerCase=document.querySelector("#Lowercase");
let upperCase=document.querySelector("#Upperrcase");
let number=document.querySelector("#Number");
let symbol=document.querySelector("#Symbol");
 let getBtn=document.querySelector("#genBtn");
 let copyIcon=document.querySelector("#icon");



sliderValue.textContent=inputSlider.value;
inputSlider.addEventListener('input',()=>{
    sliderValue.textContent=inputSlider.value;
})

getBtn.addEventListener('click', ()=>{
    passBox.value=generatePassword();
    console.log("clicked");
})

let lowerChars="abcdefghijklmnopqrstuvwxyz";
let upperChars="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let allNumber="0123456789";
let allSymbol="~!@#$%^&*()";

// function to generate password
function generatePassword(){
    let genPassword="";
    let allChars="";
    allChars += lowerCase.checked ? lowerChars:"";
    allChars += upperCase.checked? upperChars:"";
   
    allChars += number.checked? allNumber:"";
    allChars += symbol.checked? allSymbol:"";
let i=1;
    while( i<=inputSlider.value){
     genPassword += allChars.charAt(Math.floor(Math.random()*allChars.length));
     i++;
    }
     return genPassword;
}

/// copy the password
copyIcon.addEventListener('click', ()=>{
    if(passBox.value!=""|| passBox.value.length>=4){
        navigator.clipboard.writeText(passBox.value);
        copyIcon.innerText="Check";
        copyIcon.title="Password Copied";

        setTimeout(()=>{
            copyIcon.title="Password Copied";
            copyIcon.innerText="";
        } ,4000)
    }
})