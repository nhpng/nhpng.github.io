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

// Replace with the actual URL of your backend!
const COUNTER_API = "https://your-backend-url.com/counter";

function updateDisplay(n) {
  document.getElementById('count-display').textContent = n;
}

function showError(msg) {
  document.getElementById('count-error').textContent = msg;
}

document.addEventListener('DOMContentLoaded', function() {
  fetch(COUNTER_API)
    .then(res => res.json())
    .then(data => updateDisplay(data.count))
    .catch(() => updateDisplay("Error"));

  document.getElementById('increment-btn').addEventListener('click', function() {
    fetch(COUNTER_API, { method: "POST" })
      .then(res => res.json())
      .then(data => updateDisplay(data.count))
      .catch(() => showError("Failed to increment"));
  });
});
