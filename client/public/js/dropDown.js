const dropdown = document.querySelector('#dropdown')
const arrow = document.querySelector('#arrow')
const startContainerLink = document.querySelector('#start-container')
const additionalContainerLink = document.querySelector('#additional-container')
const headerText = document.querySelector('#header-text')

// по клику
dropdown.addEventListener('click', () => {

    if (dropdown.classList.contains('closed')) {
        dropdown.classList.remove('closed')
        startContainerLink.setAttribute("style", "display: none")
        additionalContainerLink.setAttribute("style", "display: none")
        arrow.setAttribute("style", "transition: all 0.2s ease-in-out; transform: rotateX(180deg);")
    } else {
        dropdown.classList.add('closed')
        startContainerLink.removeAttribute("style")
        additionalContainerLink.removeAttribute("style")
        arrow.setAttribute("style", "transition: all 0.2s ease-in-out; transform: rotateX(360deg);")
    }
})

document.getElementById("menu").addEventListener("click", (e) => {
    if (e.target.innerText !== undefined)
        [e.target.innerText, headerText.textContent] = [headerText.textContent, e.target.innerText]
});

// по наведению мыши
/*
dropdown.addEventListener('mouseenter', () => {
    if (!dropdown.classList.contains('closed'))
        return;

    dropdown.classList.remove('closed')
    startContainerLink.setAttribute("style", "display: none")
    additionalContainerLink.setAttribute("style", "display: none")
    arrow.setAttribute("style", "transition: all 0.2s ease-in-out; transform: rotateX(180deg);")
})

dropdown.addEventListener('mouseleave', (e) => {
    if (dropdown.classList.contains('closed'))
        return;

    dropdown.classList.add('closed')
    startContainerLink.removeAttribute("style")
    additionalContainerLink.removeAttribute("style")
    arrow.setAttribute("style", "transition: all 0.2s ease-in-out; transform: rotateX(360deg);")
})
*/