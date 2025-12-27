/**
 * Paragon Business Advisors - Main JavaScript
 * Handles navigation, smooth scrolling, and interactive features
 */

(function() {
  'use strict';

  // ==========================================================================
  // MOBILE NAVIGATION TOGGLE
  // ==========================================================================

  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', function() {
      navMenu.classList.toggle('nav-menu--open');
      navToggle.classList.toggle('nav-toggle--active');

      // Update ARIA attribute
      const isExpanded = navMenu.classList.contains('nav-menu--open');
      navToggle.setAttribute('aria-expanded', isExpanded);
    });
  }

  // ==========================================================================
  // SMOOTH SCROLL WITH OFFSET
  // ==========================================================================

  const navLinks = document.querySelectorAll('a[href^="#"]');
  const navHeight = 70; // Height of fixed navigation in pixels

  navLinks.forEach(function(link) {
    link.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');

      // Skip if it's just "#"
      if (targetId === '#') {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }

      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        e.preventDefault();

        // Close mobile menu if open
        if (navMenu && navMenu.classList.contains('nav-menu--open')) {
          navMenu.classList.remove('nav-menu--open');
          navToggle.classList.remove('nav-toggle--active');
          navToggle.setAttribute('aria-expanded', 'false');
        }

        // Calculate position with offset for fixed header
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // ==========================================================================
  // ACTIVE NAVIGATION HIGHLIGHTING
  // ==========================================================================

  const sections = document.querySelectorAll('section[id]');

  function highlightActiveNav() {
    const scrollPosition = window.pageYOffset;

    sections.forEach(function(section) {
      const sectionTop = section.offsetTop - navHeight - 10;
      const sectionHeight = section.clientHeight;
      const sectionId = section.getAttribute('id');

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        // Remove active class from all links
        navLinks.forEach(function(link) {
          link.classList.remove('nav-link--active');
        });

        // Add active class to current section's link
        const activeLink = document.querySelector('.nav-link[href="#' + sectionId + '"]');
        if (activeLink) {
          activeLink.classList.add('nav-link--active');
        }
      }
    });
  }

  // Throttle scroll event for better performance
  let scrollTimeout;
  window.addEventListener('scroll', function() {
    if (scrollTimeout) {
      window.cancelAnimationFrame(scrollTimeout);
    }
    scrollTimeout = window.requestAnimationFrame(function() {
      highlightActiveNav();
    });
  });

  // Run on page load
  highlightActiveNav();

  // ==========================================================================
  // CLOSE MOBILE MENU ON OUTSIDE CLICK
  // ==========================================================================

  document.addEventListener('click', function(e) {
    if (navMenu && navMenu.classList.contains('nav-menu--open')) {
      const isClickInsideNav = navToggle.contains(e.target) || navMenu.contains(e.target);

      if (!isClickInsideNav) {
        navMenu.classList.remove('nav-menu--open');
        navToggle.classList.remove('nav-toggle--active');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    }
  });

  // ==========================================================================
  // CLOSE MOBILE MENU ON ESCAPE KEY
  // ==========================================================================

  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && navMenu && navMenu.classList.contains('nav-menu--open')) {
      navMenu.classList.remove('nav-menu--open');
      navToggle.classList.remove('nav-toggle--active');
      navToggle.setAttribute('aria-expanded', 'false');
      navToggle.focus();
    }
  });

  // ==========================================================================
  // PERFORMANCE: REDUCE MOTION FOR USERS WHO PREFER IT
  // ==========================================================================

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  if (prefersReducedMotion.matches) {
    // Remove smooth scroll behavior if user prefers reduced motion
    document.documentElement.style.scrollBehavior = 'auto';
  }

})();
