// Base de conocimientos de JARVIS
const knowledge = {
    saludos: {
        patterns: ['hola', 'buenos', 'buenas', 'saludos', 'hey', 'hi', 'hello'],
        responses: [
            '¡Hola! Soy JARVIS, tu asistente virtual. ¿En qué puedo ayudarte hoy?',
            '¡Bienvenido a DevPerú Studio! ¿Cómo puedo asistirte?',
            '¡Hey! Estoy aquí para ayudarte. ¿Qué necesitas saber?'
        ]
    },
    servicios: {
        patterns: ['servicio', 'servicios', 'qué hacen', 'qué ofrecen', 'qué puedo', 'hacen', 'ofrecen'],
        responses: [
            'Nuestros servicios son:\n\n🌐 **Landing Page** - Desde S/ 150\n💻 **Sitio Web Corporativo** - Desde S/ 280\n🛒 **Tienda Online** - Desde S/ 400\n📱 **App Web a Medida** - Desde S/ 400\n🔧 **Mantenimiento** - Desde S/ 50/mes\n\n¿Te interesa alguno en particular?'
        ]
    },
    precios: {
        patterns: ['precio', 'precios', 'cuesta', 'costo', 'cuánto', 'presupuesto', 'cotización', 'cotiza'],
        responses: [
            'Nuestros planes:\n\n🎁 **Plan Gratis** - S/ 0 (1 año)\n📦 **Plan Básico** - S/ 150\n⭐ **Plan Profesional** - S/ 280\n💎 **Plan Premium** - S/ 400\n\nTodos incluyen hosting por 1 año. ¿Cuál te interesa?'
        ]
    },
    landing: {
        patterns: ['landing', 'landing page', 'página simple', 'página única'],
        responses: [
            'La **Landing Page** cuesta **S/ 150** e incluye:\n\n✅ Diseño responsive\n✅ Formulario de contacto\n✅ Hosting 1 año\n✅ Soporte por email\n\nEs ideal para captar clientes. ¿Quieres agendar una consulta?'
        ]
    },
    plan Gratis: {
        patterns: ['gratis', 'plan gratis', 'sin costo', 'free', '0 soles'],
        responses: [
            'El **Plan Gratis** es perfecto para empezar:\n\n🎁 **S/ 0 por 1 año completo**\n\nIncluye:\n✅ Landing page básica\n✅ Hosting incluido\n✅ Subdominio gratuito\n✅ Soporte por email\n\nSin tarjeta de crédito. ¿Quieres empezar?'
        ]
    },
    pagos: {
        patterns: ['pago', 'pagos', 'método', 'métodos', 'yape', 'plin', 'transferencia', 'bancario', 'efectivo', 'cómo pago'],
        responses: [
            'Aceptamos múltiples métodos de pago:\n\n📱 **Yape**\n💳 **Plin**\n🏦 **Transferencia bancaria** (BCP, Interbank, BBVA, etc.)\n💰 **Efectivo**\n\n¿Cuál prefieres usar?'
        ]
    },
    yape: {
        patterns: ['yape', 'número de yape', 'yapear'],
        responses: [
            'Para pagar con **Yape**:\n\n📱 Número: [Configurar en panel de pagos]\n👤 Nombre: [Configurar]\n\nTambién puedes escanear el código QR. ¿Necesitas algo más?'
        ]
    },
    agendar: {
        patterns: ['agendar', 'cita', 'reunión', 'consulta', 'hablar', 'contactar', 'llamar', 'whatsapp'],
        responses: [
            '¡Perfecto! Para agendar una consulta:\n\n📱 **WhatsApp:** +51 999 999 999\n📧 **Email:** contacto@devperu.com\n\nO puedes escribirnos directamente con tu idea de proyecto. ¿Qué tipo de sitio web necesitas?'
        ]
    },
    tiempo: {
        patterns: ['tiempo', 'tarda', 'demora', 'plazo', 'cuándo', 'rápido', 'días'],
        responses: [
            'Los tiempos de entrega son:\n\n🌐 **Landing Page:** 5-7 días hábiles\n💻 **Sitio Corporativo:** 10-15 días\n🛒 **E-commerce:** 15-20 días\n📱 **App Web:** 20-30 días\n\n¿Cuál necesitas?'
        ]
    },
    portfolio: {
        patterns: ['portafolio', 'trabajos', 'ejemplos', 'proyectos', 'muestras', 'qué han hecho'],
        responses: [
            'Puedes ver nuestros trabajos en:\n\n🌐 **Sitio web:** devperu-studio.netlify.app\n📸 **Instagram:** @devperu.studio\n\nTrabajamos con restaurantes, clínicas, tiendas y más. ¿Quieres ver ejemplos de algún tipo en particular?'
        ]
    },
    asesor: {
        patterns: ['asesor', 'persona', 'humano', 'representante', 'dueño', 'encargado'],
        responses: [
            'Te comunico con nuestro equipo:\n\n📱 **WhatsApp:** +51 999 999 999\n📧 **Email:** contacto@devperu.com\n\nHorario de atención: Lunes a Viernes 9am - 6pm\n\n¿En qué puedo ayudarte mientras tanto?'
        ]
    },
    agradecimiento: {
        patterns: ['gracias', 'thank', 'agradezco', 'genial', 'perfecto', 'excelente', 'bien'],
        responses: [
            '¡De nada! Estoy aquí para ayudarte. 😊\n\n¿Tienes alguna otra pregunta sobre nuestros servicios?'
        ]
    },
    despedida: {
        patterns: ['adiós', 'chau', 'bye', 'hasta luego', 'nos vemos', 'chao'],
        responses: [
            '¡Hasta luego! Fue un placer ayudarte. 🤖\n\nRecuerda que puedes contactarnos por WhatsApp cuando quieras.'
        ]
    }
};

