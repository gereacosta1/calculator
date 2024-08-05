//Codigo en desuso por cosas viejas, que ya no se utilizan normalmente, como .subtr, eval, "Null"

// const display = document.querySelector("#display")
// const buttons = document.querySelectorAll("button")

// buttons.forEach((item)=>{
//     item.onclick=()=>{
//         if(item.id=="clear"){
//             display.innerText = "";
//         }else if (item.id=="backspace"){
//             let string = display.innerText.toString();
//             display.innerText = string.subtr(0, string.length - 1);
//         } else if (display.innerText != "" && item.id == "eqyual"){
//             display.innerText = eval(display.innerText);
//         } else if (display.innerText = "Null"){
//             setTimeout(() => (display.innerText = ""), 20000);

//         }else {
//             display.innerText +=item.id;
//         }
//     }
// })






// const display = document.querySelector("#display");
// const buttons = document.querySelectorAll("button");

//     buttons.forEach((button) => {
//     button.onclick = () => {
//         if (button.id === "clear") {
//         display.innerText = "";
//         } else if (button.id === "backspace") {
//         let string = display.innerText.toString();
//         display.innerText = string.slice(0, -1);
//         } else if (display.innerText !== "" && button.id === "equal") {
//         try {
//             display.innerText = eval(display.innerText);
//         } catch (e) {
//             display.innerText = "Error";
//             setTimeout(() => (display.innerText = ""), 2000);
//         }
//         } else if (display.innerText === "null") {
//         setTimeout(() => (display.innerText = ""), 2000);
//         } else {
//         display.innerText += button.id;
//         }
//     };
//     });

    const screen = document.getElementById('screen');

    function appendNumber(number) {
    screen.innerText += number;
    }

    function clearScreen() {
    screen.innerText = '';
    }

    function calculate() {
    try {
        screen.innerText = eval(screen.innerText);
    } catch (error) {
        screen.innerText = 'Error';
    }
    }
