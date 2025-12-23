document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initTypewriter();
    initScrollReveal();
    initMobileMenu();
    initSkillBars();
    initParticleBackground();
    initSmoothScrolling();
    initProjectFiltering(); // Required for Projects page
    initContactForm();
});

// 1. Typewriter effect for hero section
function initTypewriter() {
    // Check if element exists before initializing (prevents errors on other pages)
    if (!document.getElementById('typed-text')) return;
    
    const typed = new Typed('#typed-text', {
        strings: [
            'Siham Elmali',
            'Data Scientist',
            'Data Engineer',
            'ML Engineer',
            'Problem Solver'
        ],
        typeSpeed: 60,
        backSpeed: 40,
        backDelay: 2000,
        startDelay: 500,
        loop: true,
        showCursor: true,
        cursorChar: '|'
    });
}

// 2. Scroll reveal animations
function initScrollReveal() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
            }
        });
    }, observerOptions);

    // Observe all scroll-reveal elements
    document.querySelectorAll('.scroll-reveal').forEach(el => {
        observer.observe(el);
    });
}

// 3. Mobile menu functionality
function initMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }
}

// 4. Animated skill bars
function initSkillBars() {
    const skillBars = document.querySelectorAll('.skill-bar');
    
    // Only proceed if skill bars exist
    if(skillBars.length === 0) return;

    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bar = entry.target;
                const width = bar.dataset.width || bar.getAttribute('data-width');
                
                anime({
                    targets: bar,
                    scaleX: [0, parseFloat(width) / 100], 
                    duration: 1500,
                    easing: 'easeOutExpo',
                    delay: 200
                });
                
                // Stop observing after animation
                skillObserver.unobserve(bar);
            }
        });
    }, { threshold: 0.1 });

    skillBars.forEach(bar => {
        skillObserver.observe(bar);
    });
}

// 5. Particle background using p5.js
function initParticleBackground() {
    const container = document.getElementById('particle-container');
    if (!container) return;

    new p5((p) => {
        let particles = [];
        const numParticles = 40; 

        p.setup = () => {
            const canvas = p.createCanvas(container.offsetWidth, container.offsetHeight);
            canvas.parent('particle-container');
            
            for (let i = 0; i < numParticles; i++) {
                particles.push(new Particle(p));
            }
        };

        p.draw = () => {
            p.clear();
            particles.forEach(particle => {
                particle.update();
                particle.display();
            });
        };

        p.windowResized = () => {
            p.resizeCanvas(container.offsetWidth, container.offsetHeight);
        };

        class Particle {
            constructor(p) {
                this.p = p;
                this.x = p.random(p.width);
                this.y = p.random(p.height);
                this.vx = p.random(-0.5, 0.5);
                this.vy = p.random(-0.5, 0.5);
                this.size = p.random(2, 5);
            }
            update() {
                this.x += this.vx;
                this.y += this.vy;
                
                if (this.x < 0 || this.x > this.p.width) this.vx *= -1;
                if (this.y < 0 || this.y > this.p.height) this.vy *= -1;
            }
            display() {
                this.p.noStroke();
                this.p.fill(193, 120, 23, 100); // Copper color
                this.p.circle(this.x, this.y, this.size);
            }
        }
    });
}

// 6. Smooth scrolling for anchor links
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if(targetId === '#') return; // Ignore empty anchors
            
            const target = document.querySelector(targetId);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Close mobile menu if open
                const mobileMenu = document.getElementById('mobile-menu');
                if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                    mobileMenu.classList.add('hidden');
                }
            }
        });
    });
}

// 7. Project Filtering (Essential for projects.html)
function initProjectFiltering() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    if (!filterBtns.length) return;

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update Active Visual State
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Filter Projects
            const filterValue = btn.getAttribute('data-filter');
            
            projectCards.forEach(card => {
                const categories = card.getAttribute('data-categories') ? card.getAttribute('data-categories').split(',') : [];
                
                if (filterValue === 'all' || categories.includes(filterValue)) {
                    card.style.display = 'block';
                    
                    // Reset animation
                    anime({
                        targets: card,
                        opacity: [0, 1],
                        scale: [0.95, 1],
                        duration: 400,
                        easing: 'easeOutQuad'
                    });
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}

// 8. Contact form functionality
function initContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        
        if (validateContactForm(data)) {
            showFormMessage('Thank you for your message! I\'ll get back to you soon.', 'success');
            form.reset();
        } else {
            showFormMessage('Please fill in all required fields correctly.', 'error');
        }
    });
}

function validateContactForm(data) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return data.name && data.email && emailRegex.test(data.email) && data.message;
}

function showFormMessage(message, type) {
    // Create feedback element
    const messageDiv = document.createElement('div');
    messageDiv.className = `fixed top-24 right-4 p-4 rounded-lg shadow-lg z-50 ${
        type === 'success' ? 'bg-green-600 text-white' : 'bg-red-600 text-white'
    }`;
    messageDiv.textContent = message;
    
    document.body.appendChild(messageDiv);
    
    // Animate in
    anime({
        targets: messageDiv,
        translateX: [100, 0],
        opacity: [0, 1],
        duration: 400,
        easing: 'easeOutCubic'
    });
    
    // Remove after 3 seconds
    setTimeout(() => {
        anime({
            targets: messageDiv,
            translateX: [0, 100],
            opacity: [1, 0],
            duration: 400,
            easing: 'easeInCubic',
            complete: () => {
                if(document.body.contains(messageDiv)) {
                    document.body.removeChild(messageDiv);
                }
            }
        });
    }, 3000);
}

// 9. Navbar Scroll Styling (Debounced)
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

window.addEventListener('scroll', debounce(() => {
    const navbar = document.querySelector('nav');
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.classList.add('shadow-md');
        } else {
            navbar.classList.remove('shadow-md');
        }
    }
}, 10));

// 10. Modal functionality (Exposed to window for inline HTML onclicks)
window.openProjectModal = function(projectId) {
    const modal = document.getElementById(`modal-${projectId}`);
    if (modal) {
        modal.classList.remove('hidden');
        // Prevent background scrolling
        document.body.style.overflow = 'hidden'; 
        
        anime({
            targets: modal.querySelector('.modal-content'),
            scale: [0.9, 1],
            opacity: [0, 1],
            duration: 300,
            easing: 'easeOutCubic'
        });
    }
}

window.closeProjectModal = function(projectId) {
    const modal = document.getElementById(`modal-${projectId}`);
    if (modal) {
        anime({
            targets: modal.querySelector('.modal-content'),
            scale: [1, 0.9],
            opacity: [1, 0],
            duration: 200,
            easing: 'easeInCubic',
            complete: () => {
                modal.classList.add('hidden');
                document.body.style.overflow = 'auto';
            }
        });
    }
}