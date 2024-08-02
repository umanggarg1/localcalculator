let inputBox = document.getElementById("inputBox");
let buttons = document.querySelectorAll("button");
let string = ' ';

buttons.forEach(element => {
    element.addEventListener('click', (text) => {
        if(text.target.innerText == '='){
            string = String(eval(string));
            inputBox.value = string;        
        }
        else if (text.target.innerText == 'AC'){
            string = '';
            inputBox.value = string;

        }
        else if (text.target.innerText == 'DEL'){
            string = string.substring(0,string.length-1);
            inputBox.value = string;
        }
        else if(text.target.id == 'plusMinus'){
            string = String(-eval(string));
            inputBox.value = string;
        }
        else{
            string += text.target.innerText;
            inputBox.value = string;
        }
    })
})