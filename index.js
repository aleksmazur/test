const overlay = document.querySelector('.overlay');
const navList = document.querySelectorAll('.nav_list');
const humburger = document.querySelector('.humburger');
const menu = document.querySelector('.adaptive-menu');
const btnSend = document.querySelector('.btn_send');
const btnContact = document.querySelector('.btn_contact');
const contactFormTitle = document.querySelector('.contact-form_title');
const form = document.querySelector('.form');
const feedback = document.querySelector('.feedback');
const next = document.querySelector('.right_arrow');
const prev = document.querySelector('.left_arrow');
const slideWindow = document.querySelector('.slider_inner');

function toggleMenu() {
    menu.classList.toggle('adaptive-menu-active');
    overlay.classList.toggle('overlay-active');
}

function thankYou() {
    contactFormTitle.innerHTML = "Thank you. Your info has been successfully sent";
    form.classList.add('form-unactive');
    feedback.classList.add('feedback-active');
}

humburger.addEventListener('click', toggleMenu);
navList.forEach(item => {
    item.addEventListener('click', toggleMenu);
});
btnContact.addEventListener('click', (event) => {
    event.preventDefault();
    console.log(event.target);
    window.scrollTo(0, document.documentElement.scrollHeight);
});

form.addEventListener('submit', (event) => {
    event.preventDefault();
    thankYou();
});

menu.addEventListener('click', (event) => {
    console.log(event.target)
    if(event.target.classList.contains('btn_contact')) {
        toggleMenu();
        window.scrollTo(0, document.documentElement.scrollHeight);
    } else if (event.target.classList.contains('header_container') || event.target.classList.contains('close')) {
        toggleMenu();
    }
});

let offset = 0;
next.addEventListener('click', () => {
    offset += 285;
    if (offset > 855) {
        offset = 0;
    }
    slideWindow.style.left = -offset + 'px';
});

prev.addEventListener('click', () => {
    offset -= 285;
    if (offset < 0) {
        offset = 855;
    }
    slideWindow.style.left = -offset + 'px';
});