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

// ==================== EFEITO DE FAÍSCAS (SIMPLES E FUNCIONAL) ====================
let animFrame = null;

function initSparks() {
    const canvas = document.getElementById('bgCanvas');
    if (!canvas) return;
    
    if (animFrame) cancelAnimationFrame(animFrame);
    
    const ctx = canvas.getContext('2d');
    let width = window.innerWidth;
    let height = window.innerHeight;
    
    let particles = [];
    const particleCount = 200;
    
    function resizeCanvas() {
        width = window.innerWidth;
        height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;
        initParticles();
    }
    
    function initParticles() {
        particles = [];
        for (let i = 0; i < particleCount; i++) {
            particles.push({
                x: Math.random() * width,
                y: Math.random() * height,
                radius: Math.random() * 3 + 1.5,  // ← aumentado
                alpha: Math.random() * 0.6 + 0.3, // ← aumentado
                speedX: (Math.random() - 0.5) * 0.4,
                speedY: Math.random() * 0.3 + 0.1,
                color: `hsl(${25 + Math.random() * 15}, 100%, 55%)`
            });
        }
    }
    
    function draw() {
        ctx.clearRect(0, 0, width, height);
        
        for (let i = 0; i < particles.length; i++) {
            const p = particles[i];
            
            // Movimento
            p.x += p.speedX;
            p.y += p.speedY;
            
            // Reset quando sai da tela
            if (p.y > height) {
                p.y = 0;
                p.x = Math.random() * width;
            }
            if (p.x < 0) p.x = width;
            if (p.x > width) p.x = 0;
            
            // Pisca mais forte
            const twinkle = Math.sin(Date.now() * 0.003 * p.radius) * 0.3;
            
            // GLOW (brilho grande atrás)
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius * 2.5, 0, Math.PI * 2);
            ctx.fillStyle = p.color;
            ctx.globalAlpha = 0.4 + twinkle * 0.3;
            ctx.fill();
            
            // Partícula principal (mais brilhante)
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            ctx.fillStyle = p.color;
            ctx.globalAlpha = 0.9 + twinkle;
            ctx.fill();
            
            // Núcleo branco
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius * 0.5, 0, Math.PI * 2);
            ctx.fillStyle = '#FFFFFF';
            ctx.globalAlpha = 0.8;
            ctx.fill();
        }
        
        animFrame = requestAnimationFrame(draw);
    }
    
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    draw();
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
    initSparks(); // ← efeito de faíscas
    
    console.log('🚀 Manutech - Site carregado com sucesso!');
});
