document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('openNav').addEventListener('click', openNav);
    document.getElementById('closeNav').addEventListener('click', closeNav);
    function openNav() {
        document.getElementById('sideNav').style.width = '250px'; // Adjust the width as needed
    }
    function closeNav() {
        document.getElementById('sideNav').style.width = '0';
    }
});
