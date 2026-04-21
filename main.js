// FADE IN ON LOAD
window.addEventListener('load', () => {
  document.body.classList.add('loaded');
});

// HEADER SCROLL
const header = document.getElementById('siteHeader');

if (header) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

// VIDEO CONTROL
const video = document.getElementById('heroVideo');
const toggle = document.getElementById('videoToggle');

if (video && toggle) {

  // Pause on mobile
  if (window.innerWidth < 768) {
    video.pause();
    toggle.textContent = '▶';
  }

  toggle.addEventListener('click', () => {
    if (video.paused) {
      video.play();
      toggle.textContent = '❚❚';
      toggle.classList.remove('paused');
    } else {
      video.pause();
      toggle.textContent = '▶';
      toggle.classList.add('paused');
    }
  });
}

// SCROLL REVEAL
const revealElements = document.querySelectorAll('.reveal');

const revealOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.85;

  revealElements.forEach(el => {
    const top = el.getBoundingClientRect().top;

    if (top < triggerBottom) {
      el.classList.add('visible');
    }
  });
};

window.addEventListener('scroll', revealOnScroll);