// ========================================
// PORTFOLIO INTERACTIVITY
// ========================================

// Set current year in footer
document.getElementById('currentYear').textContent = new Date().getFullYear();

// ========================================
// HEADER SCROLL EFFECT
// ========================================
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// ========================================
// MOBILE MENU TOGGLE
// ========================================
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileNav = document.getElementById('mobileNav');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenuBtn.classList.toggle('active');
    mobileNav.classList.toggle('active');
});

// Close mobile menu when clicking on a link
const mobileNavLinks = mobileNav.querySelectorAll('.nav-link');
mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenuBtn.classList.remove('active');
        mobileNav.classList.remove('active');
    });
});

// ========================================
// SMOOTH SCROLL FOR NAVIGATION
// ========================================
const navLinks = document.querySelectorAll('a[href^="#"]');
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        const targetId = link.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            e.preventDefault();
            const headerHeight = header.offsetHeight;
            const targetPosition = targetElement.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ========================================
// SCROLL REVEAL
// ========================================
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            revealObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.08,
    rootMargin: '0px 0px -40px 0px'
});

document.querySelectorAll(
    '.section-header, .timeline-item, .project-card, .skills-group, .large-text, .contact-info, .contact-links, .contact-title'
).forEach((el, i) => {
    el.classList.add('reveal');
    el.style.transitionDelay = `${(i % 4) * 0.08}s`;
    revealObserver.observe(el);
});

console.log('%cHanisha\'s Portfolio', 'color: #1A1A1A; font-size: 24px; font-weight: bold;');
console.log('%cBuilt with HTML, CSS, and JavaScript', 'color: #666; font-size: 12px;');
