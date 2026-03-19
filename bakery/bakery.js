// Sweet Delights Bakery - Interactive JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Menu Category Switching
    const categoryButtons = document.querySelectorAll('.category-btn');
    const menuItems = document.querySelectorAll('.menu-items');

    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');

            // Hide all menu items
            menuItems.forEach(menu => menu.style.display = 'none');

            // Show selected menu
            const category = this.getAttribute('data-category');
            const targetMenu = document.getElementById(`${category}-menu`);
            if (targetMenu) {
                targetMenu.style.display = 'grid';
            }
        });
    });

    // Smooth Scrolling for Navigation Links
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

    // Navbar Background on Scroll
    const navbar = document.querySelector('.navbar');
    let lastScrollTop = 0;

    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(139, 69, 19, 0.1)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = 'none';
        }

        lastScrollTop = scrollTop;
    });

    // Intersection Observer for Animations
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

    // Observe sections for animations
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        observer.observe(section);
    });

    // Menu Item Hover Effects
    const menuItemsList = document.querySelectorAll('.menu-item');

    menuItemsList.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });

        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Gallery Item Hover Effects
    const galleryItems = document.querySelectorAll('.gallery-item');

    galleryItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05) rotate(1deg)';
        });

        item.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) rotate(0deg)';
        });
    });

    // Form Validation and Submission
    const contactForm = document.querySelector('.contact-form form');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Simple validation
            const name = this.querySelector('input[type="text"]').value;
            const email = this.querySelector('input[type="email"]').value;
            const message = this.querySelector('textarea').value;

            if (!name || !email || !message) {
                alert('Please fill in all required fields.');
                return;
            }

            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Please enter a valid email address.');
                return;
            }

            // Success message (in a real site, this would send to server)
            alert('Thank you for your inquiry! We\'ll get back to you within 24 hours.');
            this.reset();
        });
    }

    // Floating Elements Animation Enhancement
    const floatItems = document.querySelectorAll('.float-item');

    floatItems.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.5}s`;
        item.style.animationDuration = `${3 + index * 0.5}s`;
    });

    // Dynamic Menu Item Loading (for demonstration)
    function loadMenuItems(category) {
        // In a real application, this would fetch data from a server
        // For now, we'll just show/hide existing items
        console.log(`Loading ${category} menu items...`);
    }

    // Initialize with breads menu active
    const breadsMenu = document.getElementById('breads-menu');
    if (breadsMenu) {
        breadsMenu.style.display = 'grid';
    }

    // Add loading animation to buttons
    const buttons = document.querySelectorAll('.btn');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            if (this.classList.contains('btn-primary') || this.classList.contains('btn-secondary')) {
                this.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    this.style.transform = 'scale(1)';
                }, 150);
            }
        });
    });

    // Parallax effect for hero background
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const heroBackground = document.querySelector('.hero-background');

        if (heroBackground) {
            const rate = scrolled * -0.5;
            heroBackground.style.transform = `translateY(${rate}px)`;
        }
    });

    // Mobile menu toggle (if needed in future)
    // This is prepared for if we add a mobile menu button later
    function toggleMobileMenu() {
        const navLinks = document.querySelector('.nav-links');
        navLinks.classList.toggle('mobile-menu-open');
    }

    // Keyboard navigation support
    document.addEventListener('keydown', function(e) {
        // Close mobile menu with Escape key (if implemented)
        if (e.key === 'Escape') {
            const navLinks = document.querySelector('.nav-links');
            if (navLinks.classList.contains('mobile-menu-open')) {
                navLinks.classList.remove('mobile-menu-open');
            }
        }
    });

    // Performance optimization: Debounce scroll events
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

    // Apply debounced scroll handler
    const debouncedScroll = debounce(function() {
        // Additional scroll-based features can be added here
    }, 16);

    window.addEventListener('scroll', debouncedScroll);

    // Initialize all interactive features
    console.log('Sweet Delights Bakery - Interactive features loaded successfully!');
});