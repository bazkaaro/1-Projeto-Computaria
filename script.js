// ==================== SCROLL REVEAL ====================
function initScrollReveal() {
    const reveals = document.querySelectorAll('.reveal');
    
    function revealOnScroll() {
        for (let i = 0; i < reveals.length; i++) {
            const windowHeight = window.innerHeight;
            const revealTop = reveals[i].getBoundingClientRect().top;
            const revealPoint = 100;
            
            if (revealTop < windowHeight - revealPoint) {
                reveals[i].classList.add('active');
            }
        }
    }
    
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll();
}

// ==================== IMAGENS FLUTUANTES ====================
function initFloatingImages() {
    const floatLeft = document.getElementById('floatImgLeft');
    const floatRight = document.getElementById('floatImgRight');
    
    if (!floatLeft && !floatRight) return;
    
    function checkFloatingImages() {
        const imagensSection = document.querySelector('.imagens-section');
        if (!imagensSection) return;
        
        const sectionTop = imagensSection.getBoundingClientRect().top;
        const sectionBottom = imagensSection.getBoundingClientRect().bottom;
        const windowHeight = window.innerHeight;
        
        if (sectionTop < windowHeight - 50 && sectionBottom > 0) {
            if (floatLeft) floatLeft.classList.add('visible');
            if (floatRight) floatRight.classList.add('visible');
        } else {
            if (floatLeft) floatLeft.classList.remove('visible');
            if (floatRight) floatRight.classList.remove('visible');
        }
    }
    
    window.addEventListener('scroll', checkFloatingImages);
    checkFloatingImages();
}

// ==================== MOBILE MENU ====================
function initMobileMenu() {
    const mobileBtn = document.getElementById('mobileMenuBtn');
    const nav = document.querySelector('.nav');
    
    if (mobileBtn) {
        mobileBtn.addEventListener('click', () => {
            nav.classList.toggle('active');
            mobileBtn.innerHTML = nav.classList.contains('active') ? 
                '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
        });
    }
    
    const navLinks = document.querySelectorAll('.nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active');
            if (mobileBtn) mobileBtn.innerHTML = '<i class="fas fa-bars"></i>';
        });
    });
}

// ==================== FORMULÁRIO ====================
function initContactForm() {
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('✅ Mensagem enviada! Entraremos em contato pelo WhatsApp em até 30 minutos.');
            form.reset();
        });
    }
}

// ==================== HEADER SCROLL ====================
function initHeaderScroll() {
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.background = 'rgba(0, 0, 0, 0.98)';
            header.style.backdropFilter = 'blur(15px)';
        } else {
            header.style.background = 'rgba(0, 0, 0, 0.95)';
            header.style.backdropFilter = 'blur(10px)';
        }
    });
}

