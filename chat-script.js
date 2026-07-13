document.addEventListener('DOMContentLoaded', function() {
    var chatMessages = document.getElementById('chatMessages');
    var chatInput = document.getElementById('chatInput');
    var sendBtn = document.getElementById('sendBtn');

    var responses = {
        'precio': 'Tenemos 4 planes:\n\n🎁 Plan Gratis - S/ 0 (1 año)\n📦 Básico - S/ 150\n⭐ Profesional - S/ 280\n💎 Premium - S/ 400\n\n¿Te interesa alguno?',
        'precios': 'Tenemos 4 planes:\n\n🎁 Plan Gratis - S/ 0 (1 año)\n📦 Básico - S/ 150\n⭐ Profesional - S/ 280\n💎 Premium - S/ 400\n\n¿Te interesa alguno?',
        'costo': 'Tenemos 4 planes:\n\n🎁 Plan Gratis - S/ 0 (1 año)\n📦 Básico - S/ 150\n⭐ Profesional - S/ 280\n💎 Premium - S/ 400\n\n¿Te interesa alguno?',
        'cuesta': 'Tenemos 4 planes:\n\n🎁 Plan Gratis - S/ 0 (1 año)\n📦 Básico - S/ 150\n⭐ Profesional - S/ 280\n💎 Premium - S/ 400\n\n¿Te interesa alguno?',
        'servicio': 'Ofrecemos:\n\n🌐 Landing Pages\n💻 Sitios Web Corporativos\n🛒 Tiendas Online\n📱 Apps Web a Medida\n🔧 Mantenimiento\n\n¿Cuál necesitas?',
        'servicios': 'Ofrecemos:\n\n🌐 Landing Pages\n💻 Sitios Web Corporativos\n🛒 Tiendas Online\n📱 Apps Web a Medida\n🔧 Mantenimiento\n\n¿Cuál necesitas?',
        'landing': 'La Landing Page cuesta S/ 150 e incluye:\n\n✅ Diseño responsive\n✅ Formulario de contacto\n✅ Hosting 1 año\n✅ Soporte por email\n\n¿Quieres que empecemos?',
        'tiempo': 'Los tiempos de entrega:\n\n🌐 Landing: 5-7 días\n💻 Corporativo: 10-15 días\n🛒 E-commerce: 15-20 días\n📱 App: 20-30 días',
        'plazo': 'Los tiempos de entrega:\n\n🌐 Landing: 5-7 días\n💻 Corporativo: 10-15 días\n🛒 E-commerce: 15-20 días\n📱 App: 20-30 días',
        'tarda': 'Los tiempos de entrega:\n\n🌐 Landing: 5-7 días\n💻 Corporativo: 10-15 días\n🛒 E-commerce: 15-20 días\n📱 App: 20-30 días',
        'pago': 'Aceptamos:\n\n📱 Yape\n💳 Plin\n🏦 Transferencia (BCP, Interbank, BBVA)\n💰 Efectivo',
        'pagar': 'Aceptamos:\n\n📱 Yape\n💳 Plin\n🏦 Transferencia (BCP, Interbank, BBVA)\n💰 Efectivo',
        'yape': 'Puedes pagar con Yape al número:\n📱 953 771 229\n\n¿Necesitas algo más?',
        'plin': 'Puedes pagar con Plin al número:\n📱 953 771 229\n\n¿Necesitas algo más?',
        'whatsapp': 'Escríbenos por WhatsApp:\n📱 https://wa.me/51953771229\n\nTe atenderemos lo antes posible.',
        'hablar': 'Para hablar con un programador real:\n\n📱 WhatsApp: https://wa.me/51953771229\n📧 Email: contacto@devperu.com\n\n¿Te parece bien que te contacte por WhatsApp?',
        'asesor': 'Para hablar con un programador real:\n\n📱 WhatsApp: https://wa.me/51953771229\n📧 Email: contacto@devperu.com\n\n¿Te parece bien que te contacte por WhatsApp?',
        'programador': 'Para hablar con un programador real:\n\n📱 WhatsApp: https://wa.me/51953771229\n📧 Email: contacto@devperu.com\n\n¿Te parece bien que te contacte por WhatsApp?',
        'contactar': 'Para contactarnos:\n\n📱 WhatsApp: https://wa.me/51953771229\n📧 Email: contacto@devperu.com\n\n¿En qué te puedo ayudar?',
        'contacto': 'Para contactarnos:\n\n📱 WhatsApp: https://wa.me/51953771229\n📧 Email: contacto@devperu.com\n\n¿En qué te puedo ayudar?',
        'hola': '¡Hola! Bienvenido a DevPerú Studio. ¿En qué te puedo ayudar?',
        'buenas': '¡Hola! Bienvenido a DevPerú Studio. ¿En qué te puedo ayudar?',
        'buenos': '¡Hola! Bienvenido a DevPerú Studio. ¿En qué te puedo ayudar?',
        'gracias': '¡De nada! Si necesitas algo más, aquí estaré. 😊',
        'chau': '¡Hasta luego! Fue un placer ayudarte. 👋',
        'adios': '¡Hasta luego! Fue un placer ayudarte. 👋',
        'ecommerce': 'El E-commerce cuesta S/ 400 e incluye:\n\n✅ Tienda online completa\n✅ Carrito de compras\n✅ Pasarela de pagos\n✅ Panel de administración\n✅ Hosting 1 año\n\n¿Quieres que empecemos?',
        'tienda': 'El E-commerce cuesta S/ 400 e incluye:\n\n✅ Tienda online completa\n✅ Carrito de compras\n✅ Pasarela de pagos\n✅ Panel de administración\n✅ Hosting 1 año\n\n¿Quieres que empecemos?',
        'corporativo': 'El Sitio Corporativo cuesta S/ 280 e incluye:\n\n✅ 5 páginas\n✅ Diseño personalizado\n✅ SEO básico\n✅ Dominio incluido\n✅ Hosting 1 año\n\n¿Quieres que empecemos?',
        'app': 'La App Web a Medida cuesta desde S/ 400.\n\nCreamos:\n✅ CRMs\n✅ Dashboards\n✅ Sistemas de administración\n\n¿Qué necesitas?',
        'gratis': 'El Plan Gratis incluye:\n\n🎁 Landing page básica\n🎁 Hosting 1 año\n🎁 Soporte por email\n\nSin costo, sin tarjeta. ¿Te interesa?',
        'oyo': '¿Puedo ayudarte con algo específico? Pregúntame por:\n\n💰 Precios\n📋 Servicios\n⏱️ Plazos\n💳 Pagos\n📱 WhatsApp',
        'que': '¿Puedo ayudarte con algo específico? Pregúntame por:\n\n💰 Precios\n📋 Servicios\n⏱️ Plazos\n💳 Pagos\n📱 WhatsApp'
    };

    var defaultResponses = [
        'No estoy seguro de entender. Puedo ayudarte con:\n\n💰 Precios\n📋 Servicios\n⏱️ Plazos\n💳 Pagos\n📱 WhatsApp',
        '¿Puedes preguntar de otra forma? Tengo info sobre:\n\n💰 Precios\n📋 Servicios\n⏱️ Plazos\n💳 Pagos',
        'Hmm, no capté eso. ¿Quieres saber sobre precios, servicios o cómo contactarnos?'
    ];

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
        var lower = message.toLowerCase().trim();
        
        for (var key in responses) {
            if (lower.indexOf(key) !== -1) {
                return responses[key];
            }
        }
        
        return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
    }

    function sendMessage() {
        var text = chatInput.value.trim();
        if (!text) return;
        
        addMessage(text, true);
        chatInput.value = '';
        
        setTimeout(function() {
            var response = getResponse(text);
            addMessage(response, false);
        }, 600);
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
            }, 600);
        });
    });
});
