function validateForm() {
    const nameInput = document.forms["form"]["full-name"].value;
    const emailInput = document.forms["form"]["e-mail"].value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (nameInput == "") {
        alert("Full name is required");
        return false;
    }

    if (emailRegex.test(emailInput)) {
        alert("Email is valid");
        return true;
    } else {
        alert("Please enter a valid email address");
        return false;
    }
}