window.PortfolioApp = window.PortfolioApp || {};

PortfolioApp.renderNavbar = function () {
  const profile = PortfolioApp.data.profile;

  return `
    <div class="glow-orb orb-1"></div>
    <div class="glow-orb orb-2"></div>
    <div class="glow-orb orb-3"></div>

    <header id="header">
      <div class="container nav-container">
        <a href="#home" class="logo">
          <span class="logo-accent">&lt;</span>${profile.shortName}<span class="logo-accent">/&gt;</span>
        </a>

        <div class="nav-right">
          <ul class="nav-links" id="navLinks">
            <li><a href="#home" class="nav-link active">Home</a></li>
            <li><a href="#biography" class="nav-link">Tentang</a></li>
            <li><a href="#services" class="nav-link">Layanan</a></li>
            <li><a href="#skills" class="nav-link">Keahlian</a></li>
            <li><a href="#portfolio" class="nav-link">Portofolio</a></li>
            <li><a href="#contact" class="nav-link">Kontak</a></li>
          </ul>

          <div class="nav-actions">
            <button id="themeToggleBtn" class="theme-toggle-btn" title="Ganti Mode Warna" aria-label="Toggle Theme">
              <i class="fas fa-palette"></i>
            </button>
            <a href="#contact" class="btn btn-sm btn-glow">Hubungi Saya</a>
            <button class="hamburger" id="hamburgerBtn" aria-label="Buka Menu Navigasi">
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </div>
    </header>

    <div class="mobile-overlay" id="mobileOverlay"></div>
  `;
};

PortfolioApp.renderFooter = function () {
  const profile = PortfolioApp.data.profile;

  return `
    <footer>
      <div class="container">
        <div class="footer-top">
          <div class="footer-brand">
            <a href="#home" class="logo">
              <span class="logo-accent">&lt;</span>${profile.shortName}<span class="logo-accent">/&gt;</span>
            </a>
            <p>Portofolio resmi ${profile.name}. Dibangun dengan arsitektur JavaScript modular yang bersih dan rapi.</p>
          </div>
          <div class="footer-nav">
            <h4>Navigasi Cepat</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#biography">Tentang</a></li>
              <li><a href="#services">Layanan</a></li>
              <li><a href="#portfolio">Portofolio</a></li>
              <li><a href="#contact">Kontak</a></li>
            </ul>
          </div>
          <div class="footer-status">
            <h4>Status Saat Ini</h4>
            <div class="status-pill">
              <span class="status-indicator"></span> Siap untuk Proyek Baru
            </div>
            <p class="status-sub">Hubungi via formulir atau email untuk respon cepat.</p>
          </div>
        </div>

        <div class="footer-bottom">
          <p>&copy; 2025 ${profile.name}. All rights reserved. Crafted with precision & passion.</p>
        </div>
      </div>
    </footer>

    <button class="scroll-top-btn" id="scrollTopBtn" aria-label="Kembali ke atas" title="Kembali ke atas">
      <svg class="progress-ring" width="48" height="48">
        <circle class="progress-ring-bg" stroke="rgba(255,255,255,0.1)" stroke-width="3" fill="transparent" r="20" cx="24" cy="24" />
        <circle class="progress-ring-circle" id="scrollProgressCircle" stroke="currentColor" stroke-width="3" fill="transparent" r="20" cx="24" cy="24" />
      </svg>
      <i class="fas fa-chevron-up arrow-icon"></i>
    </button>
  `;
};

