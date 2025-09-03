// DOM Elements
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

// Mobile Navigation Toggle
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth Scrolling for Navigation Links
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

// Navbar Background Change on Scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(44, 85, 48, 0.95)';
        navbar.style.backdropFilter = 'blur(10px)';
    } else {
        navbar.style.background = '#2c5530';
        navbar.style.backdropFilter = 'none';
    }
});

// Intersection Observer for Animation on Scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('loaded');
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.product-item, .testimonial-item, .contact-item, .about-text, .about-image');
    
    animatedElements.forEach(el => {
        el.classList.add('loading');
        observer.observe(el);
    });
});

// Product Image Hover Effects
document.querySelectorAll('.product-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    item.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// WhatsApp Message Customization
function sendWhatsAppMessage(productType = '') {
    let message = 'Halo UMKM Kamarang Lebak, saya ingin bertanya tentang produk';
    if (productType) {
        message += ` ${productType}`;
    }
    message += '. Mohon informasi lebih lanjut mengenai harga dan ketersediaan.';
    
    const phoneNumber = '6282133824136';
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
}

// Add click events to product items for WhatsApp integration
document.querySelectorAll('.product-item').forEach(item => {
    item.addEventListener('click', function() {
        const productName = this.querySelector('h4').textContent;
        sendWhatsAppMessage(productName);
    });
    
    // Add cursor pointer style
    item.style.cursor = 'pointer';
});

// Testimonials Carousel (Simple Auto-rotate)
let currentTestimonial = 0;
const testimonials = document.querySelectorAll('.testimonial-item');

function rotateTestimonials() {
    if (testimonials.length > 0) {
        testimonials.forEach((testimonial, index) => {
            testimonial.style.opacity = index === currentTestimonial ? '1' : '0.7';
            testimonial.style.transform = index === currentTestimonial ? 'scale(1.05)' : 'scale(1)';
        });
        
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    }
}

// Start testimonial rotation every 5 seconds
setInterval(rotateTestimonials, 5000);

// Form Validation and Enhancement (if needed for future contact forms)
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Performance Optimization - Lazy Loading for Images
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('img[src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });

    images.forEach(img => {
        imageObserver.observe(img);
    });
});

// Back to Top Button
function createBackToTopButton() {
    const backToTop = document.createElement('div');
    backToTop.innerHTML = '<i class="fas fa-arrow-up"></i>';
    backToTop.className = 'back-to-top';
    backToTop.style.cssText = `
        position: fixed;
        bottom: 100px;
        right: 30px;
        width: 50px;
        height: 50px;
        background: #f4a261;
        color: white;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 999;
        box-shadow: 0 4px 15px rgba(244, 162, 97, 0.3);
    `;
    
    document.body.appendChild(backToTop);
    
    // Show/hide button based on scroll position
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTop.style.opacity = '1';
            backToTop.style.visibility = 'visible';
        } else {
            backToTop.style.opacity = '0';
            backToTop.style.visibility = 'hidden';
        }
    });
    
    // Scroll to top when clicked
    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Initialize back to top button
createBackToTopButton();

// Analytics Event Tracking (for future implementation)
function trackEvent(category, action, label) {
    console.log(`Event tracked: ${category} - ${action} - ${label}`);
    // Here you can integrate with Google Analytics or other tracking services
    // gtag('event', action, {
    //     event_category: category,
    //     event_label: label
    // });
}

// Track important user interactions
document.addEventListener('click', (e) => {
    if (e.target.closest('.whatsapp-btn, .whatsapp-float a')) {
        trackEvent('Contact', 'WhatsApp Click', 'User contacted via WhatsApp');
    }
    
    if (e.target.closest('.product-item')) {
        const productName = e.target.closest('.product-item').querySelector('h4')?.textContent;
        trackEvent('Product', 'Product Click', productName);
    }
    
    if (e.target.closest('.btn-primary')) {
        trackEvent('Navigation', 'CTA Click', 'View Products');
    }
});

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    console.log('UMKM Kamarang Lebak website loaded successfully!');
    
    // Add loading animation to hero elements
    setTimeout(() => {
        document.querySelector('.hero-title')?.classList.add('loaded');
        document.querySelector('.hero-subtitle')?.classList.add('loaded');
        document.querySelector('.hero-buttons')?.classList.add('loaded');
    }, 500);
});

// Service Worker Registration (for future PWA implementation)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // navigator.serviceWorker.register('/service-worker.js')
        //     .then(registration => console.log('SW registered: ', registration))
        //     .catch(registrationError => console.log('SW registration failed: ', registrationError));
    });
}
