const txt1 = document.getElementById("any-word");
const btn1 = document.getElementById("btn1");
const out1 = document.getElementById("output1");

function fun1() {
    out1.innerHTML = txt1.value; 
    
}

btn1.addEventListener("click", fun1);  

btn1.addEventListener("click", () => {
    playText(txt1.value)
})
        
function playText(text) {
    const utternace = new SpeechSynthesisUtterance(text)
    speechSynthesis.speak(utternace)
}
let btnClear = document.querySelector()