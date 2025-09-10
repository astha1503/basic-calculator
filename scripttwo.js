const screenText = document.querySelector(".screen-text");
const btns = document.querySelectorAll("button");

btns.forEach(btn => {
    btn.addEventListener("click", () => {
        const action = btn.dataset.action;
        const value = btn.innerText;

        if (action === "backspace") {
            screenText.textContent = screenText.textContent.slice(0, -1);
        } else if (value === "=") {
            let expr = screenText.textContent;
            screenText.textContent = calculate(expr);
        } else if (value === "C") {
            screenText.textContent = "";
        } else {
            screenText.textContent += value;
        }

        // Always scroll to the right after update
        screenText.parentElement.scrollLeft = screenText.parentElement.scrollWidth;
    });
});

function calculate(expression) {
    // Replace calculator symbols with JS operators
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