# UMKM Kamarang Lebak Website

## Overview

This is a static website for UMKM Kamarang Lebak, a local business from Kamarang village that sells traditional ginger and opak (traditional Indonesian crackers). The website serves as a digital storefront to showcase their traditional products and connect with customers through WhatsApp integration for orders.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Static HTML/CSS/JavaScript**: Uses a single-page application approach with vanilla JavaScript
- **Responsive Design**: Mobile-first design with hamburger navigation for mobile devices
- **Component Structure**: Modular sections (hero, about, products, contact) with smooth scrolling navigation
- **Typography**: Google Fonts (Poppins) for consistent branding
- **Icons**: Font Awesome for social media and UI icons

### Design Patterns
- **Progressive Enhancement**: Core functionality works without JavaScript, enhanced with smooth scrolling and animations
- **Intersection Observer**: Used for scroll-based animations and visual feedback
- **Event-Driven Navigation**: Mobile menu toggles and smooth scrolling handled through DOM events

### User Experience Features
- **Smooth Scrolling**: Enhanced navigation between sections
- **Dynamic Navbar**: Background changes on scroll for better visual hierarchy
- **Mobile Optimization**: Hamburger menu and responsive breakpoints
- **Direct Communication**: WhatsApp integration for instant customer contact

### Styling Approach
- **CSS Variables**: Consistent color scheme and spacing system
- **Flexbox Layout**: Modern layout system for responsive design
- **Custom Animations**: Scroll-triggered animations for engaging user experience

## External Dependencies

### CDN Resources
- **Font Awesome 6.0.0**: Icon library for UI elements and social media icons
- **Google Fonts (Poppins)**: Typography with multiple font weights (300, 400, 600, 700)
- **Pixabay Images**: External image hosting for product photography

### Third-Party Integrations
- **WhatsApp Business API**: Direct messaging integration for customer orders and inquiries
- **External Image Sources**: Pixabay for product imagery (may need to be replaced with actual product photos)

### Browser APIs
- **Intersection Observer API**: For scroll-based animations and visual effects
- **Smooth Scrolling API**: Enhanced navigation experience between page sections