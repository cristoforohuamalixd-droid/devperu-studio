# Sistema de Pagos - DevPerú Studio

---

## Cómo Funciona

### Para el Programador (Tú)

1. Abre `panel-pagos.html` en tu navegador
2. Activa los métodos de pago que quieras usar
3. Ingresa tus datos (número de Yape, cuenta bancaria, etc.)
4. Guarda la configuración
5. Comparte la información con tus clientes

### Para el Cliente

1. Visita tu sitio web
2. Va a la sección de contacto
3. Ve los métodos de pago disponibles
4. Elige uno y realiza el pago
5. Te envía el comprobante por WhatsApp

---

## Métodos de Pago Soportados

### Yape
- Número de 9 dígitos
- Nombre como aparece en la app
- Opcional: Código QR

### Plin
- Número de 9 dígitos
- Nombre como aparece en la app

### Transferencia Bancaria
- Banco: BCP, Interbank, BBVA, Scotiabank, BanBif, Pichincha, Mi Banco
- Número de cuenta
- CCI (opcional)
- Titular de la cuenta

### Efectivo
- Punto de entrega
- Horario disponible

---

## Flujo de Cobro

```
1. Cliente te contacta por WhatsApp
        ↓
2. Le envías presupuesto
        ↓
3. Acepta y te da sus datos
        ↓
4. Le envías información de pago
        ↓
5. Cliente realiza el pago
        ↓
6. Te envía comprobante
        ↓
7. Verificas el pago
        ↓
8. Inicias el proyecto
        ↓
9. Entregas el sitio web
        ↓
10. Cobras el 50% restante
```

---

## Archivos del Sistema

| Archivo | Función |
|---------|---------|
| `panel-pagos.html` | Panel de configuración de pagos |
| `panel-styles.css` | Estilos del panel |
| `panel-script.js` | Lógica del panel |

---

## Guardar Configuración

Los datos se guardan automáticamente en el navegador (localStorage).

**Importante:** Si cambias de navegador o computadora, debes volver a configurar tus datos de pago.

---

## Copiar Información de Pagos

### Opción 1: Copiar todo
1. Ve al panel de pagos
2. Click en "Copiar Info de Pagos"
3. La información se copia al portapapeles

### Opción 2: Compartir por WhatsApp
1. Ve al panel de pagos
2. Click en "Compartir por WhatsApp"
3. Se abre WhatsApp con el mensaje listo

---

## Ejemplo de Mensaje para Cliente

```
¡Hola! Para realizar el pago de tu proyecto, puedes usar:

📱 Yape: 999 888 777 (Juan Pérez)
💳 Plin: 999 888 777 (Juan Pérez)
🏦 BCP Cuenta: 123-456-789
   Titular: Juan Pérez

Una vez realices el pago, envíame el comprobante por aquí.
¡Gracias!
```
