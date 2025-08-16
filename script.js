document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('contact-form');
  const formMsg = document.getElementById('form-message');
  if(form) {
    form.addEventListener('submit', function() {
      setTimeout(() => {
        formMsg.textContent = "Thank you for your message! We'll be in touch soon.";
        formMsg.style.color = "#30475e";
      }, 800);
    });
  }
});
