import './Contact.css';

export const Contact = () => {
    const contactForm = document.querySelector(".contact>.container");
    const subContainer = document.createElement("div");
    contactForm.classList.add("contact-form");
    subContainer.classList.add("subcontainer");
    contactForm.appendChild(subContainer);
    
    //ul.setAttribute("class", "name");

    const h1 = document.createElement("h1");
    h1.classList.add("contact-h1");
    h1.innerText = "Contact Us";
    subContainer.appendChild(h1);

    let formGroup = [];
    let label = [];
    let input = [];
    for (let i = 0; i < 5; i++) {
        formGroup[i] = document.createElement("div");
        formGroup[i].classList.add("form-group");
        subContainer.appendChild(formGroup[i]);

        label[i] = document.createElement("label");
        label[i].setAttribute("for", "");
        formGroup[i].appendChild(label[i]);

        if (i < 3) {
            input[i] = document.createElement("input");
            input[i].setAttribute("type", "text");
            formGroup[i].appendChild(input[i]);
        }
    }
    input[3] = document.createElement("textarea");
    input[3].setAttribute("id", "message");
    input[3].setAttribute("placeholder", "Message");
    formGroup[3].appendChild(input[3]);

    label[0].innerText = "Your Name";
    input[0].setAttribute("id", "name");

    label[1].innerText = "Your Email";
    input[1].setAttribute("id", "email");

    label[2].innerText = "Subject";
    input[2].setAttribute("id", "subject");

    label[3].innerText = "Message";
    input[3].setAttribute("id", "message");

    const contactButton = document.createElement("button");
    contactButton.innerText = "Send Message";
    contactButton.classList.add("contact-button");
    //contactButton.setAttribute("onclick", "sendMessage();")
    formGroup[4].appendChild(contactButton);
}
