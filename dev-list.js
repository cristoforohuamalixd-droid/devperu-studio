document.addEventListener('DOMContentLoaded', function() {
    var devGrid = document.getElementById('devGrid');
    var noDevs = document.getElementById('noDevs');
    
    // Load developers from localStorage
    var developers = JSON.parse(localStorage.getItem('developers') || '[]');
    
    // Add sample developers if empty
    if (developers.length === 0) {
        developers = [
            {
                id: 1,
                name: 'Carlos García',
                bio: 'Desarrollador web con 3 años de experiencia en Landing Pages y Sitios Corporativos.',
                skills: ['landing', 'web', 'wordpress'],
                payments: [
                    { type: 'Yape', name: 'Carlos G.', number: '999888777' },
                    { type: 'Plin', name: 'Carlos García', number: '999888777' }
                ],
                prices: { landing: '150', corporativo: '250', ecommerce: '380' }
            },
            {
                id: 2,
                name: 'María López',
                bio: 'Especialista en E-commerce y tiendas online. Trabajo con WooCommerce y Shopify.',
                skills: ['ecommerce', 'web', 'wordpress'],
                payments: [
                    { type: 'Yape', name: 'María L.', number: '988777666' },
                    { type: 'BCP', account: '123-456-789', holder: 'María López' }
                ],
                prices: { landing: '180', corporativo: '300', ecommerce: '450' }
            },
            {
                id: 3,
                name: 'Juan Torres',
                bio: 'Full stack developer. Creo apps web a medida con React y Node.js.',
                skills: ['app', 'web', 'react'],
                payments: [
                    { type: 'Yape', name: 'Juan T.', number: '977666555' },
                    { type: 'Plin', name: 'Juan Torres', number: '977666555' },
                    { type: 'Interbank', account: '987-654-321', holder: 'Juan Torres' }
                ],
                prices: { landing: '200', corporativo: '350', ecommerce: '500' }
            }
        ];
        localStorage.setItem('developers', JSON.stringify(developers));
    }
    
    // Render developers
    function renderDevs(filter) {
        devGrid.innerHTML = '';
        
        var filtered = filter === 'all' 
            ? developers 
            : developers.filter(function(dev) { return dev.skills.indexOf(filter) !== -1; });
        
        if (filtered.length === 0) {
            noDevs.style.display = 'block';
            return;
        }
        
        noDevs.style.display = 'none';
        
        filtered.forEach(function(dev) {
            var initials = dev.name.split(' ').map(function(n) { return n[0]; }).join('').toUpperCase();
            
            var skillsHtml = dev.skills.map(function(s) {
                var labels = {
                    landing: 'Landing',
                    web: 'Sitios Web',
                    ecommerce: 'E-commerce',
                    app: 'Apps',
                    wordpress: 'WordPress',
                    react: 'React'
                };
                return '<span class="dev-skill">' + (labels[s] || s) + '</span>';
            }).join('');
            
            var paymentsHtml = dev.payments.map(function(p) {
                return '<span class="dev-payment-method">' + p.type + '</span>';
            }).join('');
            
            var pricesHtml = '';
            if (dev.prices) {
                pricesHtml = '<div class="dev-prices"><h4>Precios:</h4>';
                if (dev.prices.landing) pricesHtml += '<div class="price-row"><span>Landing Page</span><span>S/ ' + dev.prices.landing + '</span></div>';
                if (dev.prices.corporativo) pricesHtml += '<div class="price-row"><span>Sitio Corporativo</span><span>S/ ' + dev.prices.corporativo + '</span></div>';
                if (dev.prices.ecommerce) pricesHtml += '<div class="price-row"><span>E-commerce</span><span>S/ ' + dev.prices.ecommerce + '</span></div>';
                pricesHtml += '</div>';
            }
            
            var whatsappMessage = encodeURIComponent('Hola ' + dev.name + ', vi tu perfil en DevPerú Studio y me interesa contratar tus servicios.');
            var whatsappUrl = 'https://wa.me/51' + dev.phone + '?text=' + whatsappMessage;
            
            var card = document.createElement('div');
            card.className = 'dev-card';
            card.innerHTML = 
                '<div class="dev-card-header">' +
                    '<div class="dev-avatar">' + initials + '</div>' +
                    '<div>' +
                        '<div class="dev-name">' + dev.name + '</div>' +
                        '<div class="dev-status">● Disponible</div>' +
                    '</div>' +
                '</div>' +
                '<div class="dev-bio">' + (dev.bio || 'Desarrollador web profesional') + '</div>' +
                '<div class="dev-skills">' + skillsHtml + '</div>' +
                pricesHtml +
                '<div class="dev-payment-methods">' + paymentsHtml + '</div>' +
                '<div class="dev-actions">' +
                    '<a href="' + whatsappUrl + '" target="_blank" class="btn btn-primary">💬 Contactar</a>' +
                    '<a href="https://wa.me/51' + dev.phone + '?text=' + encodeURIComponent('Hola, quiero pagar por un proyecto.') + '" target="_blank" class="btn btn-outline">💰 Pagar</a>' +
                '</div>';
            
            devGrid.appendChild(card);
        });
    }
    
    // Initial render
    renderDevs('all');
    
    // Filter buttons
    document.querySelectorAll('.filter-btn').forEach(function(btn) {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.filter-btn').forEach(function(b) { b.classList.remove('active'); });
            this.classList.add('active');
            renderDevs(this.dataset.filter);
        });
    });
});
