const link = document.getElementById("theme-link");
const themeText = document.getElementById("theme-text");
const moonLink = document.getElementById("mobile-change-theme");
const slider = document.querySelector('.slider')
const darkTheme = "css/dark.css";
const lightTheme = "css/light.css";

const darkMoonTheme = "assets/img/dark-moon.svg";
const lightMoonTheme = "assets/img/light-moon.svg";

let i = 0;

const changeMoonTheme = () => {

    let currTheme = link.getAttribute("href");
    let currMoonTheme = moonLink.getAttribute("src");

    if (currTheme === darkTheme) {
        currTheme = lightTheme;
        currMoonTheme = lightMoonTheme;
        localStorage.removeItem('theme')
        localStorage.setItem('theme', 'light')
    } else {
        currTheme = darkTheme;
        currMoonTheme = darkMoonTheme;
        localStorage.removeItem('theme')
        localStorage.setItem('theme', 'dark')
    }

    link.setAttribute("href", currTheme);
    moonLink.setAttribute("src", currMoonTheme);
}

const changeTheme = () => {
    if (i++ % 2 !== 0) return; // так как срабатывает оно 2 раза подряд

    let currTheme = link.getAttribute("href");

    if (currTheme === darkTheme) {
        currTheme = lightTheme;
        localStorage.removeItem('theme')
        localStorage.setItem('theme', 'light')
        themeText.textContent = 'Светлая тема'
    } else {
        currTheme = darkTheme;
        localStorage.removeItem('theme')
        localStorage.setItem('theme', 'dark')
        themeText.textContent = 'Тёмная тема'
    }

    link.setAttribute("href", currTheme);
}

$(document).ready(() => {
    if (localStorage.getItem('theme') === 'light') {
        link.setAttribute("href", lightTheme);
        moonLink.setAttribute("src", lightMoonTheme);
        themeText.textContent = 'Светлая тема'
    } else {
        link.setAttribute("href", darkTheme);
        moonLink.setAttribute("src", darkMoonTheme);
        themeText.textContent = 'Тёмная тема'
    }
})