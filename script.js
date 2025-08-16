const NAMESPACE = "northern-lights-consulting-demo";
const KEY = "site-counter";
const BASE = "https://api.countapi.dev";

function updateDisplay(n) {
  const el = document.getElementById('count-display');
  if (el) el.textContent = n;
}
function showError(msg) {
  const el = document.getElementById('count-error');
  if (el) el.textContent = msg;
}

document.addEventListener('DOMContentLoaded', function() {
  // Get current count
  fetch(`${BASE}/get/${NAMESPACE}/${KEY}`)
    .then(res => res.json())
    .then(data => updateDisplay(data.value))
    .catch(() => showError("Error"));

  const btn = document.getElementById('increment-btn');
  if (btn) {
    btn.addEventListener('click', function() {
      fetch(`${BASE}/hit/${NAMESPACE}/${KEY}`)
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
