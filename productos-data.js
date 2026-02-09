// Base de datos de productos E-Solutions
// Aquí agregarás todos tus productos con sus detalles

const productosData = {
    // EJEMPLO 1: Arduino UNO
    "arduino-uno-r3": {
        nombre: "Arduino UNO R3",
        categoria: "Componentes Electrónicos",
        descripcionCorta: "Placa de desarrollo ideal para iniciar en electrónica y robótica",
        descripcionLarga: "El Arduino UNO R3 es la placa de desarrollo más popular y versátil. Perfecta para estudiantes de ingeniería, makers y profesionales. Cuenta con 14 pines digitales de entrada/salida, 6 entradas analógicas y se programa fácilmente desde el IDE de Arduino.",
        precioMenor: 25.00,
        precioMayor: 20.00,
        stock: true,
        imagenes: [
            "https://i.imgur.com/ejemplo1.jpg", // Imagen principal
            "https://i.imgur.com/ejemplo2.jpg", // Imagen 2
            "https://i.imgur.com/ejemplo3.jpg"  // Imagen 3
        ],
        caracteristicas: [
            "Microcontrolador: ATmega328P",
            "Voltaje de operación: 5V",
            "14 pines digitales I/O (6 PWM)",
            "6 entradas analógicas",
            "32 KB de memoria Flash",
            "16 MHz de velocidad",
            "Puerto USB tipo B",
            "Compatible con shields"
        ],
        archivos: [
            {
                nombre: "Drivers CH340 Windows",
                url: "https://ejemplo.com/drivers-ch340-win.zip",
                tipo: "Drivers"
            },
            {
                nombre: "Datasheet ATmega328P",
                url: "https://ejemplo.com/atmega328p-datasheet.pdf",
                tipo: "Datasheet"
            },
            {
                nombre: "Pinout Arduino UNO",
                url: "https://i.imgur.com/arduino-pinout.png",
                tipo: "Diagrama"
            }
        ]
    },

    // EJEMPLO 2: ESP32
    "esp32-devkit": {
        nombre: "Módulo ESP32 DevKit V1",
        categoria: "Componentes Electrónicos",
        descripcionCorta: "Microcontrolador con WiFi y Bluetooth integrado para IoT",
        descripcionLarga: "El ESP32 es un potente microcontrolador de bajo costo con WiFi y Bluetooth incorporados. Ideal para proyectos de Internet de las Cosas (IoT), domótica y aplicaciones inalámbricas. Compatible con Arduino IDE y MicroPython.",
        precioMenor: 12.00,
        precioMayor: 9.50,
        stock: true,
        imagenes: [
            "https://i.imgur.com/esp32-1.jpg",
            "https://i.imgur.com/esp32-2.jpg",
            "https://i.imgur.com/esp32-pinout.jpg"
        ],
        caracteristicas: [
            "WiFi 802.11 b/g/n",
            "Bluetooth 4.2 BLE",
            "Procesador dual-core a 240MHz",
            "520 KB SRAM",
            "30 pines GPIO",
            "12 canales ADC de 12 bits",
            "Voltaje: 3.3V",
            "Consumo ultra bajo"
        ],
        archivos: [
            {
                nombre: "Drivers CP2102 Windows/Mac/Linux",
                url: "https://ejemplo.com/cp2102-drivers.zip",
                tipo: "Drivers"
            },
            {
                nombre: "ESP32 Datasheet Oficial",
                url: "https://ejemplo.com/esp32-datasheet.pdf",
                tipo: "Datasheet"
            },
            {
                nombre: "Guía de Instalación Arduino IDE",
                url: "https://ejemplo.com/esp32-arduino-setup.pdf",
                tipo: "Tutorial"
            },
            {
                nombre: "Pinout ESP32 DevKit",
                url: "https://i.imgur.com/esp32-pinout.png",
                tipo: "Diagrama"
            }
        ]
    },

    // EJEMPLO 3: Laptop
    "laptop-hp-15": {
        nombre: "Laptop HP 15 - Intel Core i5",
        categoria: "Tecnología",
        descripcionCorta: "Laptop ideal para trabajo y estudio",
        descripcionLarga: "Laptop HP 15 reacondicionada en excelente estado. Perfecta para trabajo de oficina, estudios universitarios y uso diario. Incluye Windows 11 original y garantía de 3 meses.",
        precioMenor: 450.00,
        precioMayor: 420.00, // Precio para compras de 3 o más unidades
        stock: true,
        imagenes: [
            "https://i.imgur.com/laptop-hp-1.jpg",
            "https://i.imgur.com/laptop-hp-2.jpg",
            "https://i.imgur.com/laptop-hp-3.jpg"
        ],
        caracteristicas: [
            "Procesador: Intel Core i5 8va Gen",
            "RAM: 8GB DDR4",
            "Almacenamiento: SSD 256GB",
            "Pantalla: 15.6\" Full HD",
            "Tarjeta gráfica: Intel UHD 620",
            "Sistema Operativo: Windows 11 Pro",
            "Batería: 4-5 horas de autonomía",
            "Puerto HDMI, USB 3.0, USB-C",
            "Estado: Reacondicionado - Como nuevo",
            "Garantía: 3 meses"
        ],
        archivos: [
            {
                nombre: "Manual de Usuario HP 15",
                url: "https://ejemplo.com/hp15-manual.pdf",
                tipo: "Manual"
            },
            {
                nombre: "Drivers HP Official",
                url: "https://support.hp.com/drivers",
                tipo: "Drivers"
            }
        ]
    },

    // EJEMPLO 4: Cámara de Seguridad
    "camara-ip-hikvision": {
        nombre: "Cámara IP Hikvision 2MP 1080p",
        categoria: "Seguridad",
        descripcionCorta: "Cámara de vigilancia IP con visión nocturna",
        descripcionLarga: "Cámara IP profesional Hikvision de 2 Megapixeles con resolución Full HD 1080p. Visión nocturna hasta 30 metros, detección de movimiento y acceso remoto desde celular. Ideal para vigilancia residencial y comercial.",
        precioMenor: 85.00,
        precioMayor: 75.00, // Precio por compra de 4 o más cámaras
        stock: true,
        imagenes: [
            "https://i.imgur.com/hikvision-1.jpg",
            "https://i.imgur.com/hikvision-2.jpg",
            "https://i.imgur.com/hikvision-instalada.jpg"
        ],
        caracteristicas: [
            "Resolución: 1920x1080 Full HD",
            "Sensor: 1/2.8\" Progressive CMOS",
            "Visión nocturna: 30 metros IR",
            "Lente: 3.6mm fijo",
            "Compresión: H.265+/H.264",
            "PoE (Power over Ethernet)",
            "Detección de movimiento",
            "App móvil: Hik-Connect",
            "Resistente al agua: IP66",
            "Garantía: 1 año"
        ],
        archivos: [
            {
                nombre: "Manual de Instalación",
                url: "https://ejemplo.com/hikvision-manual.pdf",
                tipo: "Manual"
            },
            {
                nombre: "Software SADP (Búsqueda de cámaras)",
                url: "https://ejemplo.com/sadp-tool.exe",
                tipo: "Software"
            },
            {
                nombre: "App Hik-Connect Android",
                url: "https://play.google.com/store/apps/details?id=com.hik.hikconnect",
                tipo: "App"
            },
            {
                nombre: "Guía de Configuración Remota",
                url: "https://ejemplo.com/config-remota.pdf",
                tipo: "Tutorial"
            }
        ]
    },

    // PLANTILLA PARA AGREGAR MÁS PRODUCTOS:
    // Copia desde aquí ↓
    /*
    "id-producto-en-minusculas": {
        nombre: "Nombre del Producto",
        categoria: "Componentes Electrónicos / Tecnología / Seguridad",
        descripcionCorta: "Descripción breve",
        descripcionLarga: "Descripción detallada del producto...",
        precioMenor: 00.00,  // Precio por unidad
        precioMayor: 00.00,  // Precio por mayor (3+ unidades)
        stock: true,  // true = en stock, false = sin stock
        imagenes: [
            "URL_IMAGEN_1",
            "URL_IMAGEN_2",
            "URL_IMAGEN_3"
        ],
        caracteristicas: [
            "Característica 1",
            "Característica 2",
            "Característica 3"
        ],
        archivos: [
            {
                nombre: "Nombre del archivo",
                url: "https://link-descarga.com/archivo.pdf",
                tipo: "Drivers / Datasheet / Manual / Tutorial / Software"
            }
        ]
    },
    */
};
