/* Get the hamburger menu button and the navigation links */
const menuBtn = document.querySelector('.navbar .menu-btn');
const navLinks = document.querySelector('.navbar .nav-links');

/* Toggle the navigation links visibility on click */
menuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

/* Smooth scrolling to anchor links */
const anchorLinks = document.querySelectorAll('a[href^="#"]');
anchorLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});
