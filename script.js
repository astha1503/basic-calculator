const screenText = document.querySelector(".screen-text");
console.log(screenText);
const btn = document.querySelectorAll("button");
const btnArray = Array.from(btn);

for(let e = 0; e < btnArray.length; e++){
    btnArray[e].addEventListener("click", function() {
        display(this);
    });
}

function display(key){
    let value = key.textContent;
    if(value == "="){
        screenText.textContent = ""; // add function which display opersation on pparcicular problem
    }
    else if (value == "C"){
        screenText.textContent = "";
    }
    else if (value == ""){
        screenText.textContent = screenText.textContent.slice(0, -1);
    }
    else{
        screenText.textContent += value;
        // Scroll the parent container to the rightmost position
        screenText.parentElement.scrollLeft = screenText.parentElement.scrollWidth;
    }   
}