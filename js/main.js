(function () {
  'use strict';

  const header = document.querySelector('.header');
  const mobileToggle = document.querySelector('.mobile-toggle');
  const mobileMenu = document.querySelector('.mobile-menu');
  const hero = document.querySelector('.hero');

  function handleScroll() {
    var scrollY = window.scrollY;
    if (scrollY > 80 || !document.querySelector('.hero')) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener('click', function () {
      this.classList.toggle('active');
      mobileMenu.classList.toggle('open');
    });

    document.querySelectorAll('.mobile-menu .nav-link').forEach(function (link) {
      link.addEventListener('click', function () {
        mobileToggle.classList.remove('active');
        mobileMenu.classList.remove('open');
      });
    });
  }



  function initRevealAnimations() {
    const revealElements = document.querySelectorAll('[data-reveal]');
    if (!revealElements.length) return;

    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(function (el) {
      observer.observe(el);
    });
  }
  initRevealAnimations();

  function initCounters() {
    const counters = document.querySelectorAll('[data-count]');
    if (!counters.length) return;

    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          const target = entry.target;
          const end = parseInt(target.getAttribute('data-count'));
          const duration = 2000;
          const startTime = performance.now();

          function updateCounter(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            const eased = 1 - Math.pow(1 - progress, 3);
            const current = Math.floor(eased * end);

            target.textContent = current.toLocaleString();

            if (progress < 1) {
              requestAnimationFrame(updateCounter);
            } else {
              target.textContent = end.toLocaleString();
            }
          }

          requestAnimationFrame(updateCounter);
          observer.unobserve(target);
        }
      });
    }, { threshold: 0.5 });

    counters.forEach(function (el) {
      observer.observe(el);
    });
  }
  initCounters();

  const galleryItems = document.querySelectorAll('.gallery-item');
  const galleryFilters = document.querySelectorAll('.gallery-filter');

  if (galleryFilters.length && galleryItems.length) {
    galleryFilters.forEach(function (btn) {
      btn.addEventListener('click', function () {
        galleryFilters.forEach(function (b) { b.classList.remove('active'); });
        this.classList.add('active');

        var filter = this.getAttribute('data-filter');

        galleryItems.forEach(function (item) {
          if (filter === 'all' || item.getAttribute('data-category') === filter) {
            item.style.display = 'block';
            item.style.opacity = '0';
            setTimeout(function () { item.style.opacity = '1'; }, 50);
          } else {
            item.style.display = 'none';
          }
        });
      });
    });
  }

  function initNetlifyForms() {
    document.querySelectorAll('form[netlify]').forEach(function (form) {
      var statusEl = form.querySelector('.form-status');
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        var btn = form.querySelector('[type="submit"]');
        var originalText = btn.textContent;
        btn.textContent = 'Sending...';
        btn.disabled = true;
        if (statusEl) { statusEl.className = 'form-status'; }

        var formData = new FormData(form);
        fetch(window.location.href, {
          method: 'POST',
          headers: { 'X-Requested-With': 'XMLHttpRequest' },
          body: formData
        }).then(function (resp) {
          if (resp.ok) {
            if (statusEl) {
              statusEl.className = 'form-status success';
              statusEl.textContent = form.classList.contains('footer-newsletter-form')
                ? 'Subscribed! Check your inbox.'
                : 'Your message has been sent. Thank you!';
            }
            form.reset();
          } else {
            throw new Error('Submit failed');
          }
        }).catch(function () {
          if (statusEl) {
            statusEl.className = 'form-status error';
            statusEl.textContent = 'Something went wrong. Please try again.';
          }
        }).finally(function () {
          btn.textContent = originalText;
          btn.disabled = false;
          if (statusEl) {
            setTimeout(function () { statusEl.className = 'form-status'; }, 5000);
          }
        });
      });
    });
  }
  initNetlifyForms();

  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        var headerOffset = 80;
        var elementPosition = target.getBoundingClientRect().top;
        var offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
    });
  });

  const valueCards = document.querySelectorAll('.value-card');
  valueCards.forEach(function (card) {
    card.addEventListener('mouseenter', function () {
      var icon = this.querySelector('.value-card-icon i, .value-card-icon span');
      if (icon) {
        icon.style.transform = 'scale(1.2)';
        icon.style.transition = 'transform 0.3s ease';
      }
    });
    card.addEventListener('mouseleave', function () {
      var icon = this.querySelector('.value-card-icon i, .value-card-icon span');
      if (icon) {
        icon.style.transform = 'scale(1)';
      }
    });
  });

  const statCards = document.querySelectorAll('.stat-card');
  statCards.forEach(function (card) {
    card.addEventListener('mouseenter', function () {
      var num = this.querySelector('.stat-number');
      if (num) {
        num.style.color = 'var(--green-500)';
      }
    });
    card.addEventListener('mouseleave', function () {
      var num = this.querySelector('.stat-number');
      if (num) {
        num.style.color = '';
      }
    });
  });

  document.querySelectorAll('.mobile-submenu-header').forEach(function (header) {
    header.addEventListener('click', function () {
      this.parentElement.classList.toggle('open');
    });
  });

  function initCookieBanner() {
    var banner = document.getElementById('cookie-banner');
    if (!banner) return;
    if (localStorage.getItem('cookie-consent')) { banner.style.display = 'none'; return; }
    banner.style.display = 'flex';
    setTimeout(function () { banner.classList.add('show'); }, 500);
    var acceptBtn = banner.querySelector('.cookie-btn-accept');
    var declineBtn = banner.querySelector('.cookie-btn-decline');
    if (acceptBtn) {
      acceptBtn.addEventListener('click', function () {
        localStorage.setItem('cookie-consent', 'accepted');
        banner.classList.remove('show');
        setTimeout(function () { banner.style.display = 'none'; }, 400);
      });
    }
    if (declineBtn) {
      declineBtn.addEventListener('click', function () {
        localStorage.setItem('cookie-consent', 'declined');
        banner.classList.remove('show');
        setTimeout(function () { banner.style.display = 'none'; }, 400);
      });
    }
  }
  initCookieBanner();
})();
