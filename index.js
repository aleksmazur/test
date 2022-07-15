const overlay = document.querySelector('.overlay');
const navList = document.querySelector('.nav_list');
const humburger = document.querySelector('.humburger');
const menu = document.querySelector('.adaptive-menu');
const btn = document.querySelector('.btn_long');
const contactFormTitle = document.querySelector('.contact-form_title');
const form = document.querySelector('.form');
const feedback = document.querySelector('.feedback');

function openMenu() {
    menu.classList.toggle('adaptive-menu-active');
    overlay.classList.toggle('overlay-active');
}

function thankYou() {
    contactFormTitle.innerHTML = "Thank you. Your info has been successfully sent";
    form.classList.add('form-unactive');
    feedback.classList.add('feedback-active');
}

humburger.addEventListener('click', openMenu);
btn.addEventListener('click', (event) => {
    event.preventDefault();
    thankYou();
});
