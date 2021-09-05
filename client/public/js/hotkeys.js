const nextQuestionButton = document.querySelector("#grid-container #grid-next-question #start-container button")
const backHomeButton = document.querySelector("#back-home-btn")

const hotkeys = (el) => {

    switch (el.key) {
        case "Enter": // Enter
            nextQuestionButton.click()
            break;
        case " ": // Space
            nextQuestionButton.click()
            break;
        case "Backspace":
            backHomeButton.click()
            break;
    }
}

addEventListener("keydown", hotkeys);