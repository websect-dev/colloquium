const dropdown = document.querySelector('.dropdown')
const startContainerLink = document.querySelector('.start-container')
const additionalContainerLink = document.querySelector('#additional-container')

dropdown.addEventListener('click', () => {
    if (dropdown.classList.contains('closed')) {
        dropdown.classList.remove('closed')
        startContainerLink.setAttribute("style", "display: none")
        additionalContainerLink.setAttribute("style", "display: none")
    } else {
        dropdown.classList.add('closed')
        startContainerLink.removeAttribute("style")
        additionalContainerLink.removeAttribute("style")
    }
})
