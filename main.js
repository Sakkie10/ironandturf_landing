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

// Scroll-activated header
const header = document.getElementById('siteHeader');

window.addEventListener('scroll', () => {
  if (window.scrollY > 40) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Footer year
const yearSpan = document.getElementById('year');
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}


