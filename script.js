// Scroll to top button
const scrollUpBtn = document.querySelector('.scroll-up-btn');

window.addEventListener('scroll', () => {
  if (window.scrollY > 500) {
    scrollUpBtn.style.display = 'block';
  } else {
    scrollUpBtn.style.display = 'none';
  }
});

scrollUpBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Navbar menu toggle
const menuBtn = document.querySelector('.menu-btn');
const navbarMenu = document.querySelector('.menu');

menuBtn.addEventListener('click', () => {
  navbarMenu.classList.toggle('active');
  menuBtn.classList.toggle('active');
});

// Typed.js for typing animation
const typed = new Typed('.typing', {
  strings: ['Web Developer', 'Machine Learning Engineer', 'Python Developer'],
  typeSpeed: 100,
  backSpeed: 60,
  backDelay: 1500,
  loop: true,
});

const typed2 = new Typed('.typing-2', {
  strings: ['Web Development', 'Machine Learning', 'Python Programming'],
  typeSpeed: 100,
  backSpeed: 60,
  backDelay: 1500,
  loop: true,
});

// Owl Carousel for projects section
$('.projects-content').owlCarousel({
  loop: true,
  margin: 20,
  nav: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
});

// Waypoints for skills section
const skillsSection = document.querySelector('.skills');
const skillBars = document.querySelectorAll('.line');

window.addEventListener('scroll', () => {
  if (window.scrollY > skillsSection.offsetTop - 200) {
    skillBars.forEach((bar) => {
      bar.style.width = bar.getAttribute('data-width');
    });
  }
});

// Contact form submission
const contactForm = document.querySelector('form');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(contactForm);
  // Submit form data to server or API
  console.log(formData);
});
