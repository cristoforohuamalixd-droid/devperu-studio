document.addEventListener('DOMContentLoaded', function() {

    // Mobile menu toggle
    var menuBtn = document.getElementById('menuBtn');
    var nav = document.querySelector('.nav');
    
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
                nav.style.zIndex = '999';
            }
        });
    }

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
            var href = this.getAttribute('href');
            if (href === '#') return;
            e.preventDefault();
            var target = document.querySelector(href);
            if (target) {
                var headerHeight = document.querySelector('.header').offsetHeight;
                var targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                window.scrollTo({ top: targetPosition, behavior: 'smooth' });
            }
            if (nav) nav.style.display = '';
        });
    });

    // Contact form → WhatsApp
    var contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            var formData = new FormData(this);
            var nombre = formData.get('nombre');
            var servicio = formData.get('servicio');
            var mensaje = formData.get('mensaje');
            var whatsappMessage = 'Hola, soy ' + nombre + '. ' + mensaje + '. Servicio: ' + servicio;
            window.open('https://wa.me/51953771229?text=' + encodeURIComponent(whatsappMessage), '_blank');
            this.reset();
        });
    }

    // Header scroll
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

    // Theme toggle
    var themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        var savedTheme = localStorage.getItem('devperu-theme');
        if (savedTheme === 'light') {
            document.body.classList.add('light');
            themeToggle.textContent = '☀️';
        }
        themeToggle.addEventListener('click', function() {
            document.body.classList.toggle('light');
            var isLight = document.body.classList.contains('light');
            themeToggle.textContent = isLight ? '☀️' : '🌙';
            localStorage.setItem('devperu-theme', isLight ? 'light' : 'dark');
        });
    }

    // Scroll reveal
    var revealElements = document.querySelectorAll('.servicio-card, .step, .precio-card, .portfolio-card, .testimonio-card, .faq-item, .stat, .cotizador-card');
    revealElements.forEach(function(el) { el.classList.add('reveal'); });

    function checkReveal() {
        revealElements.forEach(function(el) {
            var rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight - 60) {
                el.classList.add('visible');
            }
        });
    }
    window.addEventListener('scroll', checkReveal);
    checkReveal();

});

// Cotizador
var cotPrices = { landing: 150, corporativo: 280, ecommerce: 400, app: 400 };
var cotNames = { landing: 'Landing Page', corporativo: 'Sitio Corporativo', ecommerce: 'E-commerce', app: 'App Web a Medida' };

function cotNext(step) {
    document.getElementById('cotStep1').style.display = step === 1 ? 'block' : 'none';
    document.getElementById('cotStep2').style.display = step === 2 ? 'block' : 'none';
    document.getElementById('cotStep3').style.display = step === 3 ? 'block' : 'none';
    document.querySelectorAll('.cot-step').forEach(function(el) {
        var s = parseInt(el.dataset.step);
        el.classList.toggle('active', s <= step);
    });
    if (step === 3) cotCalculate();
}

function cotCalculate() {
    var tipo = document.querySelector('input[name="tipo"]:checked').value;
    var total = cotPrices[tipo] || 150;
    var extrasDiv = document.getElementById('cotResultExtras');
    extrasDiv.innerHTML = '';
    var extras = [
        { id: 'extraSeo', name: 'SEO Básico', price: 50 },
        { id: 'extraForm', name: 'Formulario Avanzado', price: 40 },
        { id: 'extraAnim', name: 'Animaciones', price: 60 },
        { id: 'extraAdmin', name: 'Panel Admin', price: 120 },
        { id: 'extraMulti', name: 'Multi-idioma', price: 80 },
        { id: 'extraChat', name: 'Chat en Vivo', price: 50 }
    ];
    extras.forEach(function(ex) {
        if (document.getElementById(ex.id).checked) {
            total += ex.price;
            extrasDiv.innerHTML += '<span>' + ex.name + ' +S/' + ex.price + '</span>';
        }
    });
    document.getElementById('cotResultType').textContent = cotNames[tipo];
    document.getElementById('cotResultPrice').textContent = 'S/ ' + total;
}

// FAQ toggle
function toggleFaq(btn) {
    var item = btn.parentElement;
    var wasOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(function(el) { el.classList.remove('open'); });
    if (!wasOpen) item.classList.add('open');
}
