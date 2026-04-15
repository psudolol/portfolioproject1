// Navbar - add shadow and shrink on scroll
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.padding = '0.5rem 5%';
        nav.style.boxShadow = '0 2px 20px rgba(0,0,0,0.15)';
    } else {
        nav.style.padding = '1rem 5%';
        nav.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    }
});

// Contact form - show success message on submit
const form = document.querySelector('.contact-form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    form.innerHTML = `
        <div style="text-align: center; padding: 2rem;">
            <div style="font-size: 3rem;">✅</div>
            <h3 style="margin: 1rem 0; color: #1a73e8;">Message Sent!</h3>
            <p style="color: #666;">Thanks for getting in touch. We'll get back to you within the hour.</p>
        </div>
    `;
});

// Fade in sections as you scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});