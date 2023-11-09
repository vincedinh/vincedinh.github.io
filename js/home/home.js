document.addEventListener("DOMContentLoaded", function () {
    const element = document.getElementById('heroImg');
    if (element.id === 'heroImg') {
        element.className += ' responsive';
    }
    else {
        element.className = '';
    }
    const dividers = document.getElementsByClassName('divider');
    const dividerArray = Array.from(dividers);
    if (window.innerWidth <= 600) {
        dividerArray.forEach(divider => {
            divider.textContent = 'a';
        });
    }
    else {
        dividerArray.forEach(divider => {
            divider.textContent = 'fad';
        });
    }
});
