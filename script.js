const COUNTER_API = "https://bold-frog-576d.nhpng1.workers.dev/counter"; // Replace later!

function updateDisplay(n) {
  const el = document.getElementById('count-display');
  if (el) el.textContent = n;
}
function showError(msg) {
  const el = document.getElementById('count-error');
  if (el) el.textContent = msg;
}

document.addEventListener('DOMContentLoaded', function() {
  fetch(COUNTER_API)
    .then(res => res.json())
    .then(data => updateDisplay(data.count))
    .catch(() => showError("Error"));

  const btn = document.getElementById('increment-btn');
  if (btn) {
    btn.addEventListener('click', function() {
      fetch(COUNTER_API, { method: "POST" })
        .then(res => res.json())
        .then(data => updateDisplay(data.count))
        .catch(() => showError("Failed to increment"));
    });
  }
});
