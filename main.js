document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initTypewriter();
    initScrollReveal();
    initMobileMenu();
    initSkillBars();
    initParticleBackground();
    initSmoothScrolling();
});

// Typewriter effect for hero section
function initTypewriter() {
    const typed = new Typed('#typed-text', {
        strings: [
            'Siham Elmali',
            'Data Scientist',
            'ML Engineer',
            'Problem Solver'
        ],
        typeSpeed: 80,
        backSpeed: 60,
        backDelay: 2000,
        startDelay: 500,
        loop: true,
        showCursor: false
    });
}

// Scroll reveal animations
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

// Mobile menu functionality
function initMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }
}

// Animated skill bars
function initSkillBars() {
    const skillBars = document.querySelectorAll('.skill-bar');
    
    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bar = entry.target;
                const width = bar.dataset.width;
                
                anime({
                    targets: bar,
                    scaleX: [0, 1],
                    width: width,
                    duration: 1500,
                    easing: 'easeOutCubic',
                    delay: anime.stagger(200)
                });
            }
        });
    }, { threshold: 0.5 });

    skillBars.forEach(bar => {
        skillObserver.observe(bar);
    });
}

// Particle background using p5.js
function initParticleBackground() {
    const container = document.getElementById('particle-container');
    if (!container) return;

    new p5((p) => {
        let particles = [];
        const numParticles = 50;

        p.setup = () => {
            const canvas = p.createCanvas(container.offsetWidth, container.offsetHeight);
            canvas.parent('particle-container');
            
            // Create particles
            for (let i = 0; i < numParticles; i++) {
                particles.push(new Particle(p));
            }
        };

        p.draw = () => {
            p.clear();
            
            // Update and display particles
            particles.forEach(particle => {
                particle.update();
                particle.display();
            });
            
            // Connect nearby particles
            connectParticles(p, particles);
        };

        p.windowResized = () => {
            p.resizeCanvas(container.offsetWidth, container.offsetHeight);
        };

        // Particle class
        function Particle(p) {
            this.pos = p.createVector(p.random(p.width), p.random(p.height));
            this.vel = p.createVector(p.random(-0.5, 0.5), p.random(-0.5, 0.5));
            this.size = p.random(2, 4);
            this.opacity = p.random(0.3, 0.8);

            this.update = () => {
                this.pos.add(this.vel);
                
                // Wrap around edges
                if (this.pos.x < 0) this.pos.x = p.width;
                if (this.pos.x > p.width) this.pos.x = 0;
                if (this.pos.y < 0) this.pos.y = p.height;
                if (this.pos.y > p.height) this.pos.y = 0;
            };

            this.display = () => {
                p.fill(255, 255, 255, this.opacity * 255);
                p.noStroke();
                p.ellipse(this.pos.x, this.pos.y, this.size);
            };
        }

        // Connect nearby particles with lines
        function connectParticles(p, particles) {
            const maxDistance = 100;
            
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const distance = p5.Vector.dist(particles[i].pos, particles[j].pos);
                    
                    if (distance < maxDistance) {
                        const alpha = p.map(distance, 0, maxDistance, 0.3, 0);
                        p.stroke(255, 255, 255, alpha * 255);
                        p.strokeWeight(0.5);
                        p.line(
                            particles[i].pos.x, particles[i].pos.y,
                            particles[j].pos.x, particles[j].pos.y
                        );
                    }
                }
            }
        }
    });
}

// Smooth scrolling for anchor links
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Project filtering functionality (for projects page)
function initProjectFiltering() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.dataset.filter;
            
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Filter projects
            projectCards.forEach(card => {
                const categories = card.dataset.categories.split(',');
                
                if (filter === 'all' || categories.includes(filter)) {
                    anime({
                        targets: card,
                        opacity: [0, 1],
                        scale: [0.8, 1],
                        duration: 500,
                        easing: 'easeOutCubic'
                    });
                    card.style.display = 'block';
                } else {
                    anime({
                        targets: card,
                        opacity: [1, 0],
                        scale: [1, 0.8],
                        duration: 300,
                        easing: 'easeInCubic',
                        complete: () => {
                            card.style.display = 'none';
                        }
                    });
                }
            });
        });
    });
}

// Modal functionality for project details
function openProjectModal(projectId) {
    const modal = document.getElementById(`modal-${projectId}`);
    if (modal) {
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
        
        anime({
            targets: modal.querySelector('.modal-content'),
            scale: [0.8, 1],
            opacity: [0, 1],
            duration: 300,
            easing: 'easeOutCubic'
        });
    }
}

function closeProjectModal(projectId) {
    const modal = document.getElementById(`modal-${projectId}`);
    if (modal) {
        anime({
            targets: modal.querySelector('.modal-content'),
            scale: [1, 0.8],
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

// Contact form functionality
function initContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        
        // Validate form
        if (validateContactForm(data)) {
            // Show success message
            showFormMessage('Thank you for your message! I\'ll get back to you soon.', 'success');
            form.reset();
        } else {
            showFormMessage('Please fill in all required fields correctly.', 'error');
        }
    });
}

function validateContactForm(data) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    return data.name && 
           data.email && 
           emailRegex.test(data.email) && 
           data.subject && 
           data.message;
}

function showFormMessage(message, type) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `fixed top-20 right-4 p-4 rounded-lg shadow-lg z-50 ${
        type === 'success' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
    }`;
    messageDiv.textContent = message;
    
    document.body.appendChild(messageDiv);
    
    // Animate in
    anime({
        targets: messageDiv,
        translateX: [300, 0],
        opacity: [0, 1],
        duration: 300,
        easing: 'easeOutCubic'
    });
    
    // Remove after 3 seconds
    setTimeout(() => {
        anime({
            targets: messageDiv,
            translateX: [0, 300],
            opacity: [1, 0],
            duration: 300,
            easing: 'easeInCubic',
            complete: () => {
                document.body.removeChild(messageDiv);
            }
        });
    }, 3000);
}

// Skills radar chart (for about page)
function initSkillsRadarChart() {
    const chartContainer = document.getElementById('skills-radar-chart');
    if (!chartContainer) return;

    // This would be implemented with ECharts.js when the about page is created
    console.log('Skills radar chart would be initialized here');
}

// Utility functions
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

// Add scroll-based navbar styling
window.addEventListener('scroll', debounce(() => {
    const navbar = document.querySelector('nav');
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}, 10));

// Export functions for use in other pages
window.WebsiteFunctions = {
    initProjectFiltering,
    openProjectModal,
    closeProjectModal,
    initContactForm,
    initSkillsRadarChart
};