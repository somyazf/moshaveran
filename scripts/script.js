const navToggler = document.querySelector('.nav-toggler');
const navMenu = document.querySelector('.main-menu > ul');
const navLinks = document.querySelectorAll('.main-menu > ul a');
// load all event listners
allEventListners();

// functions of all event listners
function allEventListners() {
    // toggler icon click event
    navToggler.addEventListener('click', togglerClick);
    // nav links click event
    navLinks.forEach( elem => elem.addEventListener('click', navTogglerClick));
}

// togglerClick function
function togglerClick() {
    navToggler.classList.toggle('toggler-open');
    navMenu.classList.toggle('open');
}

// navTogglerClick function
function navTogglerClick() {
    if(navMenu.classList.contains('open')) {
        navToggler.click();
    }
}
