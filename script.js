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
    // Evita la inserción de operadores consecutivos
    if (isOperator(number) && isOperator(screen.innerText.slice(-1))) {
        return;
    } 
    // Ajusta el tamaño de la fuente para evitar desbordamiento
    screen.innerText += number;
    adjustFontSize();
}

function clearScreen() {
    screen.innerText = '';
    screen.style.fontSize = '2em'; // Restablece el tamaño de la fuente
}

function calculate() {
    try {
        const result = eval(screen.innerText);
        if (isNaN(result) || result === undefined) {
            throw new Error("Invalid Calculation");
        }
        screen.innerText = result;
    } catch (error) {
        screen.innerText = 'Error';
        setTimeout(() => {
            screen.innerText = '';
            screen.style.fontSize = '2em';
        }, 2000);
    }
    adjustFontSize();
}

function isOperator(value) {
    return ['+', '-', '*', '/'].includes(value);
}//La función isOperator ayuda a determinar si un carácter es un operador (+, -, *, /).

function adjustFontSize() {
    // adjustFontSize ajusta dinámicamente el tamaño de la fuente del texto en la pantalla para evitar el desbordamiento.
    // Esta función se llama cada vez que se agrega un número u operador a la pantalla y después de realizar un cálculo.
    const maxFontSize = 2; // Tamaño máximo de fuente en em
    const minFontSize = 1; // Tamaño mínimo de fuente en em
    screen.style.fontSize = maxFontSize + 'em';
    
    while (screen.scrollWidth > screen.clientWidth && parseFloat(screen.style.fontSize) > minFontSize) {
        screen.style.fontSize = (parseFloat(screen.style.fontSize) - 0.1) + 'em';
    }
}
