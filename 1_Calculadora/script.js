const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

buttons.forEach((item) => {
    item.onclick = () => {
        // if (item.id=="clear") {
        //     display.innerText = "";
        // }else if (item.id=="backspace") {
        //     let string = display.innerText.toString();
        //     display.innerText = string.substr(0, string.length-1)
        // }else if (display.innerText != "" && item.id == "equals") {
        //     display.innerText = eval(display.innerText)
        // }else if (display.innerText == "" && item.id == "equals") {
        //     display.innerText = "Vacío";
        //     setTimeout(()=>(display.innerText = ""), 1500);
        // }else{
        //     display.innerText += item.id;
        // } 



let string = display.innerText.toString();
(item.id=="clear") ? display.innerText = "" : (item.id=="backspace")
? display.innerText = string.substr(0, string.length-1) : (display.innerText != "" && item.id == "equals")
? display.innerText = eval(display.innerText) : (display.innerText == "" && item.id == "equals") ? (display.innerText = "Vacío", setTimeout(()=>(display.innerText = ""), 1500)) :
display.innerText += item.id

    };
});   