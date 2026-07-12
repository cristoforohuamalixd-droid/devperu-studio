// Mobile menu toggle
const menuBtn = document.getElementById('menuBtn');
const nav = document.querySelector('.nav');

menuBtn.addEventListener('click', () => {
    nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Form submission
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = new FormData(this);
    const nombre = formData.get('nombre');
    const email = formData.get('email');
    const servicio = formData.get('servicio');
    const mensaje = formData.get('mensaje');
    
    // Create WhatsApp message
    const whatsappMessage = `Hola, soy ${nombre}. ${mensaje}. Servicio requerido: ${servicio}`;
    const whatsappUrl = `https://wa.me/51999999999?text=${encodeURIComponent(whatsappMessage)}`;
    
    // Show success message
    alert('¡Mensaje listo! Serás redirigido a WhatsApp para enviar tu solicitud.');
    
    // Open WhatsApp (uncomment when you have a real number)
    // window.open(whatsappUrl, '_blank');
    
    // Reset form
    this.reset();
});

// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255,255,255,0.95)';
        header.style.backdropFilter = 'blur(10px)';
    } else {
        header.style.background = '#ffffff';
        header.style.backdropFilter = 'none';
    }
});

// Animate elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards and sections
document.querySelectorAll('.servicio-card, .portafolio-item, .step, .precio-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
});
