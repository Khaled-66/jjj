/**
 * Main Application Entry Point
 * Orchestrates modules, event handlers, theme state, and client-side interactions.
 */

import { initHeroCanvas } from './components/heroCanvas.js';
import { initPlaygroundCanvas } from './components/playgroundCanvas.js';
import { initTerminalTyping } from './components/terminalUI.js';
import { 
  renderFilterBar, 
  renderProjects, 
  renderSkills, 
  renderExperience 
} from './components/renderers.js';

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize Canvas Components
  initHeroCanvas('hero-canvas');
  initPlaygroundCanvas();

  // 2. Initialize Hero Terminal Typist
  initTerminalTyping();

  // 3. Render Dynamic Content
  renderFilterBar();
  renderProjects();
  renderSkills();
  renderExperience();

  // 4. Sticky Navbar Scroll Effect
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // 5. Theme Toggle Logic (Light / Dark mode)
  const themeBtn = document.getElementById('theme-toggle');
  const themeIcon = document.getElementById('theme-icon');
  
  // Read preference or default to dark
  const savedTheme = localStorage.getItem('theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);
  themeIcon.textContent = savedTheme === 'dark' ? '🌙' : '☀️';

  themeBtn.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    themeIcon.textContent = newTheme === 'dark' ? '🌙' : '☀️';
  });

  // 6. Contact Form Handling
  const contactForm = document.getElementById('contact-form');
  const toast = document.getElementById('toast');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;
      submitBtn.textContent = 'Sending... ⏳';
      submitBtn.disabled = true;

      // Simulate asynchronous API request delay
      setTimeout(() => {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        contactForm.reset();

        // Show Toast Notification
        if (toast) {
          toast.classList.add('show');
          setTimeout(() => {
            toast.classList.remove('show');
          }, 4000);
        }
      }, 1000);
    });
  }
});
