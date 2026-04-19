// Hero video pause / play toggle
const video = document.getElementById('heroVideo');
const toggle = document.getElementById('videoToggle');

if (video && toggle) {
  toggle.addEventListener('click', () => {
    if (video.paused) {
      video.play();
      toggle.textContent = '❚❚'; // pause icon
    } else {
      video.pause();
      toggle.textContent = '▶'; // play icon
    }
  });
}

// Footer year
const yearSpan = document.getElementById('year');
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}
