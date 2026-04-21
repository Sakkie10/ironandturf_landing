// FADE IN ON LOAD
window.addEventListener('load', () => {
  document.body.classList.add('loaded');
  revealOnScroll();
});

// HEADER SCROLL
const header = document.getElementById('siteHeader');

if (header) {
  const updateHeaderState = () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  updateHeaderState();
  window.addEventListener('scroll', updateHeaderState);
}

// VIDEO CONTROL
const video = document.getElementById('heroVideo');
const toggle = document.getElementById('videoToggle');

if (video && toggle) {
  const updateVideoButton = () => {
    if (video.paused) {
      toggle.textContent = '▶';
      toggle.classList.add('paused');
      toggle.setAttribute('aria-label', 'Play background video');
    } else {
      toggle.textContent = '❚❚';
      toggle.classList.remove('paused');
      toggle.setAttribute('aria-label', 'Pause background video');
    }
  };

  if (window.innerWidth < 768) {
    video.pause();
  }

  updateVideoButton();

  toggle.addEventListener('click', () => {
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }

    updateVideoButton();
  });
}

// SCROLL REVEAL
const revealElements = document.querySelectorAll('.reveal');

function revealOnScroll() {
  const triggerBottom = window.innerHeight * 0.88;

  revealElements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;

    if (elementTop < triggerBottom) {
      element.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);