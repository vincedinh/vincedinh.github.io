/* eslint-disable @typescript-eslint/no-unused-vars */
function adjustNavbar() {
    const element = document.querySelector('.navbar');
    if (element.className === 'navbar') {
        element.className += ' responsive';
    }
    else {
        element.className = 'navbar';
    }
}
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.navbar a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substr(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});
