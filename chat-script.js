document.addEventListener('DOMContentLoaded', function() {
    var chatMessages = document.getElementById('chatMessages');
    var chatInput = document.getElementById('chatInput');
    var sendBtn = document.getElementById('sendBtn');

    var responses = {
        'precios': 'Tenemos 4 planes:\n\n🎁 Plan Gratis - S/ 0 (1 año)\n📦 Básico - S/ 150\n⭐ Profesional - S/ 280\n💎 Premium - S/ 400\n\n¿Te interesa alguno?',
        'servicios': 'Ofrecemos:\n\n🌐 Landing Pages\n💻 Sitios Web Corporativos\n🛒 Tiendas Online (E-commerce)\n📱 Apps Web a Medida\n🔧 Mantenimiento web\n\n¿Cuál necesitas?',
        'plazos': 'Los tiempos de entrega:\n\n🌐 Landing Page: 5-7 días\n💻 Sitio Corporativo: 10-15 días\n🛒 E-commerce: 15-20 días\n📱 App Web: 20-30 días\n\n¿Cuál te interesa?',
        'pagos': 'Aceptamos:\n\n📱 Yape\n💳 Plin\n🏦 Transferencia bancaria (BCP, Interbank, BBVA)\n💰 Efectivo\n\n¿Cuál prefieres?',
        'landing': 'La Landing Page cuesta S/ 150 e incluye:\n\n✅ Diseño responsive\n✅ Formulario de contacto\n✅ Hosting 1 año\n✅ Soporte por email\n\n¿Quieres que empecemos?',
        'contacto': 'Puedes contactarnos por:\n\n📱 WhatsApp: +51 953 771 229\n📧 Email: contacto@devperu.com\n\n¿Te parece bien que te escriba por WhatsApp?'
    };

    var defaultResponse = 'Gracias por tu mensaje. ¿Puedo ayudarte con algo específico? Puedo darte info sobre precios, servicios o plazos.';

    function addMessage(text, isUser) {
        var messageDiv = document.createElement('div');
        messageDiv.className = 'message ' + (isUser ? 'user' : 'developer');
        
        var avatar = isUser ? '' : '<div class="msg-avatar">🤖</div>';
        
        messageDiv.innerHTML = avatar + 
            '<div class="msg-bubble">' + text.replace(/\n/g, '<br>') + '</div>' +
            '<span class="msg-time">Ahora</span>';
        
        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    function getResponse(message) {
        var lower = message.toLowerCase();
        
        if (lower.includes('preci') || lower.includes('costo') || lower.includes('cuánto') || lower.includes('cuesta')) {
            return responses.precios;
        }
        if (lower.includes('servicio') || lower.includes('ofrecen') || lower.includes('hacen')) {
            return responses.servicios;
        }
        if (lower.includes('tiempo') || lower.includes('tarda') || lower.includes('plazo') || lower.includes('rápido')) {
            return responses.plazos;
        }
        if (lower.includes('pago') || lower.includes('yape') || lower.includes('plin') || lower.includes('pagar')) {
            return responses.pagos;
        }
        if (lower.includes('landing')) {
            return responses.landing;
        }
        if (lower.includes('contacto') || lower.includes('whatsapp') || lower.includes('llamar')) {
            return responses.contacto;
        }
        
        return defaultResponse;
    }

    function sendMessage() {
        var text = chatInput.value.trim();
        if (!text) return;
        
        addMessage(text, true);
        chatInput.value = '';
        
        setTimeout(function() {
            var response = getResponse(text);
            addMessage(response, false);
        }, 800);
    }

    sendBtn.addEventListener('click', sendMessage);
    
    chatInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });

    document.querySelectorAll('.quick-reply').forEach(function(btn) {
        btn.addEventListener('click', function() {
            var text = this.dataset.response;
            addMessage(text, true);
            
            setTimeout(function() {
                var response = getResponse(text);
                addMessage(response, false);
            }, 800);
        });
    });
});
