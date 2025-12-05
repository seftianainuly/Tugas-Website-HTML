// Toggle class active
const navbarNav = document.querySelector('.navbar-nav');

//Klik humberger menu
document.querySelector('#humberger-menu').
onclick = () => {
    navbarNav.classList.toggle('active');
};

// Klik diluar side bar
const humberger = document.querySelector('#humberger-menu');

document.addEventListener('click',function (e) {
    if(!humberger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
});