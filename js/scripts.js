/**
 * Loginco - Scripts personalizados
 */

document.addEventListener('DOMContentLoaded', function() {
    
    // Navegación activa según la página actual
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
    
    // Smooth scroll para enlaces internos
    const internalLinks = document.querySelectorAll('a[href^="#"]');
    internalLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId !== '#') {
                e.preventDefault();
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
    
    // Animación para progress bars cuando entran en viewport
    const progressBars = document.querySelectorAll('progress');
    
    const animateProgress = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBar = entry.target;
                const value = progressBar.getAttribute('value');
                progressBar.setAttribute('value', 0);
                
                setTimeout(() => {
                    let currentValue = 0;
                    const interval = setInterval(() => {
                        if (currentValue >= value) {
                            clearInterval(interval);
                        } else {
                            currentValue += 2;
                            progressBar.setAttribute('value', currentValue);
                        }
                    }, 20);
                }, 200);
                
                observer.unobserve(progressBar);
            }
        });
    };
    
    if ('IntersectionObserver' in window) {
        const progressObserver = new IntersectionObserver(animateProgress, {
            threshold: 0.5
        });
        
        progressBars.forEach(bar => {
            progressObserver.observe(bar);
        });
    }
    
    // Validación de formularios (para la página de contacto)
    const contactForm = document.querySelector('#contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const nombre = this.querySelector('[name="nombre"]').value.trim();
            const email = this.querySelector('[name="email"]').value.trim();
            const mensaje = this.querySelector('[name="mensaje"]').value.trim();
            
            if (nombre === '' || email === '' || mensaje === '') {
                alert('Por favor, completa todos los campos.');
                return false;
            }
            
            // Validación de email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Por favor, ingresa un email válido.');
                return false;
            }
            
            // Aquí iría la lógica para enviar el formulario
            alert('¡Gracias por contactarnos! Te responderemos pronto.');
            this.reset();
        });
    }
    
    // Efectos hover mejorados
    const serviceIcons = document.querySelectorAll('.iconos-servicios');
    serviceIcons.forEach(icon => {
        icon.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        icon.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Console log para debug
    console.log('Loginco - Scripts cargados correctamente');
});
