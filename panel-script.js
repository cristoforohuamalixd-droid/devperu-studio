// Payment Methods Configuration
const paymentMethods = {
    yape: {
        enabled: true,
        name: '',
        number: '',
        qr: null
    },
    plin: {
        enabled: false,
        name: '',
        number: ''
    },
    bank: {
        enabled: false,
        bank: '',
        account: '',
        cci: '',
        holder: ''
    },
    cash: {
        enabled: false,
        location: '',
        time: ''
    }
};

// Toggle fields visibility
document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        const methodName = this.id.replace('Enabled', '');
        const fields = document.getElementById(methodName + 'Fields');
        
        if (fields) {
            fields.style.display = this.checked ? 'flex' : 'none';
        }
        
        paymentMethods[methodName].enabled = this.checked;
        updatePreview();
    });
});

// Form submission
document.getElementById('paymentMethodsForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Collect data
    paymentMethods.yape.name = document.getElementById('yapeName').value;
    paymentMethods.yape.number = document.getElementById('yapeNumber').value;
    
    paymentMethods.plin.name = document.getElementById('plinName').value;
    paymentMethods.plin.number = document.getElementById('plinNumber').value;
    
    paymentMethods.bank.bank = document.getElementById('bankName').value;
    paymentMethods.bank.account = document.getElementById('bankAccount').value;
    paymentMethods.bank.cci = document.getElementById('bankCCI').value;
    paymentMethods.bank.holder = document.getElementById('bankHolder').value;
    
    paymentMethods.cash.location = document.getElementById('cashLocation').value;
    paymentMethods.cash.time = document.getElementById('cashTime').value;
    
    // Save to localStorage
    localStorage.setItem('paymentMethods', JSON.stringify(paymentMethods));
    
    // Show success message
    showNotification('Métodos de pago guardados correctamente');
    
    updatePreview();
});

// Update preview
function updatePreview() {
    const previewContainer = document.getElementById('previewMethods');
    previewContainer.innerHTML = '';
    
    if (paymentMethods.yape.enabled && paymentMethods.yape.number) {
        previewContainer.innerHTML += `
            <div class="preview-method">
                <span class="icon">📱</span>
                <div class="details">
                    <h4>Yape</h4>
                    <p>${paymentMethods.yape.name} - ${formatPhone(paymentMethods.yape.number)}</p>
                </div>
                <button class="copy-btn" onclick="copyText('${paymentMethods.yape.number}')">Copiar</button>
            </div>
        `;
    }
    
    if (paymentMethods.plin.enabled && paymentMethods.plin.number) {
        previewContainer.innerHTML += `
            <div class="preview-method">
                <span class="icon">💳</span>
                <div class="details">
                    <h4>Plin</h4>
                    <p>${paymentMethods.plin.name} - ${formatPhone(paymentMethods.plin.number)}</p>
                </div>
                <button class="copy-btn" onclick="copyText('${paymentMethods.plin.number}')">Copiar</button>
            </div>
        `;
    }
    
    if (paymentMethods.bank.enabled && paymentMethods.bank.account) {
        previewContainer.innerHTML += `
            <div class="preview-method">
                <span class="icon">🏦</span>
                <div class="details">
                    <h4>${paymentMethods.bank.bank}</h4>
                    <p>Cuenta: ${paymentMethods.bank.account}</p>
                    <p>Titular: ${paymentMethods.bank.holder}</p>
                </div>
                <button class="copy-btn" onclick="copyText('${paymentMethods.bank.account}')">Copiar</button>
            </div>
        `;
    }
    
    if (paymentMethods.cash.enabled) {
        previewContainer.innerHTML += `
            <div class="preview-method">
                <span class="icon">💰</span>
                <div class="details">
                    <h4>Efectivo</h4>
                    <p>${paymentMethods.cash.location}</p>
                    <p>${paymentMethods.cash.time}</p>
                </div>
            </div>
        `;
    }
    
    if (previewContainer.innerHTML === '') {
        previewContainer.innerHTML = '<p style="text-align:center; color:var(--gray);">No hay métodos configurados</p>';
    }
}

// Format phone number
function formatPhone(phone) {
    if (phone.length === 9) {
        return `${phone.slice(0,3)} ${phone.slice(3,6)} ${phone.slice(6)}`;
    }
    return phone;
}

