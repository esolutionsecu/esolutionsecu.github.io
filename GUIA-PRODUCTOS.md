# 📘 GUÍA COMPLETA - Sistema de Productos E-Solutions

## 🎯 CÓMO FUNCIONA EL SISTEMA

Tu sitio web ahora tiene **2 niveles**:

1. **productos.html** → Lista de productos (catálogo)
2. **producto-detalle.html** → Página individual de cada producto (con galería, archivos, precios por mayor, etc.)

---

## 📦 PASO 1: AGREGAR UN NUEVO PRODUCTO

### A) Edita el archivo `productos-data.js`

Este archivo contiene TODOS los datos de tus productos. Está al final del archivo.

**Copia esta plantilla:**

```javascript
"id-producto-minusculas": {
    nombre: "Nombre del Producto",
    categoria: "Componentes Electrónicos", // o "Tecnología" o "Seguridad"
    descripcionCorta: "Descripción breve para el catálogo",
    descripcionLarga: "Descripción completa y detallada que aparecerá en la página del producto...",
    precioMenor: 25.00,  // Precio por unidad
    precioMayor: 20.00,  // Precio al por mayor (3+ unidades)
    stock: true,  // true = en stock, false = agotado
    imagenes: [
        "https://url-imagen-1.jpg",
        "https://url-imagen-2.jpg",
        "https://url-imagen-3.jpg"
    ],
    caracteristicas: [
        "Característica 1",
        "Característica 2",
        "Característica 3",
        "Característica 4"
    ],
    archivos: [
        {
            nombre: "Drivers para Windows",
            url: "https://link-descarga.com/drivers.zip",
            tipo: "Drivers"
        },
        {
            nombre: "Datasheet PDF",
            url: "https://link-descarga.com/datasheet.pdf",
            tipo: "Datasheet"
        },
        {
            nombre: "Pinout del Chip",
            url: "https://i.imgur.com/pinout.png",
            tipo: "Diagrama"
        }
    ]
},
```

**IMPORTANTE:** 
- El **ID del producto** (ej: "arduino-uno-r3") debe ser único y en minúsculas, sin espacios
- Usa guiones (-) en lugar de espacios
- Este ID es el que usarás para enlazar el producto

---

### B) Agrega el producto en `productos.html`

Encuentra la sección `<div class="products-grid" id="productsGrid">` y agrega:

```html
<!-- OPCIÓN 1: Con enlace a página de detalles (RECOMENDADO) -->
<a href="producto-detalle.html?id=arduino-uno-r3" class="product-card" data-category="componentes">
    <div class="product-image" style="background-image: url('https://url-imagen.jpg'); background-size: cover; background-position: center;">
    </div>
    <div class="product-info">
        <span class="product-category">Componentes</span>
        <h3>Arduino UNO R3</h3>
        <p>Placa de desarrollo ideal para iniciar en electrónica y robótica</p>
        <div class="product-price">$25.00</div>
        <div class="product-footer">
            <span class="product-status">En stock</span>
        </div>
    </div>
</a>

<!-- OPCIÓN 2: Sin enlace (solo para catálogo) -->
<div class="product-card" data-category="componentes">
    <div class="product-image">
        <i class="fas fa-microchip"></i>
    </div>
    <div class="product-info">
        <span class="product-category">Componentes</span>
        <h3>Arduino UNO R3</h3>
        <p>Placa de desarrollo ideal para iniciar en electrónica y robótica</p>
        <div class="product-price">$25.00</div>
        <div class="product-footer">
            <span class="product-status">En stock</span>
            <a href="https://wa.me/593999999999?text=Hola,%20me%20interesa%20el%20Arduino" class="btn-whatsapp" target="_blank">Consultar</a>
        </div>
    </div>
</div>
```

**Cambios clave:**
1. Cambia `<div class="product-card">` por `<a href="producto-detalle.html?id=ID-PRODUCTO" class="product-card">`
2. El `id=` debe coincidir EXACTAMENTE con el ID en productos-data.js
3. Cambia `data-category=` según sea: `componentes`, `tecnologia`, o `seguridad`

---

## 🖼️ PASO 2: AGREGAR IMÁGENES

### Opción A: Subir a imgur.com (GRATIS y FÁCIL)

1. Ve a https://imgur.com
2. Click en "New post"
3. Sube tu imagen
4. Click derecho en la imagen → "Copiar dirección de imagen"
5. Pega la URL en tu código

### Opción B: Subir a tu repositorio GitHub

1. En tu repo, crea una carpeta `images/`
2. Sube las imágenes ahí
3. La URL será: `https://esolutionsecu.github.io/images/nombre-imagen.jpg`

---

## 📄 PASO 3: AGREGAR ARCHIVOS DESCARGABLES

Para drivers, datasheets, manuales, etc.:

### Opción A: Google Drive

1. Sube el archivo a Google Drive
2. Click derecho → "Obtener enlace"
3. Asegúrate que sea "Cualquier persona con el enlace"
4. Copia el enlace

### Opción B: Dropbox

1. Sube el archivo a Dropbox
2. Genera enlace público
3. Cambia `?dl=0` al final por `?dl=1` para descarga directa

### Opción C: GitHub

1. Sube a tu repo en carpeta `archivos/`
2. URL: `https://esolutionsecu.github.io/archivos/nombre.pdf`

---

## 🔧 EJEMPLO COMPLETO: Agregar "Raspberry Pi 4"

