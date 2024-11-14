var _a;
(_a = document.getElementById('contactForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    if (name && email && message) {
        var formMessage = document.getElementById('formMessage');
        if (formMessage) {
            formMessage.textContent = "Thank you for reaching out! We will get back to you soon.";
        }
    }
    else {
        alert("Please fill out all fields.");
    }
});
