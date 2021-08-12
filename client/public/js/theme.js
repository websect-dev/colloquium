const link = document.getElementById("theme-link");
const moonLink = document.getElementById("mobile-change-theme");
const lightTheme = "css/dark.css";
const darkTheme = "css/light.css";

const lightMoonTheme = "assets/img/light-moon.svg";
const darkMoonTheme = "assets/img/dark-moon.svg";

let i = 0;

const changeMoonTheme = () => {

    let currTheme = link.getAttribute("href");
    let currMoonTheme = moonLink.getAttribute("src");

    if (currTheme === lightTheme) {
        currTheme = darkTheme;
        currMoonTheme = darkMoonTheme;
    } else {
        currTheme = lightTheme;
        currMoonTheme = lightMoonTheme;
    }

    link.setAttribute("href", currTheme);
    moonLink.setAttribute("src", currMoonTheme);
}

const changeTheme = () => {
    if (i++ % 2 !== 0) return; // так как срабатывает оно 2 раза подряд

    let currTheme = link.getAttribute("href");

    if (currTheme === lightTheme)
        currTheme = darkTheme;
    else
        currTheme = lightTheme;

    link.setAttribute("href", currTheme);
}