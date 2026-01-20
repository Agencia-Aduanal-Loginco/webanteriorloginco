# Loginco - Sitio Web Estático

Este es un sitio web estático creado a partir del tema de WordPress de Loginco, utilizando únicamente HTML, CSS y JavaScript.

## Estructura del Proyecto

```
static-site/
├── index.html          # Página de inicio
├── css/
│   ├── bootstrap.min.css    # Framework Bootstrap
│   ├── custom.css           # Estilos personalizados de Loginco
│   └── style.css            # (por crear) Estilos adicionales
├── js/
│   ├── bootstrap.bundle.min.js  # Bootstrap JS con Popper
│   └── scripts.js               # Scripts personalizados
├── img/                # Imágenes, iconos y recursos visuales
└── README.md          # Este archivo
```

## Características

- ✅ **Diseño Responsivo**: Adaptable a diferentes tamaños de pantalla
- ✅ **Bootstrap 4**: Framework CSS para diseño y componentes
- ✅ **Animaciones**: Progress bars animadas y efectos hover
- ✅ **Navegación**: Sistema de navegación con páginas activas
- ✅ **Sin dependencias de servidor**: Funciona con archivos estáticos

## Instalación y Uso

### Opción 1: Servidor Local Simple

Puedes usar Python para servir el sitio localmente:

```bash
# Python 3
python3 -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

Luego abre tu navegador en: `http://localhost:8000`

### Opción 2: Live Server (VS Code)

Si usas Visual Studio Code, instala la extensión "Live Server" y haz clic derecho en `index.html` > "Open with Live Server"

### Opción 3: Subir a un Servidor Web

Simplemente copia todos los archivos a tu servidor web (Apache, Nginx, etc.) y accede mediante tu dominio.

## Páginas Disponibles

- **index.html** - Página de inicio (creada)
- loginco.html - Sobre la empresa (por crear)
- servicios.html - Servicios ofrecidos (por crear)
- alianzas.html - Alianzas comerciales (por crear)
- blog.html - Blog/Noticias (por crear)
- contacto.html - Formulario de contacto (por crear)

## Personalización

### Colores Principales

- **Azul Oscuro**: #00058C (color corporativo)
- **Morado**: #7D7FB6 (acento)
- **Aqua/Verde**: #2AB8B4 (servicios y botones)
- **Gris Claro**: #E8E7E7 (textos secundarios)

### Tipografía

- Fuente principal: Helvetica Neue, Helvetica, Arial, sans-serif
- Clases disponibles:
  - `.textoNegrito` - Texto en negrita
  - `.textoMorado` - Color morado
  - `.textoGrisClaro` - Color gris claro
  - `.textoBlanco` - Color blanco

## Funcionalidades JavaScript

1. **Navegación activa**: Resalta automáticamente la página actual en el menú
2. **Smooth scroll**: Desplazamiento suave para enlaces internos
3. **Animación de progress bars**: Las barras de progreso se animan al entrar en el viewport
4. **Validación de formularios**: Validación básica para el formulario de contacto
5. **Efectos hover**: Animaciones mejoradas para iconos de servicios

## Navegadores Soportados

- Chrome (última versión)
- Firefox (última versión)
- Safari (última versión)
- Edge (última versión)
- Opera (última versión)

## Próximos Pasos

1. Crear las páginas restantes (loginco.html, servicios.html, etc.)
2. Implementar un formulario de contacto funcional con backend
3. Optimizar imágenes para web
4. Agregar meta tags para SEO
5. Implementar Google Analytics

## Conversión desde WordPress

Este sitio fue convertido del tema de WordPress "Loginco" ubicado en el servidor 157.230.144.245. Los archivos originales se encuentran en:
- Tema: `/var/www/html/wp-content/themes/Loginco/`

## Contacto

Para más información sobre Loginco:
- Patentes Autorizadas: 3517/1656/1627/3474
- Web: www.loginco.com.mx

## Licencia

Copyright 2018. Todos los derechos reservados.
Desarrollado por: Xol (Estudio Gráfico Digital) - http://mixoestudio.com