// Respuesta por defecto
const defaultResponses = [
    'No estoy seguro de entender. ¿Puedes reformular tu pregunta?\n\nPuedo ayudarte con:\n- Servicios\n- Precios\n- Métodos de pago\n- Agendar consulta',
    'Hmm, no capté eso bien. Prueba preguntar sobre:\n- Nuestros servicios\n- Planes y precios\n- Cómo agendar una consulta',
    'No entendí bien. ¿Quieres saber sobre servicios, precios o agendar una cita?'
];

// Detectar intención del usuario
function detectIntent(message) {
    const lowerMessage = message.toLowerCase();
    
    for (const [intent, data] of Object.entries(knowledge)) {
        for (const pattern of data.patterns) {
            if (lowerMessage.includes(pattern)) {
                return data.responses[Math.floor(Math.random() * data.responses.length)];
            }
        }
    }
    
    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
}

// Elementos del DOM
const chatArea = document.getElementById('chatArea');
const userInput = document.getElementById('userInput');
const sendBtn = document.getElementById('sendBtn');

// Agregar mensaje al chat
function addMessage(content, isUser = false) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${isUser ? 'user-message' : 'jarvis-message'}`;
    
    const avatar = isUser ? '👤' : '🤖';
    
    messageDiv.innerHTML = `
        <div class="message-avatar">${avatar}</div>
        <div class="message-content">
            <p>${content.replace(/\n/g, '</p><p>')}</p>
        </div>
    `;
    
    chatArea.appendChild(messageDiv);
    chatArea.scrollTop = chatArea.scrollHeight;
}

// Mostrar indicador de escritura
function showTyping() {
    const typingDiv = document.createElement('div');
    typingDiv.className = 'message jarvis-message';
    typingDiv.id = 'typing';
    
    typingDiv.innerHTML = `
        <div class="message-avatar">🤖</div>
        <div class="message-content">
            <div class="typing-indicator">
                <div class="typing-dot"></div>
                <div class="typing-dot"></div>
                <div class="typing-dot"></div>
            </div>
        </div>
    `;
    
    chatArea.appendChild(typingDiv);
    chatArea.scrollTop = chatArea.scrollHeight;
}

// Ocultar indicador de escritura
function hideTyping() {
    const typing = document.getElementById('typing');
    if (typing) typing.remove();
}

// Procesar mensaje del usuario
function processMessage(message) {
    // Agregar mensaje del usuario
    addMessage(message, true);
    
    // Mostrar typing
    showTyping();
    
    // Simular delay de respuesta
    setTimeout(() => {
        hideTyping();
        const response = detectIntent(message);
        addMessage(response);
    }, 800 + Math.random() * 700);
}

// Event listeners
sendBtn.addEventListener('click', () => {
    const message = userInput.value.trim();
    if (message) {
        processMessage(message);
        userInput.value = '';
    }
});

userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        const message = userInput.value.trim();
        if (message) {
            processMessage(message);
            userInput.value = '';
        }
    }
});

// Botones de acción rápida
document.querySelectorAll('.quick-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const msg = btn.dataset.msg;
        processMessage(msg);
    });
});

// Enfocar input al cargar
userInput.focus();
