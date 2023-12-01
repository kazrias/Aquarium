import './Contact.css';

export const Contact = () => {
    const contactForm = document.querySelector('.contact>.container');
    const form = document.createElement('div');

    contactForm.classList.add("contact-form")

    contactForm.innerText = "ankap string";

    contactForm.append(form);
}
