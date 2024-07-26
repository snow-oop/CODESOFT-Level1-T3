const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function deleteLastCharacter() {
    display.value = display.value.toString().slice(0,-1)
}

function calculate(){
    try {
        display.value = eval(display.value);
    }
    catch {
        display.value = "ERROR !!";
    }

}
// small code just for animation:)

gsap.from("body",{
    opacity:0,
    duration:1,
    delay:0.5,
    x:1700,
    y:1800,
    scale:50,

})                        

gsap.from("button",{
    opacity:0,
    duration:1,
    delay:1.6,
    x:400,
    y:600,
    
})

