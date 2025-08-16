// Simple contact form submission (no backend, just an example)
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    const formMsg = document.getElementById('form-message');
    if(form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            formMsg.textContent = "Thank you for your message! We'll be in touch soon.";
            formMsg.style.color = "#30475e";
            form.reset();
        });
    }
});
