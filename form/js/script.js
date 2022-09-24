import "/style.css";

const contactForm = document.querySelector("#contact-form");
const firstName = document.querySelector("#firstName");
const firstNameError = document.querySelector("#firstNameError");
const lastName = document.querySelector("#lastName");
const lastNameError = document.querySelector("#lastNameError");
const email = document.querySelector("#email");
// console.log(firstName);
//console.log(contactForm);
// console.log(firstNameError);
// console.log(lastName);
// console.log(email);
contactForm.addEventListener("submit", function(event){
    // console.log("here i clicked");
    event.preventDefault();

    // console.log("firstName", firstName.value);
   
    if(firstName.value.trim().length > 0){
        firstNameError.classList.add("hidden")
    } else {
       firstNameError.classList.remove("hidden")
    }
    if(lastName.value.trim().length > 3){
        lastNameError.classList.add("hidden")
    } else {
        lastNameError.classList.remove("hidden")
    }
})

