// Dark Mode Toggle
const darkModeToggle = document.getElementById('darkModeToggle');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const userPref = localStorage.getItem('novaTechDark');
if (userPref === 'dark' || (!userPref && prefersDark)) {
  document.body.classList.add('dark');
}

function updateToggleIcon() {
  if (document.body.classList.contains('dark')) {
    darkModeToggle.setAttribute('aria-label', 'Switch to light mode');
  } else {
    darkModeToggle.setAttribute('aria-label', 'Switch to dark mode');
  }
}

darkModeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  const isDark = document.body.classList.contains('dark');
  localStorage.setItem('novaTechDark', isDark ? 'dark' : 'light');
  updateToggleIcon();
});
updateToggleIcon();

// Contact Form Validation
const form = document.getElementById('contactForm');
const nameEl = document.getElementById('name');
const emailEl = document.getElementById('email');
const messageEl = document.getElementById('message');
const nameErr = document.getElementById('nameError');
const emailErr = document.getElementById('emailError');
const messageErr = document.getElementById('messageError');
const formSuccess = document.getElementById('formSuccess');

function validateEmail(email) {
  // Simple RFC 5322 compliant regex
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
function clearErrors() {
  nameErr.textContent = '';
  emailErr.textContent = '';
  messageErr.textContent = '';
  formSuccess.textContent = '';
}
form.addEventListener('submit', function(e) {
  e.preventDefault();
  clearErrors();
  let valid = true;
  if (!nameEl.value.trim()) {
    nameErr.textContent = 'Please enter your name.';
    valid = false;
  }
  if (!emailEl.value.trim()) {
    emailErr.textContent = 'Please enter your email.';
    valid = false;
  } else if (!validateEmail(emailEl.value.trim())) {
    emailErr.textContent = 'Enter a valid email address.';
    valid = false;
  }
  if (!messageEl.value.trim()) {
    messageErr.textContent = 'Please enter a message.';
    valid = false;
  }
  if (valid) {
    formSuccess.textContent = 'Thank you for reaching out! We\'ll get back to you soon.';
    form.reset();
    setTimeout(() => { formSuccess.textContent = ''; }, 6000);
  }
});

// Scroll-triggered animations
function revealOnScroll() {
  const elements = document.querySelectorAll('[data-animate]');
  const trigger = window.innerHeight * 0.93;
  elements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < trigger) {
      el.classList.add('visible');
    }
  });
}
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('resize', revealOnScroll);
window.addEventListener('DOMContentLoaded', revealOnScroll);