// ==================== SMOOTH SCROLL ====================
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ==================== SIDEBAR ====================
function initSidebar() {
    const sidebarBtn = document.getElementById('sidebarBtn');
    const sidebar = document.getElementById('sidebar');
    const closeSidebar = document.getElementById('closeSidebar');
    const overlay = document.getElementById('overlay');
    
    function openSidebar() {
        sidebar.classList.add('active');
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    
    function closeSidebarFunc() {
        sidebar.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    }
    
    if (sidebarBtn) sidebarBtn.addEventListener('click', openSidebar);
    if (closeSidebar) closeSidebar.addEventListener('click', closeSidebarFunc);
    if (overlay) overlay.addEventListener('click', closeSidebarFunc);
}

// ==================== AJUSTE DA LOGO ====================
function fixLogoBackground() {
    const logoImgs = document.querySelectorAll('.logo-img, #imagemCentral');
    logoImgs.forEach(img => {
        if (img) {
            img.style.backgroundColor = '#000000';
            img.style.mixBlendMode = 'normal';
        }
    });
}

// ==================== CANVAS BACKGROUND (CORRIGIDO) ====================
let animationId = null;

function initCanvasBackground() {
    const canvas = document.getElementById('bgCanvas');
    if (!canvas) return;
    
    // Se já existe animação, para ela
    if (animationId) {
        cancelAnimationFrame(animationId);
        animationId = null;
    }
    
    const ctx = canvas.getContext('2d');
    let width = window.innerWidth;
    let height = window.innerHeight;
    
    // Configurações
    let particles = [];
    const maxParticleCount = 180;
    const minParticleCount = 40;
    const mouseRadius = 150;
    let mouseX = width / 2;
    let mouseY = height / 2;
    
    const colors = ['#FF8C00', '#FF9D00', '#E67E00', '#FFB347', '#FF7A00'];
    let scrollProgress = 0;
    
    function updateScrollProgress() {
        const scrollY = window.scrollY;
        const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
        scrollProgress = maxScroll > 0 ? scrollY / maxScroll : 0;
        
        const targetCount = minParticleCount;
        if (particles.length !== targetCount) {
            adjustParticleCount(targetCount);
        }
    }
    
    function adjustParticleCount(targetCount) {
        const currentCount = particles.length;
        
        if (targetCount > currentCount) {
            for (let i = 0; i < targetCount - currentCount; i++) {
                addParticle();
            }
        } else if (targetCount < currentCount) {
            particles = particles.slice(0, targetCount);
        }
    }
    
    function addParticle() {
        particles.push({
            x: Math.random() * width,
            y: Math.random() * height,
            radius: Math.random() * 2 + 0.8,
            color: colors[Math.floor(Math.random() * colors.length)],
            alpha: Math.random() * 0.5 + 0.25,
            originalX: Math.random() * width,
            originalY: Math.random() * height,
            angle: Math.random() * Math.PI * 2,
            floatSpeed: Math.random() * 0.02 + 0.007,
            pulseSpeed: Math.random() * 0.015 + 0.008,
            pulsePhase: Math.random() * Math.PI * 2
        });
    }
    
    function resizeCanvas() {
        width = window.innerWidth;
        height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;
        
        const currentCount = particles.length;
        particles = [];
        for (let i = 0; i < currentCount; i++) {
            addParticle();
        }
    }
    
    // Inicializar partículas
    for (let i = 0; i < minParticleCount; i++) {
        addParticle();
    }
    
    function drawParticles() {
        if (!canvas || !ctx) return;
        
        ctx.clearRect(0, 0, width, height);
        
        let intensity = 0;
        
        const connectionIntensity = 0.28;
        const particleAlphaMultiplier = 0.86;
        
        // Desenhar conexões primeiro (para ficar atrás)
        ctx.globalAlpha = connectionIntensity * 1.2;
        for (let i = 0; i < particles.length; i++) {
            const maxConnections = 3;
            let connections = 0;
            
            for (let j = i + 1; j < particles.length && connections < maxConnections; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                const maxDist = 180;
                
                if (dist < maxDist) {
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.strokeStyle = '#FF8C00';
                    ctx.lineWidth = 0.8;
                    ctx.globalAlpha = (connectionIntensity * (1 - dist / maxDist)) * 0.6;
                    ctx.stroke();
                    connections++;
                }
            }
        }
        
        // Desenhar partículas
        for (let i = 0; i < particles.length; i++) {
            const p = particles[i];
            
            // Movimento
            const speedFactor = 1;
            p.angle += p.floatSpeed * speedFactor;
            p.x = p.originalX + Math.sin(p.angle) * 35;
            p.y = p.originalY + Math.cos(p.angle * 0.7) * 25;
            
            p.x = Math.max(5, Math.min(width - 5, p.x));
            p.y = Math.max(5, Math.min(height - 5, p.y));
            
            // Efeito mouse
            const dx = mouseX - p.x;
            const dy = mouseY - p.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            
            let radius = p.radius;
            let alpha = p.alpha * 0.9;
            
            // Pulsação leve
            const pulse = Math.sin(Date.now() * p.pulseSpeed + p.pulsePhase) * 0.12;
            radius = radius * (1 + pulse * 0.5);
            radius = Math.max(radius, 0.4);
            
            // Cor
            let finalColor = p.color;
            
            if (dist < mouseRadius) {
                const force = (1 - dist / mouseRadius) * 0.4;
                radius = radius * 1.2;
                alpha = alpha + 0.2;
                finalColor = '#FFB347';
            }
            
            // GLOW
            ctx.beginPath();
            ctx.shadowBlur = radius * 1.2;
            ctx.shadowColor = finalColor;
            ctx.arc(p.x, p.y, radius * 1.2, 0, Math.PI * 2);
            ctx.fillStyle = finalColor;
            ctx.globalAlpha = Math.min(alpha * particleAlphaMultiplier * 0.75, 0.7);
            ctx.fill();
            ctx.shadowBlur = 0;
            ctx.shadowColor = 'transparent';
            
            // Núcleo
            ctx.beginPath();
            ctx.arc(p.x, p.y, radius * 0.7, 0, Math.PI * 2);
            ctx.fillStyle = '#FFCC55';
            ctx.globalAlpha = 0.85;
            ctx.fill();
            
            // Raio externo
            if (intensity > 0.5) {
                ctx.beginPath();
                ctx.arc(p.x, p.y, radius * (1.4 + intensity * 0.7), 0, Math.PI * 2);
                ctx.fillStyle = finalColor;
                ctx.globalAlpha = alpha * 0.1 * intensity;
                ctx.fill();
            }
            
            // Efeito estrela
            if (intensity > 0.8 && Math.random() < 0.05) {
                for (let s = 0; s < 4; s++) {
                    ctx.beginPath();
                    const angle = (s * Math.PI * 2 / 4) + Date.now() * 0.005;
                    const starX = p.x + Math.cos(angle) * radius * 2.5;
                    const starY = p.y + Math.sin(angle) * radius * 2.5;
                    ctx.arc(starX, starY, radius * 0.4, 0, Math.PI * 2);
                    ctx.fillStyle = '#FFDD88';
                    ctx.globalAlpha = 0.7;
                    ctx.fill();
                }
            }
        }
        
        ctx.globalAlpha = 1;
        animationId = requestAnimationFrame(drawParticles);
    }
    
    function onMouseMove(e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
    }
    
    function onScroll() {
        updateScrollProgress();
    }
    
    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('scroll', onScroll);
    
    resizeCanvas();
    updateScrollProgress();
    drawParticles();
}

// ==================== INICIALIZAR ====================
document.addEventListener('DOMContentLoaded', () => {
    initScrollReveal();
    initFloatingImages();
    initMobileMenu();
    initContactForm();
    initHeaderScroll();
    initSmoothScroll();
    initSidebar();
    fixLogoBackground();
    initCanvasBackground();
    
    console.log('🚀 Manutech - Site carregado com sucesso!');
});
