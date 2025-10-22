// Smooth scroll
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
  });
});

// Fade-in animation on scroll
const faders = document.querySelectorAll('.fade-in');
const appearOnScroll = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      appearOnScroll.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });
faders.forEach(fader => appearOnScroll.observe(fader));

// Theme toggle (light/dark)
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
  themeToggle.textContent =
    document.body.classList.contains('light-mode') ? '☀️' : '🌙';
});
