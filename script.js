// Simple contact form submission (no backend, just an example)
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    const formMsg = document.getElementById('form-message');
    if(form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const data = new FormData(form);
            fetch(form.action, {
                method: form.method,
                body: data,
                headers: {
                    'Accept': 'application/json'
                }
            }).then(response => {
                if (response.ok) {
                    formMsg.textContent = "Thank you for your message! We'll be in touch soon.";
                    formMsg.style.color = "#30475e";
                    form.reset();
                } else {
                    formMsg.textContent = "Oops! There was a problem submitting your form.";
                    formMsg.style.color = "red";
                }
            }).catch(() => {
                formMsg.textContent = "Oops! There was a problem submitting your form.";
                formMsg.style.color = "red";
            });
        });
    }
});