PortfolioApp.initNavigation = function () {
  const header = document.getElementById('header');
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links .nav-link');
  const scrollTopBtn = document.getElementById('scrollTopBtn');
  const scrollProgressCircle = document.getElementById('scrollProgressCircle');
  const radius = 20;
  const circumference = 2 * Math.PI * radius;

  if (scrollProgressCircle) {
    scrollProgressCircle.style.strokeDasharray = `${circumference} ${circumference}`;
  }

  function onScroll() {
    const scrollY = window.pageYOffset;

    if (header) {
      if (scrollY > 40) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }

    sections.forEach((sec) => {
      const top = sec.offsetTop - 150;
      const height = sec.offsetHeight;
      const id = sec.getAttribute('id');
      if (scrollY >= top && scrollY < top + height) {
        navLinks.forEach((link) => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });

    if (scrollTopBtn && scrollProgressCircle) {
      const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const percent = docHeight > 0 ? scrollY / docHeight : 0;
      const offset = circumference - percent * circumference;
      scrollProgressCircle.style.strokeDashoffset = offset;

      if (scrollY > 250) {
        scrollTopBtn.classList.add('visible');
      } else {
        scrollTopBtn.classList.remove('visible');
      }
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });

  if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const navLinksContainer = document.getElementById('navLinks');
  const mobileOverlay = document.getElementById('mobileOverlay');

  function closeNav() {
    if (hamburgerBtn) hamburgerBtn.classList.remove('active');
    if (navLinksContainer) navLinksContainer.classList.remove('active');
    if (mobileOverlay) mobileOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  function openNav() {
    if (hamburgerBtn) hamburgerBtn.classList.add('active');
    if (navLinksContainer) navLinksContainer.classList.add('active');
    if (mobileOverlay) mobileOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  if (hamburgerBtn) {
    hamburgerBtn.addEventListener('click', () => {
      if (navLinksContainer && navLinksContainer.classList.contains('active')) {
        closeNav();
      } else {
        openNav();
      }
    });
  }

  if (mobileOverlay) {
    mobileOverlay.addEventListener('click', closeNav);
  }

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 768) closeNav();
    });
  });

  const themeBtn = document.getElementById('themeToggleBtn');
  const themes = ['', 'theme-emerald', 'theme-purple'];
  let themeIndex = 0;

  const saved = localStorage.getItem('raffli_portfolio_theme');
  if (saved && themes.includes(saved)) {
    themeIndex = themes.indexOf(saved);
    if (saved !== '') document.body.classList.add(saved);
  }

  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      if (themes[themeIndex] !== '') {
        document.body.classList.remove(themes[themeIndex]);
      }
      themeIndex = (themeIndex + 1) % themes.length;
      const currentTheme = themes[themeIndex];

      if (currentTheme !== '') {
        document.body.classList.add(currentTheme);
        localStorage.setItem('raffli_portfolio_theme', currentTheme);
      } else {
        localStorage.removeItem('raffli_portfolio_theme');
      }

      const names = ['Cyan Neon (Default)', 'Emerald Green', 'Royal Purple'];
      PortfolioApp.showToast(`Tema Aksen: ${names[themeIndex]}`, 'fas fa-palette');
    });
  }

  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', function (e) {
      const hash = this.getAttribute('href');
      if (hash === '#') return;
      const target = document.querySelector(hash);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
};

PortfolioApp.init = function () {
  const app = document.getElementById('app');
  if (!app) return;

  app.innerHTML = `
    ${PortfolioApp.renderNavbar()}
    <main>
      ${PortfolioApp.renderHero()}
      ${PortfolioApp.renderTentang()}
      ${PortfolioApp.renderLayanan()}
      ${PortfolioApp.renderKeahlian()}
      ${PortfolioApp.renderPortofolio()}
      ${PortfolioApp.renderKontak()}
    </main>
    ${PortfolioApp.renderFooter()}
  `;

  if (typeof PortfolioApp.initCanvas === 'function') {
    PortfolioApp.initCanvas();
  }

  PortfolioApp.initNavigation();
  if (typeof PortfolioApp.initHero === 'function') PortfolioApp.initHero();
  if (typeof PortfolioApp.initTentang === 'function') PortfolioApp.initTentang();
  if (typeof PortfolioApp.initLayanan === 'function') PortfolioApp.initLayanan();
  if (typeof PortfolioApp.initKeahlian === 'function') PortfolioApp.initKeahlian();
  if (typeof PortfolioApp.initPortofolio === 'function') PortfolioApp.initPortofolio();
  if (typeof PortfolioApp.initKontak === 'function') PortfolioApp.initKontak();
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', PortfolioApp.init);
} else {
  PortfolioApp.init();
}
