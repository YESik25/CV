// Smooth scrolling for navigation links
document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        if (this.getAttribute('href').startsWith('#')) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            window.scrollTo({
                top: targetSection.offsetTop - 70,
                behavior: 'smooth'
            });
            document.querySelector('.mobile-menu').classList.remove('active');
        }
    });
});

// Toggle mobile menu
document.querySelector('.hamburger').addEventListener('click', () => {
    document.querySelector('.mobile-menu').classList.toggle('active');
});

// Add animation trigger for sections when they come into view
const sections = document.querySelectorAll('.section');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
            entry.target.classList.add('animated');
            // Animate progress bars
            entry.target.querySelectorAll('.progress').forEach(bar => {
                const width = bar.style.width;
                bar.style.width = '0';
                setTimeout(() => { bar.style.width = width; }, 100);
            });
        }
    });
}, { threshold: 0.3 });


sections.forEach(section => observer.observe(section));