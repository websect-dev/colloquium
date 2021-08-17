const notification = document.querySelector('.notification')

let fade = (element) => {
    let opacity = 1;  // initial opacity
    let timer = setInterval( () => {
        if (opacity <= 0.025) {
            clearInterval(timer);
            element.style.display = 'none';
        }
        element.style.opacity = opacity;
        element.style.filter = 'alpha(opacity=' + opacity * 100 + ")";
        opacity -= opacity * 0.1;
    }, 12.5);
}

let showNotification = () => {
    notification.removeAttribute('style')
    setTimeout(() => fade(notification), 5000)
}