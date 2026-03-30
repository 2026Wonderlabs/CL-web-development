// Professional F1 Racing Team Website JavaScript

document.addEventListener('DOMContentLoaded', function() {
    initSmoothScrolling();
    initActiveNavigation();
    initResultsTable();
    initScrollAnimations();
    initFanZoneButton();
});

// Smooth scrolling for navigation
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                const navbar = document.querySelector('.navbar');
                const headerHeight = (navbar) ? navbar.offsetHeight : 80;
                const targetPosition = targetSection.offsetTop - headerHeight - 20;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Update active navigation based on scroll position
function initActiveNavigation() {
    const sections = document.querySelectorAll('section[id], main[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });
}

// Results table functionality (placeholder for future expansion)
function initResultsTable() {
    // This could be enhanced with sorting, filtering, etc.
    console.log('F1 Racing website initialized - results table ready');
}

// Utility function for responsive behavior
function handleResponsive() {
    const header = document.querySelector('.site-header');
    const nav = document.querySelector('.main-nav');

    if (window.innerWidth <= 768) {
        // Mobile navigation could be enhanced here
        console.log('Mobile view active');
    } else {
        // Desktop navigation
        console.log('Desktop view active');
    }
}

// Initialize responsive behavior
window.addEventListener('resize', handleResponsive);
handleResponsive();

// Scroll-based animations using Intersection Observer
function initScrollAnimations() {
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

    // Observe sections and cards that should animate in
    const sections = document.querySelectorAll('section');
    const cards = document.querySelectorAll('.driver-card, .result-card, .news-card, .tech-card');

    [...sections, ...cards].forEach(element => {
        observer.observe(element);
    });
}

// Fan Zone Button Handler
function initFanZoneButton() {
    const fanZoneBtn = document.querySelector('#fan-zone-btn');
    if (fanZoneBtn) {
        fanZoneBtn.addEventListener('click', function() {
            showFanZoneModal();
        });
    }
}

// Show Fan Zone Modal
function showFanZoneModal() {
    const modal = document.createElement('div');
    modal.className = 'fan-zone-modal';
    modal.innerHTML = `
        <div class="fan-zone-modal-content">
            <div class="fan-zone-modal-header">
                <h2><i class="fas fa-flag-checkered"></i> F1 Fan Zone</h2>
                <button class="fan-zone-close-btn" onclick="closeFanZoneModal()">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div class="fan-zone-modal-body">
                <div class="fan-zone-grid">
                    <div class="fan-card">
                        <i class="fas fa-ticket-alt"></i>
                        <h3>Get Tickets</h3>
                        <p>Secure your spot at the finest Grand Prix events</p>
                    </div>
                    <div class="fan-card">
                        <i class="fas fa-store"></i>
                        <h3>Merchandise</h3>
                        <p>Exclusive Red Bull Racing apparel and collectibles</p>
                    </div>
                    <div class="fan-card">
                        <i class="fas fa-users"></i>
                        <h3>Community</h3>
                        <p>Join thousands of passionate F1 fans worldwide</p>
                    </div>
                    <div class="fan-card">
                        <i class="fas fa-video"></i>
                        <h3>Live Stream</h3>
                        <p>Watch races and exclusive behind-the-scenes content</p>
                    </div>
                </div>
            </div>
        </div>
    `;

    // Add modal styles
    const modalStyles = document.createElement('style');
    modalStyles.textContent = `
        .fan-zone-modal {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.9);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10000;
            backdrop-filter: blur(5px);
        }

        .fan-zone-modal-content {
            background: linear-gradient(135deg, #111827 0%, #1f2937 100%);
            border: 1px solid #dc2626;
            border-radius: 15px;
            width: 90%;
            max-width: 900px;
            max-height: 80vh;
            overflow: auto;
            box-shadow: 0 25px 50px rgba(220, 38, 38, 0.3);
            animation: fanZoneSlideIn 0.3s ease-out;
        }

        .fan-zone-modal-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1.5rem;
            border-bottom: 1px solid #374151;
            background: rgba(220, 38, 38, 0.05);
        }

        .fan-zone-modal-header h2 {
            color: #dc2626;
            margin: 0;
            font-size: 1.5rem;
            display: flex;
            align-items: center;
            gap: 0.75rem;
        }

        .fan-zone-close-btn {
            background: none;
            border: none;
            color: #d1d5db;
            font-size: 1.5rem;
            cursor: pointer;
            padding: 0.5rem;
            border-radius: 5px;
            transition: all 0.2s ease;
        }

        .fan-zone-close-btn:hover {
            color: #dc2626;
            background: rgba(220, 38, 38, 0.1);
        }

        .fan-zone-modal-body {
            padding: 2rem;
        }

        .fan-zone-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 1.5rem;
        }

        .fan-card {
            background: rgba(220, 38, 38, 0.05);
            border: 1px solid #374151;
            border-radius: 10px;
            padding: 1.5rem;
            text-align: center;
            transition: all 0.3s ease;
            cursor: pointer;
        }

        .fan-card:hover {
            background: rgba(220, 38, 38, 0.1);
            border-color: #dc2626;
            transform: translateY(-5px);
        }

        .fan-card i {
            font-size: 2.5rem;
            color: #dc2626;
            margin-bottom: 1rem;
        }

        .fan-card h3 {
            color: #ffffff;
            font-size: 1.1rem;
            margin: 0.75rem 0;
        }

        .fan-card p {
            color: #d1d5db;
            font-size: 0.9rem;
            margin: 0;
        }

        @keyframes fanZoneSlideIn {
            from {
                opacity: 0;
                transform: scale(0.9) translateY(-20px);
            }
            to {
                opacity: 1;
                transform: scale(1) translateY(0);
            }
        }

        @keyframes fanZoneSlideOut {
            from {
                opacity: 1;
                transform: scale(1) translateY(0);
            }
            to {
                opacity: 0;
                transform: scale(0.9) translateY(-20px);
            }
        }

        @media (max-width: 768px) {
            .fan-zone-grid {
                grid-template-columns: 1fr;
            }
        }
    `;
    document.head.appendChild(modalStyles);

    document.body.appendChild(modal);

    // Add keyboard controls
    document.addEventListener('keydown', handleFanZoneKeydown);
}

// Close Fan Zone Modal
function closeFanZoneModal() {
    const modal = document.querySelector('.fan-zone-modal');
    if (modal) {
        modal.style.animation = 'fanZoneSlideOut 0.3s ease-in';
        setTimeout(() => {
            if (modal.parentNode) {
                modal.parentNode.removeChild(modal);
            }
        }, 300);
        document.removeEventListener('keydown', handleFanZoneKeydown);
    }
}

// Handle keyboard controls for fan zone modal
function handleFanZoneKeydown(e) {
    if (e.key === 'Escape') {
        closeFanZoneModal();
    }
}