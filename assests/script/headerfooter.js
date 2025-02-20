document.addEventListener("DOMContentLoaded", () =>{
    const navBar = document.querySelector('.second-collasp-navbar');
    const hambIcon = document.querySelector('.hamburger-icon');

    hambIcon.addEventListener("click", () => {
        navBar.classList.toggle('active');
    });
});