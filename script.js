const screenText = document.querySelector(".screen-text");
const btn = document.querySelectorAll("button");
const btnArray = Array.from(btn);

for(let e = 0; e < btnArray.length; e++){
    btnArray[e].addEventListener("click", function() {
        display(this);
    });
}

function display(key){
    let value = key.textContent;
    let action = key.dataset.action;

    if(value === "="){
        let exper = screenText.textContent;
        screenText.textContent = result(exper);
    }
    else if (value === "C"){
        screenText.textContent = "";
    }
    else if (action === "backspace"){
        screenText.textContent = screenText.textContent.slice(0, -1);
    }
    else{
        screenText.textContent += value;
        // Scroll the parent container to the rightmost position
        screenText.parentElement.scrollLeft = screenText.parentElement.scrollWidth;
    }   
}

function result(expression) {
    expression = expression.replace(/×/g, '*')
                          .replace(/x/g, '*')
                          .replace(/÷/g, '/')
                          .replace(/\^/g, '**');
    try {
        return eval(expression);
    } catch {
        return "Error";
    }
}

