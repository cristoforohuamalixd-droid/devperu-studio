const menuBtn = document.getElementById('menuBtn');
const nav = document.querySelector('.nav');

menuBtn.addEventListener('click', () => {
    nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
});

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

const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = new FormData(this);
    const nombre = formData.get('nombre');
    const servicio = formData.get('servicio');
    const mensaje = formData.get('mensaje');
    
    const whatsappMessage = `Hola, soy ${nombre}. ${mensaje}. Servicio requerido: ${servicio}`;
    const whatsappUrl = `https://wa.me/51953771229?text=${encodeURIComponent(whatsappMessage)}`;
    
    alert('¡Mensaje listo! Serás redirigido a WhatsApp para enviar tu solicitud.');
    
    window.open(whatsappUrl, '_blank');
    
    this.reset();
});

window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.style.background = 'rgba(10, 10, 26, 0.95)';
        header.style.boxShadow = '0 5px 30px rgba(0,0,0,0.3)';
    } else {
        header.style.background = 'rgba(10, 10, 26, 0.9)';
        header.style.boxShadow = 'none';
    }
});

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

document.querySelectorAll('.servicio-card, .portafolio-item, .step, .precio-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
});
