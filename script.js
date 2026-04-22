/* ===== NAVBAR ===== */
const navbar = document.getElementById(‘navbar’);
const navToggle = document.getElementById(‘navToggle’);
const navLinks = document.getElementById(‘navLinks’);

window.addEventListener(‘scroll’, () => {
if (window.scrollY > 20) {
navbar.classList.add(‘scrolled’);
} else {
navbar.classList.remove(‘scrolled’);
}
updateActiveNav();
});

navToggle.addEventListener(‘click’, () => {
navToggle.classList.toggle(‘open’);
navLinks.classList.toggle(‘open’);
});

// Close mobile nav on link click
navLinks.querySelectorAll(‘a’).forEach(link => {
link.addEventListener(‘click’, () => {
navToggle.classList.remove(‘open’);
navLinks.classList.remove(‘open’);
});
});

// ===== ACTIVE NAV =====
function updateActiveNav() {
const sections = document.querySelectorAll(‘section[id]’);
const links = document.querySelectorAll(’.nav-links a’);
let current = ‘’;

sections.forEach(section => {
const top = section.offsetTop - 100;
if (window.scrollY >= top) {
current = section.getAttribute(‘id’);
}
});

links.forEach(link => {
link.classList.remove(‘active’);
const href = link.getAttribute(‘href’)?.replace(’#’, ‘’);
if (href === current) {
link.classList.add(‘active’);
}
});
}

/* ===== REVEAL ON SCROLL ===== */
const reveals = document.querySelectorAll(’.reveal’);

const revealObserver = new IntersectionObserver((entries) => {
entries.forEach(entry => {
if (entry.isIntersecting) {
entry.target.classList.add(‘visible’);
}
});
}, {
threshold: 0.1,
rootMargin: ‘0px 0px -40px 0px’
});

reveals.forEach(el => revealObserver.observe(el));

/* ===== SKILL BARS ===== */
const skillFills = document.querySelectorAll(’.skill-fill’);

const skillObserver = new IntersectionObserver((entries) => {
entries.forEach(entry => {
if (entry.isIntersecting) {
const fill = entry.target;
const width = fill.getAttribute(‘data-width’);
setTimeout(() => {
fill.style.width = width + ‘%’;
}, 300);
skillObserver.unobserve(fill);
}
});
}, { threshold: 0.5 });

skillFills.forEach(fill => skillObserver.observe(fill));

/* ===== CONTACT FORM ===== */
const form = document.getElementById(‘contactForm’);
const formSuccess = document.getElementById(‘formSuccess’);

form.addEventListener(‘submit’, (e) => {
e.preventDefault();

const name = form.name.value.trim();
const email = form.email.value.trim();
const message = form.message.value.trim();

if (!name || !email || !message) return;

// Simulate form send (mailto fallback)
const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
window.location.href = `mailto:Agibaev.iskender@gmail.com?subject=${subject}&body=${body}`;

form.reset();
formSuccess.classList.add(‘show’);
setTimeout(() => formSuccess.classList.remove(‘show’), 5000);
});

/* ===== SMOOTH SCROLL for all anchor links ===== */
document.querySelectorAll(‘a[href^=”#”]’).forEach(anchor => {
anchor.addEventListener(‘click’, (e) => {
const target = document.querySelector(anchor.getAttribute(‘href’));
if (target) {
e.preventDefault();
const offset = 72;
const top = target.getBoundingClientRect().top + window.scrollY - offset;
window.scrollTo({ top, behavior: ‘smooth’ });
}
});
});

/* ===== HERO ENTRANCE ===== */
// Trigger hero reveals immediately since they’re above fold
window.addEventListener(‘DOMContentLoaded’, () => {
const heroReveals = document.querySelectorAll(’.hero .reveal’);
heroReveals.forEach(el => {
setTimeout(() => {
el.classList.add(‘visible’);
}, 100);
});
});
