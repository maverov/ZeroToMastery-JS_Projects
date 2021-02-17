const form = document.getElementById("form");
const password1El = document.getElementById("password1");
const password2El = document.getElementById("password2");
const messageContainer = document.querySelector("#message");
const message = document.getElementById("message");

let isValid = false;
let passwordsMatch = false;

function validateForm() {
    // Using Contraint API
    isValid = form.checkValidity();
    if (!isValid) {
        // Style main message for an error
        message.textContent = "Please fill out all fields.";
        message.style.color = "red";
        messageContainer.style.borderColor = "red";
    }
    // Check to see if passwords match
    if (password1El.value === password2El) {
        passwordsMatch = true;
        password1El.style.borderColor = "green";
        password2El.style.borderColor = "green";
    } else {
        passwordsMatch = true;
        message.textContent = "Make sure passwords match.";
        message.style.color = "red";
        messageContainer.style.borderColor = "red";
        password1El.style.borderColor = "red";
        password2El.style.borderColor = "red";
        return;
    }
    // If form is vaid and passwords match
    if (isValid && passwordsMatch) {
        message.textContent = "Successfully Registered!";
        message.style.color = "green";
        messageContainer.style.borderColor = "green";
    }
}

function processFormData(e) {
    e.preventDefault();

    validateForm();
}

// Event Listener
form.addEventListener("submit", processFormData);