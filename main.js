// Scroll-activated header
const header = document.getElementById('siteHeader');

window.addEventListener('scroll', () => {
  if (window.scrollY > 40) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Video toggle
const video = document.getElementById('heroVideo');
const toggle = document.getElementById('videoToggle');

toggle.addEventListener('click', () => {
  if (video.paused) {
    video.play();
    toggle.textContent = '❚❚';
  } else {
    video.pause();
    toggle.textContent = '▶';
  }
});