// Copy text to clipboard
function copyText(text) {
    navigator.clipboard.writeText(text);
    showNotification('Número copiado al portapapeles');
}

// Copy all payment info
function copyPaymentInfo() {
    let info = 'MÉTODOS DE PAGO - DevPerú Studio\n\n';
    
    if (paymentMethods.yape.enabled && paymentMethods.yape.number) {
        info += `📱 YAPE: ${paymentMethods.yape.name} - ${paymentMethods.yape.number}\n`;
    }
    
    if (paymentMethods.plin.enabled && paymentMethods.plin.number) {
        info += `💳 PLIN: ${paymentMethods.plin.name} - ${paymentMethods.plin.number}\n`;
    }
    
    if (paymentMethods.bank.enabled && paymentMethods.bank.account) {
        info += `🏦 ${paymentMethods.bank.bank}\n`;
        info += `   Cuenta: ${paymentMethods.bank.account}\n`;
        info += `   CCI: ${paymentMethods.bank.cci || 'N/A'}\n`;
        info += `   Titular: ${paymentMethods.bank.holder}\n`;
    }
    
    if (paymentMethods.cash.enabled) {
        info += `💰 EFECTIVO: ${paymentMethods.cash.location}\n`;
        info += `   Horario: ${paymentMethods.cash.time}\n`;
    }
    
    navigator.clipboard.writeText(info);
    showNotification('Información de pagos copiada');
}

// Share via WhatsApp
function sharePaymentInfo() {
    let message = '💰 *MÉTODOS DE PAGO - DevPerú Studio*\n\n';
    
    if (paymentMethods.yape.enabled && paymentMethods.yape.number) {
        message += `📱 *Yape:* ${paymentMethods.yape.name}\n`;
        message += `   Número: ${paymentMethods.yape.number}\n\n`;
    }
    
    if (paymentMethods.plin.enabled && paymentMethods.plin.number) {
        message += `💳 *Plin:* ${paymentMethods.plin.name}\n`;
        message += `   Número: ${paymentMethods.plin.number}\n\n`;
    }
    
    if (paymentMethods.bank.enabled && paymentMethods.bank.account) {
        message += `🏦 *${paymentMethods.bank.bank}*\n`;
        message += `   Cuenta: ${paymentMethods.bank.account}\n`;
        message += `   Titular: ${paymentMethods.bank.holder}\n\n`;
    }
    
    if (paymentMethods.cash.enabled) {
        message += `💰 *Efectivo:* ${paymentMethods.cash.location}\n`;
        message += `   Horario: ${paymentMethods.cash.time}\n`;
    }
    
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/?text=${encodedMessage}`, '_blank');
}

// Show notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: #10b981;
        color: white;
        padding: 15px 25px;
        border-radius: 8px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        z-index: 1000;
        animation: slideIn 0.3s ease;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Load saved data on page load
window.addEventListener('load', function() {
    const saved = localStorage.getItem('paymentMethods');
    if (saved) {
        const data = JSON.parse(saved);
        Object.assign(paymentMethods, data);
        
        // Restore form values
        document.getElementById('yapeEnabled').checked = data.yape.enabled;
        document.getElementById('yapeName').value = data.yape.name || '';
        document.getElementById('yapeNumber').value = data.yape.number || '';
        document.getElementById('yapeFields').style.display = data.yape.enabled ? 'flex' : 'none';
        
        document.getElementById('plinEnabled').checked = data.plin.enabled;
        document.getElementById('plinName').value = data.plin.name || '';
        document.getElementById('plinNumber').value = data.plin.number || '';
        document.getElementById('plinFields').style.display = data.plin.enabled ? 'flex' : 'none';
        
        document.getElementById('bankEnabled').checked = data.bank.enabled;
        document.getElementById('bankName').value = data.bank.bank || '';
        document.getElementById('bankAccount').value = data.bank.account || '';
        document.getElementById('bankCCI').value = data.bank.cci || '';
        document.getElementById('bankHolder').value = data.bank.holder || '';
        document.getElementById('bankFields').style.display = data.bank.enabled ? 'flex' : 'none';
        
        document.getElementById('cashEnabled').checked = data.cash.enabled;
        document.getElementById('cashLocation').value = data.cash.location || '';
        document.getElementById('cashTime').value = data.cash.time || '';
        document.getElementById('cashFields').style.display = data.cash.enabled ? 'flex' : 'none';
        
        updatePreview();
    }
});
