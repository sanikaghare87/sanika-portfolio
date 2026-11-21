/**
 * Sanika Ghare - Personal Portfolio Scripts
 * Lightweight, fast, vanilla JavaScript
 */

document.addEventListener('DOMContentLoaded', () => {
  // --- 1. Mobile Menu Navigation ---
  const mobileToggle = document.getElementById('mobileToggle');
  const navLinks = document.getElementById('navLinks');
  const navItems = document.querySelectorAll('.nav-links a');

  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      const isExpanded = navLinks.classList.contains('active');
      mobileToggle.setAttribute('aria-expanded', isExpanded);
    });

    // Close menu when a navigation link is clicked
    navItems.forEach(item => {
      item.addEventListener('click', () => {
        if (navLinks.classList.contains('active')) {
          navLinks.classList.remove('active');
          mobileToggle.setAttribute('aria-expanded', 'false');
        }
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!navLinks.contains(e.target) && !mobileToggle.contains(e.target) && navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        mobileToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // --- 2. Sticky Navbar & Scroll Spy ---
  const navbar = document.getElementById('navbar');
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;

    // Sticky navbar shadow
    if (navbar) {
      if (scrollY > 40) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }

    // Scroll spy active nav highlighting
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');
      const activeLink = document.querySelector(`.nav-links a[href*="${sectionId}"]`);

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navItems.forEach(item => item.classList.remove('active'));
        if (activeLink) {
          activeLink.classList.add('active');
        }
      }
    });

    // Back to Top button visibility
    const backToTopBtn = document.getElementById('backToTop');
    if (backToTopBtn) {
      if (scrollY > 400) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    }
  });

  // --- 3. Back to Top Action ---
  const backToTopBtn = document.getElementById('backToTop');
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // --- 4. Project Modal for Placeholder Links ---
  const modal = document.getElementById('projectModal');
  const modalClose = document.getElementById('modalClose');
  const projectButtons = document.querySelectorAll('.project-btn[data-placeholder="true"]');

  if (modal && modalClose) {
    projectButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const projectTitle = btn.getAttribute('data-project-name') || 'Project';
        const modalTitle = document.getElementById('modalProjectName');
        if (modalTitle) {
          modalTitle.textContent = projectTitle;
        }
        modal.classList.add('active');
      });
    });

    modalClose.addEventListener('click', () => {
      modal.classList.remove('active');
    });

    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('active');
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.classList.contains('active')) {
        modal.classList.remove('active');
      }
    });
  }

  // --- 5. Interactive Contact Form ---
  const contactForm = document.getElementById('contactForm');
  const formFeedback = document.getElementById('formFeedback');

  if (contactForm && formFeedback) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      // Retrieve form values
      const name = document.getElementById('senderName')?.value.trim();
      const email = document.getElementById('senderEmail')?.value.trim();
      const message = document.getElementById('senderMessage')?.value.trim();

      if (!name || !email || !message) {
        alert('Please fill out all required fields.');
        return;
      }

      // Display friendly success message
      formFeedback.className = 'form-feedback success';
      formFeedback.innerHTML = `✨ Thank you, <strong>${escapeHtml(name)}</strong>! Your message has been noted. (Note: To connect directly, please use the email and LinkedIn links above).`;
      formFeedback.style.display = 'block';

      // Reset form
      contactForm.reset();

      // Automatically hide message after 6 seconds
      setTimeout(() => {
        formFeedback.style.display = 'none';
      }, 6000);
    });
  }

  // --- 6. Helper Utility for HTML Escaping ---
  function escapeHtml(text) {
    const map = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, function(m) { return map[m]; });
  }

  // --- 7. Dynamic Current Year in Footer ---
  const currentYearSpan = document.getElementById('currentYear');
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }
});
