const dropdown = document.querySelector('#dropdown')
const arrow = document.querySelector('#arrow')
const startContainerLink = document.querySelector('#start-container')
const additionalContainerLink = document.querySelector('#additional-container')

dropdown.addEventListener('click', () => {
    if (dropdown.classList.contains('closed')) {
        dropdown.classList.remove('closed')
        startContainerLink.setAttribute("style", "display: none")
        additionalContainerLink.setAttribute("style", "display: none")
        arrow.setAttribute("style", "transform: rotateX(180deg)")
    } else {
        dropdown.classList.add('closed')
        startContainerLink.removeAttribute("style")
        additionalContainerLink.removeAttribute("style")
        arrow.removeAttribute("style")
    }
})
