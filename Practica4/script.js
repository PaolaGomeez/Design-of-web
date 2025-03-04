document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("userForm");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const phoneInput = document.getElementById("phone");

    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const phoneError = document.getElementById("phoneError");

    function validateName() {
        if (nameInput.value.trim() === "") {
            nameError.textContent = "Name is required";
            return false;
        }
        nameError.textContent = "";
        return true;
    }

    function validateEmail() {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailInput.value.trim())) {
            emailError.textContent = "Invalid email format";
            return false;
        }
        emailError.textContent = "";
        return true;
    }

    function validatePhone() {
        const phonePattern = /^\d{10}$/;
        if (!phonePattern.test(phoneInput.value.trim())) {
            phoneError.textContent = "Phone number must be 10 digits";
            return false;
        }
        phoneError.textContent = "";
        return true;
    }

    nameInput.addEventListener("input", validateName);
    emailInput.addEventListener("input", validateEmail);
    phoneInput.addEventListener("input", validatePhone);

    form.addEventListener("submit", (event) => {
        if (!validateName() || !validateEmail() || !validatePhone()) {
            event.preventDefault();
        }
    });
});