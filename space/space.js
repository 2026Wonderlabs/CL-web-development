// Cosmic Horizons - Space Exploration Interactive JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all interactive features
    initSmoothScrolling();
    initNavbarEffects();
    initMissionCards();
    initDiscoveryCards();
    initTechnologyCards();
    initContactForm();
    initAnimations();
    initEarthOrbit();
    initParticleSystem();

    console.log('Cosmic Horizons - Interactive features loaded successfully!');
});

// Smooth Scrolling for Navigation
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Navbar Effects and Background Changes
function initNavbarEffects() {
    const navbar = document.querySelector('.navbar');
    let lastScrollTop = 0;

    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > 100) {
            navbar.style.background = 'rgba(10, 10, 10, 0.95)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 212, 255, 0.1)';
        } else {
            navbar.style.background = 'rgba(10, 10, 10, 0.9)';
            navbar.style.boxShadow = 'none';
        }

        lastScrollTop = scrollTop;
    });
}

// Mission Cards Interactive Effects
function initMissionCards() {
    const missionCards = document.querySelectorAll('.mission-card');

    missionCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
            this.style.boxShadow = '0 25px 50px rgba(0, 212, 255, 0.2)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '0 10px 30px rgba(0, 212, 255, 0.1)';
        });

        // Add click effect for mission links
        const missionLink = card.querySelector('.mission-link');
        if (missionLink) {
            missionLink.addEventListener('click', function(e) {
                e.stopPropagation();
                // Simulate loading state
                this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Loading...';
                setTimeout(() => {
                    this.innerHTML = 'Learn More <i class="fas fa-arrow-right"></i>';
                }, 2000);
            });
        }
    });
}

// Discovery Cards Hover Effects
function initDiscoveryCards() {
    const discoveryCards = document.querySelectorAll('.discovery-card');

    discoveryCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) rotate(1deg)';
            this.style.boxShadow = '0 20px 40px rgba(157, 78, 221, 0.2)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) rotate(0deg)';
            this.style.boxShadow = '0 10px 30px rgba(0, 212, 255, 0.1)';
        });
    });
}

// Technology Cards Interactive Effects
function initTechnologyCards() {
    const techCards = document.querySelectorAll('.tech-card');

    techCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            const icon = this.querySelector('.tech-icon');
            icon.style.transform = 'scale(1.1) rotate(5deg)';
            icon.style.boxShadow = '0 15px 30px rgba(0, 212, 255, 0.3)';
            this.style.borderColor = 'var(--neon-blue)';
        });

        card.addEventListener('mouseleave', function() {
            const icon = this.querySelector('.tech-icon');
            icon.style.transform = 'scale(1) rotate(0deg)';
            icon.style.boxShadow = '0 10px 20px rgba(0, 212, 255, 0.1)';
            this.style.borderColor = 'var(--border-color)';
        });
    });
}

// Contact Form Validation and Submission
function initContactForm() {
    const contactForm = document.querySelector('.contact-form form');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Get form data
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);

            // Validation
            if (!data.name || !data.email || !data.message) {
                showNotification('Please fill in all required fields.', 'error');
                return;
            }

            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(data.email)) {
                showNotification('Please enter a valid email address.', 'error');
                return;
            }

            // Simulate form submission
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            submitBtn.disabled = true;

            setTimeout(() => {
                showNotification('Message sent successfully! We\'ll get back to you soon.', 'success');
                this.reset();
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
            }, 2000);
        });
    }
}

