document.addEventListener('DOMContentLoaded', function() {
    // Toggle payment fields
    document.getElementById('yapeEnabled').addEventListener('change', function() {
        document.getElementById('yapeFields').style.display = this.checked ? 'block' : 'none';
    });
    
    document.getElementById('plinEnabled').addEventListener('change', function() {
        document.getElementById('plinFields').style.display = this.checked ? 'block' : 'none';
    });
    
    document.getElementById('bankEnabled').addEventListener('change', function() {
        document.getElementById('bankFields').style.display = this.checked ? 'block' : 'none';
    });

    // Form submission
    document.getElementById('registerForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get skills
        var skills = [];
        document.querySelectorAll('input[name="skills"]:checked').forEach(function(cb) {
            skills.push(cb.value);
        });
        
        // Get payment methods
        var payments = [];
        if (document.getElementById('yapeEnabled').checked) {
            payments.push({
                type: 'Yape',
                name: document.getElementById('yapeName').value,
                number: document.getElementById('yapeNumber').value
            });
        }
        if (document.getElementById('plinEnabled').checked) {
            payments.push({
                type: 'Plin',
                name: document.getElementById('plinName').value,
                number: document.getElementById('plinNumber').value
            });
        }
        if (document.getElementById('bankEnabled').checked) {
            payments.push({
                type: document.getElementById('bankName').value,
                account: document.getElementById('bankAccount').value,
                holder: document.getElementById('bankHolder').value
            });
        }
        
        // Create developer object
        var developer = {
            id: Date.now(),
            name: document.getElementById('devName').value,
            email: document.getElementById('devEmail').value,
            phone: document.getElementById('devPhone').value,
            bio: document.getElementById('devBio').value,
            skills: skills,
            payments: payments,
            prices: {
                landing: document.getElementById('priceLanding').value || '150',
                corporativo: document.getElementById('priceCorp').value || '280',
                ecommerce: document.getElementById('priceEcom').value || '400'
            },
            createdAt: new Date().toISOString()
        };
        
        // Save to localStorage
        var developers = JSON.parse(localStorage.getItem('developers') || '[]');
        developers.push(developer);
        localStorage.setItem('developers', JSON.stringify(developers));
        
        // Show success
        alert('¡Perfil creado! Ahora los clientes pueden encontrarte y pagarte directamente.');
        
        // Redirect to profile
        window.location.href = 'developers.html';
    });
});