### 1. En `productos-data.js`:

```javascript
"raspberry-pi-4": {
    nombre: "Raspberry Pi 4 Model B - 4GB RAM",
    categoria: "Tecnología",
    descripcionCorta: "Computadora de placa única para proyectos avanzados",
    descripcionLarga: "La Raspberry Pi 4 es la cuarta generación de la famosa computadora de placa única. Incluye procesador quad-core a 1.5GHz, 4GB de RAM, doble salida micro-HDMI 4K, Gigabit Ethernet, Bluetooth 5.0 y WiFi dual band. Perfecta para proyectos de IoT, retro-gaming, servidor casero y mucho más.",
    precioMenor: 85.00,
    precioMayor: 75.00,
    stock: true,
    imagenes: [
        "https://i.imgur.com/rpi4-1.jpg",
        "https://i.imgur.com/rpi4-2.jpg",
        "https://i.imgur.com/rpi4-pinout.png"
    ],
    caracteristicas: [
        "Procesador: Broadcom BCM2711 Quad-core Cortex-A72 (ARM v8) 64-bit @ 1.5GHz",
        "RAM: 4GB LPDDR4-3200 SDRAM",
        "Conectividad: WiFi 802.11ac dual-band + Bluetooth 5.0",
        "Ethernet: Gigabit",
        "2 x USB 3.0, 2 x USB 2.0",
        "2 x micro-HDMI soporta hasta 4K 60fps",
        "GPIO: 40 pines compatibles con versiones anteriores",
        "MicroSD para sistema operativo y almacenamiento",
        "USB-C para alimentación (5V 3A)",
        "Temperatura de operación: 0-50°C"
    ],
    archivos: [
        {
            nombre: "Raspberry Pi OS (Sistema Operativo)",
            url: "https://www.raspberrypi.com/software/",
            tipo: "Software"
        },
        {
            nombre: "Pinout Oficial Raspberry Pi 4",
            url: "https://pinout.xyz/resources/raspberry-pi-pinout.png",
            tipo: "Diagrama"
        },
        {
            nombre: "Guía de Inicio Rápido",
            url: "https://projects.raspberrypi.org/en/projects/raspberry-pi-getting-started",
            tipo: "Tutorial"
        },
        {
            nombre: "Datasheet BCM2711",
            url: "https://datasheets.raspberrypi.com/bcm2711/bcm2711-peripherals.pdf",
            tipo: "Datasheet"
        }
    ]
},
```

### 2. En `productos.html`, agrega:

```html
<a href="producto-detalle.html?id=raspberry-pi-4" class="product-card" data-category="tecnologia">
    <div class="product-image" style="background-image: url('https://i.imgur.com/rpi4-1.jpg'); background-size: cover; background-position: center;">
    </div>
    <div class="product-info">
        <span class="product-category">Tecnología</span>
        <h3>Raspberry Pi 4 - 4GB RAM</h3>
        <p>Computadora de placa única para proyectos avanzados</p>
        <div class="product-price">$85.00</div>
        <div class="product-footer">
            <span class="product-status">En stock</span>
        </div>
    </div>
</a>
```

---

## ✅ CHECKLIST ANTES DE SUBIR

- [ ] Agregaste el producto en `productos-data.js` con ID único
- [ ] Agregaste la tarjeta en `productos.html` con el enlace correcto
- [ ] Verificaste que el ID coincida en ambos archivos
- [ ] Las URLs de imágenes funcionan (ábrelas en el navegador)
- [ ] Los archivos descargables están accesibles
- [ ] Actualizado el número de WhatsApp (593999999999 → tu número real)

---

## 🚀 SUBIR CAMBIOS A GITHUB

1. Ve a tu repositorio
2. Click en el archivo que quieres editar
3. Click en el ícono del lápiz ✏️ (Edit)
4. Haz los cambios
5. Scroll abajo → "Commit changes"
6. Espera 1-2 minutos y recarga tu sitio

---

## 🎨 PERSONALIZACIÓN AVANZADA

### Cambiar Colores

En cualquier archivo HTML, busca al inicio:

```css
:root {
    --primary-color: #4A6B7C;      /* Azul principal */
    --secondary-color: #C5FF3E;    /* Verde neón */
    --dark-bg: #1a1a1a;           /* Fondo oscuro */
    --light-bg: #f5f5f5;          /* Fondo claro */
}
```

### Cambiar Número de WhatsApp

Busca y reemplaza `593999999999` por tu número real (sin espacios, con código de país)

---

## ❓ PREGUNTAS FRECUENTES

**P: ¿Tengo que crear un HTML por cada producto?**
R: ¡NO! Solo editas productos-data.js. Una sola página (producto-detalle.html) muestra todos.

**P: ¿Cómo agrego más fotos a un producto?**
R: En productos-data.js, agrega más URLs en el array `imagenes: [...]`

**P: ¿Puedo tener productos sin archivos descargables?**
R: Sí, deja el array vacío: `archivos: []`

**P: ¿Qué pasa si un producto no tiene stock?**
R: Cambia `stock: true` a `stock: false`

**P: ¿Cómo elimino un producto?**
R: Borra su entrada en productos-data.js Y su tarjeta en productos.html

---

## 📞 SOPORTE

Si tienes dudas, revisa los ejemplos en productos-data.js
¡Están listos para copiar y modificar!

---

**¡Éxito con tu tienda E-Solutions! 🚀**
