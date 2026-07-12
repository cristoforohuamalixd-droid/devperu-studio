document.addEventListener('DOMContentLoaded', function() {

    // Mobile menu toggle
    const menuBtn = document.getElementById('menuBtn');
    const nav = document.querySelector('.nav');
    
    if (menuBtn) {
        menuBtn.addEventListener('click', function() {
            if (nav.style.display === 'flex') {
                nav.style.display = 'none';
            } else {
                nav.style.display = 'flex';
                nav.style.flexDirection = 'column';
                nav.style.position = 'absolute';
                nav.style.top = '100%';
                nav.style.left = '0';
                nav.style.right = '0';
                nav.style.background = 'rgba(10, 10, 26, 0.98)';
                nav.style.padding = '20px';
                nav.style.gap = '15px';
                nav.style.borderBottom = '1px solid rgba(108, 92, 231, 0.3)';
            }
        });
    }

    // Smooth scroll for all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
            var href = this.getAttribute('href');
            if (href === '#') return;
            
            e.preventDefault();
            var target = document.querySelector(href);
            if (target) {
                var headerHeight = document.querySelector('.header').offsetHeight;
                var targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
            
            // Close mobile menu after click
            if (nav) {
                nav.style.display = '';
            }
        });
    });

    // Contact form submission
    var contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            var formData = new FormData(this);
            var nombre = formData.get('nombre');
            var servicio = formData.get('servicio');
            var mensaje = formData.get('mensaje');
            
            var whatsappMessage = 'Hola, soy ' + nombre + '. ' + mensaje + '. Servicio requerido: ' + servicio;
            var whatsappUrl = 'https://wa.me/51953771229?text=' + encodeURIComponent(whatsappMessage);
            
            window.open(whatsappUrl, '_blank');
            this.reset();
        });
    }

    // Header scroll effect
    window.addEventListener('scroll', function() {
        var header = document.querySelector('.header');
        if (window.scrollY > 50) {
            header.style.background = 'rgba(10, 10, 26, 0.98)';
            header.style.boxShadow = '0 5px 30px rgba(0,0,0,0.3)';
        } else {
            header.style.background = 'rgba(10, 10, 26, 0.9)';
            header.style.boxShadow = 'none';
        }
    });

    // Animate elements on scroll
    var animatedElements = document.querySelectorAll('.servicio-card, .step, .precio-card');
    
    function checkVisible() {
        animatedElements.forEach(function(el) {
            var rect = el.getBoundingClientRect();
            var windowHeight = window.innerHeight;
            if (rect.top < windowHeight - 50) {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }
        });
    }

    animatedElements.forEach(function(el) {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });

    window.addEventListener('scroll', checkVisible);
    checkVisible();

});
