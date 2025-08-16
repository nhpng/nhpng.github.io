// Website Counter using countapi.xyz
const NAMESPACE = "northern-lights-consulting-demo"; // Change to something unique if you want!
const KEY = "site-counter";

// Counter logic
function updateDisplay(n) {
  const el = document.getElementById('count-display');
  if (el) el.textContent = n;
}
function showError(msg) {
  const el = document.getElementById('count-error');
  if (el) el.textContent = msg;
}

document.addEventListener('DOMContentLoaded', function() {
  // Counter fetch
  const display = document.getElementById('count-display');
  const btn = document.getElementById('increment-btn');
  // Get current count
  fetch(`https://api.countapi.xyz/get/${NAMESPACE}/${KEY}`)
    .then(res => res.json())
    .then(data => updateDisplay(data.value))
    .catch(() => updateDisplay("Error"));

  // Increment on button click
  if (btn) {
    btn.addEventListener('click', function() {
      fetch(`https://api.countapi.xyz/update/${NAMESPACE}/${KEY}/?amount=1`)
        .then(res => res.json())
        .then(data => updateDisplay(data.value))
        .catch(() => showError("Failed to increment"));
    });
  }

  // Contact form thank you message
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
