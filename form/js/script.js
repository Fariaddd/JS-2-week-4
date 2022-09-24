import "/style.css";

const contactForm = document.querySelector("#contact-form");
const firstName = document.querySelector("#firstName");
const firstNameError = document.querySelector("#firstNameError");
const lastName = document.querySelector("#lastName");
const lastNameError = document.querySelector("#lastNameError");
const emailError = document.querySelector("#emailError")
const emailErrorNotValid = document.querySelector("#emailErrorNotValid")
const email = document.querySelector("#email");

contactForm.addEventListener("submit", function(event){
    event.preventDefault();
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
    if(email.value.trim().length && validateEmail(email.value) === true){
        emailErrorNotValid.classList.add("hidden")
    } 
     else if (email.value.trim().length && validateEmail(email.value) !== true){
        emailErrorNotValid.classList.remove("hidden")
    }
    if(email.value.trim().length > 0){
        emailError.classList.add("hidden")
    } else{
        emailError.classList.remove("hidden")
    }
})
function validateEmail(email){
    const regEx =   /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if(email.match(regEx)){
        return true;
    } else{
        return false;
    }     // or return !!email.match(regEx) instead of using if() statment
}
