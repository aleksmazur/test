const overlay = document.querySelector('.overlay');
const navList = document.querySelectorAll('.nav_list');
const humburger = document.querySelector('.humburger');
const menu = document.querySelector('.adaptive-menu');
const btnSend = document.querySelector('.btn_send');
const btnContact = document.querySelector('.btn_contact');
const contactFormTitle = document.querySelector('.contact-form_title');
const form = document.querySelector('.form');
const feedback = document.querySelector('.feedback');

function openMenu() {
    menu.classList.toggle('adaptive-menu-active');
    overlay.classList.toggle('overlay-active');
    // if (!humburger.classList.contains('humburger-active')) {
    //     humburger.classList.add('humburger-active');
    // }
}

function thankYou() {
    contactFormTitle.innerHTML = "Thank you. Your info has been successfully sent";
    form.classList.add('form-unactive');
    feedback.classList.add('feedback-active');
}

humburger.addEventListener('click', openMenu);
navList.forEach(item => {
    item.addEventListener('click', openMenu);
});
btnContact.addEventListener('click', (event) => {
    event.preventDefault();
    console.log(event.target);
    window.scrollTo(0, document.documentElement.scrollHeight);
});
btnSend.addEventListener('click', (event) => {
    event.preventDefault();
    thankYou();
});
menu.addEventListener('click', (event) => {
    console.log(event.target)
    if(event.target.classList.contains('btn_contact')) {
        openMenu();
        window.scrollTo(0, document.documentElement.scrollHeight);
    } else if (event.target.classList.contains('header_container') || event.target.classList.contains('close')) {
        openMenu();
    }
})
