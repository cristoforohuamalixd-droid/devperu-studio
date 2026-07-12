# Cómo Entregar los Archivos al Cliente

---

## Opción 1: Google Drive (Recomendado)

### Paso 1: Crear carpeta
1. Ve a Google Drive
2. Click derecho → Nueva carpeta
3. Nombra: "[Cliente] - [Nombre Proyecto]"

### Paso 2: Subir archivos
Sube toda la carpeta del proyecto:
- HTML, CSS, JS
- Imágenes
- Documentos

### Paso 3: Compartir
1. Click derecho en la carpeta
2. "Compartir"
3. Agrega el email del cliente
4. Permite "Ver" o "Descargar"

---

## Opción 2: GitHub (Para desarrolladores)

### Paso 1: Crear repositorio
1. Ve a github.com
2. Click en "New repository"
3. Nombre: "proyecto-[cliente]"

### Paso 2: Subir código
```bash
git init
git add .
git commit -m "Proyecto terminado"
git remote add origin https://github.com/TU-USUARIO/proyecto-[cliente].git
git push -u origin main
```

### Paso 3: Compartir enlace
Envía al cliente:
```
https://github.com/TU-USUARIO/proyecto-[cliente]
```

---

## Opción 3: Netlify (Para sitios estáticos)

### Paso 1: Crear cuenta
1. Ve a netlify.com
2. Regístrate gratis

### Paso 2: Subir proyecto
1. Arrastra la carpeta del proyecto
2. Espera a que se suba

### Paso 3: Obtener enlace
Netlify te da un enlace como:
```
https://proyecto-cliente.netlify.app
```

Envíaselo al cliente.

---

## Opción 4: Archivo ZIP

### Paso 1: Comprimir
1. Selecciona todos los archivos del proyecto
2. Click derecho → "Enviar a" → "Carpeta comprimida"

### Paso 2: Enviar
Envía el .zip por:
- WhatsApp
- Email
- Google Drive

---

## Documentos de Entrega

Siempre incluye:

1. **Archivo README.txt**
```
GRACIAS POR CONFIAR EN DEVPERÚ STUDIO

Tu sitio web está listo.

INSTRUCCIONES:
1. Descomprime el archivo
2. Abre index.html en tu navegador
3. Para subir a tu hosting, sube todos los archivos

SOPORTE:
WhatsApp: +51 999 999 999
Email: contacto@devperu.com
```

2. **Archivo credenciales.txt** (si aplica)
```
HOSTING:
URL: https://tu-sitio.com
Usuario: admin
Contraseña: ********

DOMINIO:
Registrador: Namecheap
Usuario: email@ejemplo.com
Contraseña: ********
```

3. **Factura o recibo**

---

## Checklist de Entrega

- [ ] Archivos del proyecto comprimidos
- [ ] README con instrucciones
- [ ] Credenciales de hosting (si aplica)
- [ ] Credenciales de dominio (si aplica)
- [ ] Recibo de pago
- [ ] Manual de usuario básico
- [ ] Enviado por método acordado
- [ ] Cliente confirmó recepción
