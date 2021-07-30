const link = document.getElementById("theme-link");
const lightTheme = "../public/css/dark.css";
const darkTheme = "../public/css/light.css";

let i = 0;

const changeTheme = () => {
    if (i++ % 2 !== 0) return; // так как срабатывает оно 2 раза подряд

    let currTheme = link.getAttribute("href");

    if (currTheme === lightTheme)
        currTheme = darkTheme;
    else
        currTheme = lightTheme;

    link.setAttribute("href", currTheme);
}