// Notification System
function showNotification(message, type) {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());

    // Create new notification
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i>
        <span>${message}</span>
    `;

    // Style the notification
    Object.assign(notification.style, {
        position: 'fixed',
        top: '100px',
        right: '20px',
        background: type === 'success' ? 'rgba(0, 255, 0, 0.1)' : 'rgba(255, 0, 0, 0.1)',
        border: `1px solid ${type === 'success' ? '#00ff00' : '#ff0000'}`,
        color: type === 'success' ? '#00ff00' : '#ff0000',
        padding: '1rem 1.5rem',
        borderRadius: '10px',
        backdropFilter: 'blur(10px)',
        zIndex: '10000',
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem',
        fontWeight: '600',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
        animation: 'slideInRight 0.3s ease-out'
    });

    document.body.appendChild(notification);

    // Auto remove after 5 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease-in';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 5000);
}

// Add notification animations to CSS dynamically
const notificationStyles = document.createElement('style');
notificationStyles.textContent = `
    @keyframes slideInRight {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    @keyframes slideOutRight {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
`;
document.head.appendChild(notificationStyles);

// Intersection Observer for Animations
function initAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);

    // Observe sections and cards
    const sections = document.querySelectorAll('section');
    const cards = document.querySelectorAll('.mission-card, .discovery-card, .tech-card');

    [...sections, ...cards].forEach(element => {
        observer.observe(element);
    });
}

// Enhanced Earth Orbit Animation
function initEarthOrbit() {
    const earth = document.querySelector('.earth');
    const satellite = document.querySelector('.satellite');
    const moon = document.querySelector('.moon');

    if (earth && satellite && moon) {
        // Add some dynamic movement variations
        let earthAngle = 0;
        let satelliteAngle = 0;
        let moonAngle = 0;

        function animateOrbit() {
            earthAngle += 0.01;
            satelliteAngle += 0.015;
            moonAngle += 0.008;

            // Add slight wobble to make it more realistic
            const earthWobble = Math.sin(earthAngle * 2) * 2;
            const satelliteWobble = Math.sin(satelliteAngle * 3) * 1;
            const moonWobble = Math.sin(moonAngle * 1.5) * 1.5;

            earth.style.transform = `rotate(${earthAngle}rad) translateX(125px) rotate(${-earthAngle}rad) translateY(${earthWobble}px)`;
            satellite.style.transform = `rotate(${satelliteAngle}rad) translateX(100px) rotate(${-satelliteAngle}rad) translateY(${satelliteWobble}px)`;
            moon.style.transform = `rotate(${moonAngle}rad) translateX(150px) rotate(${-moonAngle}rad) translateY(${moonWobble}px)`;

            requestAnimationFrame(animateOrbit);
        }

        animateOrbit();
    }
}

// Particle System for Cosmic Background
function initParticleSystem() {
    const heroBackground = document.querySelector('.hero-background');
    if (!heroBackground) return;

    // Create particle container
    const particleContainer = document.createElement('div');
    particleContainer.className = 'particle-container';
    Object.assign(particleContainer.style, {
        position: 'absolute',
        top: '0',
        left: '0',
        right: '0',
        bottom: '0',
        pointerEvents: 'none',
        zIndex: '1'
    });

    heroBackground.appendChild(particleContainer);

    // Create particles
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'cosmic-particle';

        Object.assign(particle.style, {
            position: 'absolute',
            width: Math.random() * 3 + 1 + 'px',
            height: Math.random() * 3 + 1 + 'px',
            background: Math.random() > 0.5 ? 'var(--neon-blue)' : 'var(--neon-purple)',
            borderRadius: '50%',
            left: Math.random() * 100 + '%',
            top: Math.random() * 100 + '%',
            opacity: Math.random() * 0.8 + 0.2,
            animation: `particleFloat ${Math.random() * 10 + 10}s linear infinite`,
            boxShadow: '0 0 6px currentColor'
        });

        particleContainer.appendChild(particle);
    }

    // Add particle animation
    const particleAnimation = document.createElement('style');
    particleAnimation.textContent = `
        @keyframes particleFloat {
            from {
                transform: translateY(0px) translateX(0px);
                opacity: 0;
            }
            10% {
                opacity: 1;
            }
            90% {
                opacity: 1;
            }
            to {
                transform: translateY(-100vh) translateX(${Math.random() * 200 - 100}px);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(particleAnimation);
}

// Button Click Effects
function initButtonEffects() {
    const buttons = document.querySelectorAll('.btn');

    buttons.forEach(button => {
        button.addEventListener('click', function(event) {
            // Add click ripple effect
            const ripple = document.createElement('div');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = event.clientX - rect.left - size / 2;
            const y = event.clientY - rect.top - size / 2;

            Object.assign(ripple.style, {
                position: 'absolute',
                width: size + 'px',
                height: size + 'px',
                left: x + 'px',
                top: y + 'px',
                background: 'rgba(255, 255, 255, 0.3)',
                borderRadius: '50%',
                transform: 'scale(0)',
                animation: 'ripple 0.6s ease-out',
                pointerEvents: 'none'
            });

            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);

            setTimeout(() => {
                if (ripple.parentNode) {
                    ripple.parentNode.removeChild(ripple);
                }
            }, 600);
        });
    });

    // Add ripple animation
    const rippleStyle = document.createElement('style');
    rippleStyle.textContent = `
        @keyframes ripple {
            to {
                transform: scale(2);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(rippleStyle);
}

// Initialize button effects
initButtonEffects();

// Keyboard Navigation Support
document.addEventListener('keydown', function(e) {
    // Close any open modals with Escape (if implemented later)
    if (e.key === 'Escape') {
        // Modal close logic would go here
        console.log('Escape key pressed - modal close logic');
    }

    // Space bar to pause/play animations (if implemented)
    if (e.key === ' ') {
        e.preventDefault();
        // Animation pause/play logic would go here
        console.log('Space bar pressed - animation toggle');
    }
});

// Performance Optimization: Debounce scroll events
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

// Apply debounced scroll handler for performance
const debouncedScroll = debounce(function() {
    // Additional scroll-based features can be added here
    // For example: parallax effects, lazy loading, etc.
}, 16);

window.addEventListener('scroll', debouncedScroll);

// Mission Status Updates (Simulated real-time updates)
function initMissionUpdates() {
    const missionStatuses = document.querySelectorAll('.mission-status');

    // Simulate occasional status updates
    setInterval(() => {
        if (Math.random() < 0.1) { // 10% chance every 30 seconds
            const randomMission = missionStatuses[Math.floor(Math.random() * missionStatuses.length)];
            if (randomMission) {
                // Flash effect for status update
                randomMission.style.animation = 'statusUpdate 0.5s ease-in-out';
                setTimeout(() => {
                    randomMission.style.animation = '';
                }, 500);
            }
        }
    }, 30000);

    // Add status update animation
    const statusStyle = document.createElement('style');
    statusStyle.textContent = `
        @keyframes statusUpdate {
            0%, 100% { opacity: 1; transform: scale(1); }
            50% { opacity: 0.7; transform: scale(1.05); }
        }
    `;
    document.head.appendChild(statusStyle);
}

// Initialize mission updates
initMissionUpdates();

// Stats Counter Animation
function initStatsCounter() {
    const stats = document.querySelectorAll('.stat-number');

    function animateCounter(element, target) {
        const duration = 2000; // 2 seconds
        const start = performance.now();
        const startValue = 0;

        // Remove non-numeric characters for calculation
        const numericTarget = parseFloat(target.replace(/[^\d.]/g, '')) || 0;
        const suffix = target.replace(/[\d.]/g, '');

        function update(currentTime) {
            const elapsed = currentTime - start;
            const progress = Math.min(elapsed / duration, 1);

            // Easing function
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            const currentValue = Math.floor(easeOutQuart * numericTarget);

            element.textContent = currentValue.toLocaleString() + suffix;

            if (progress < 1) {
                requestAnimationFrame(update);
            }
        }

        requestAnimationFrame(update);
    }

    // Intersection Observer for stats
    const statsObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const statNumber = entry.target.querySelector('.stat-number');
                if (statNumber && !statNumber.classList.contains('animated')) {
                    statNumber.classList.add('animated');
                    animateCounter(statNumber, statNumber.textContent);
                }
            }
        });
    }, { threshold: 0.5 });

    stats.forEach(stat => {
        statsObserver.observe(stat.parentElement);
    });
}

// Initialize stats counter
initStatsCounter();
        document.getElementById('period').textContent = data.period;
        document.getElementById('diameter').textContent = data.diameter;
        document.getElementById('overview-text').textContent = data.overview;
        document.getElementById('composition-text').textContent = data.composition;
        document.getElementById('facts-text').textContent = data.facts;

        // Update mission control
        document.getElementById('current-planet').textContent = data.title;
        updateExploredCount();
    }
}

// Carousel System
function initCarousel() {
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const indicators = document.querySelectorAll('.indicator');
    let currentSlide = 0;
    const totalSlides = 3;

    function showSlide(index) {
        const slides = document.querySelectorAll('.carousel-slide');
        const indicators = document.querySelectorAll('.indicator');

        slides.forEach(slide => slide.classList.remove('active'));
        indicators.forEach(indicator => indicator.classList.remove('active'));

        slides[index].classList.add('active');
        indicators[index].classList.add('active');

        currentSlide = index;
    }

    prevBtn.addEventListener('click', function() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        showSlide(currentSlide);
    });

    nextBtn.addEventListener('click', function() {
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
    });

    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', function() {
            showSlide(index);
        });
    });

    // Auto-advance carousel every 8 seconds
    setInterval(function() {
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
    }, 8000);
}

// Mission Timer
function initMissionTimer() {
    let startTime = Date.now();

    function updateTimer() {
        const elapsed = Date.now() - startTime;
        const hours = Math.floor(elapsed / (1000 * 60 * 60));
        const minutes = Math.floor((elapsed % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((elapsed % (1000 * 60)) / 1000);

        const timeString = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        document.getElementById('mission-time').textContent = timeString;
    }

    setInterval(updateTimer, 1000);
    updateTimer();
}

// Update explored planets count
function updateExploredCount() {
    const navButtons = document.querySelectorAll('.nav-btn');
    let exploredCount = 0;

    navButtons.forEach(button => {
        if (button.classList.contains('active')) {
            exploredCount++;
        }
    });

    document.getElementById('explored-count').textContent = exploredCount;
}

// Add selected class styles
const style = document.createElement('style');
style.textContent = `
    .planet.selected .planet-sphere {
        box-shadow: 0 0 40px rgba(251, 191, 36, 0.8), 0 0 80px rgba(251, 191, 36, 0.4);
        transform: scale(1.2);
    }
`;
document.head.appendChild(style);

// Initialize explored count
updateExploredCount();