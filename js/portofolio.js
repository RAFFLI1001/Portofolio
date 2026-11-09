/**
 * ============================================================================
 * PORTOFOLIO & KARYA - PORTOFOLIO.JS
 * Merender galeri hasil karya/prestasi, filter tab, dan modal pop-up lightbox.
 * ============================================================================
 */

window.PortfolioApp = window.PortfolioApp || {};

PortfolioApp.renderPortofolio = function () {
  const projects = PortfolioApp.data.projects;

  return `
    <section id="portfolio" class="portfolio section">
      <div class="container">
        <div class="section-header">
          <span class="section-tag">Project Showcase</span>
          <h2 class="section-title">Proyek yang Telah Saya Buat</h2>
          <div class="section-divider"></div>
          <p class="section-desc">Koleksi aplikasi mobile, website modern, dan game interaktif yang telah saya kembangkan.</p>
        </div>

        <div class="portfolio-filters">
          <button class="filter-btn active" data-filter="all">Semua Proyek</button>
          <button class="filter-btn" data-filter="mobile">Aplikasi Mobile</button>
          <button class="filter-btn" data-filter="web">Web Development</button>
          <button class="filter-btn" data-filter="game">Game Mini</button>
        </div>

        <div class="portfolio-grid" id="portfolioGrid">
          ${projects
            .map(
              (p) => `
            <div class="portfolio-card" data-category="${p.category}">
              <div class="portfolio-img-box">
                <img src="${p.image}" alt="${p.title}" loading="lazy" onerror="this.src='images/project-portfolio.png'" />
                <div class="portfolio-overlay">
                  <span class="proj-cat">${p.catLabel}</span>
                  <h4>${p.title}</h4>
                  <p>${p.desc}</p>
                  <button class="btn-preview" data-title="${p.title}" data-src="${p.image}" data-desc="${p.detail}">
                    <i class="fas fa-expand-alt"></i> Detail Proyek
                  </button>
                </div>
              </div>
            </div>
          `
            )
            .join('')}
        </div>
      </div>
    </section>

    <div class="modal" id="portfolioModal" aria-hidden="true" role="dialog">
      <div class="modal-backdrop" id="modalBackdrop"></div>
      <div class="modal-content card-glass">
        <button class="modal-close" id="modalCloseBtn" aria-label="Tutup Modal">&times;</button>
        <div class="modal-body">
          <div class="modal-img-wrap">
            <img src="" alt="" id="modalImg" />
          </div>
          <div class="modal-info">
            <h3 id="modalTitle">Judul Proyek</h3>
            <p id="modalDesc">Deskripsi proyek akan ditampilkan di sini.</p>
            <div class="modal-tags">
              <span class="tag">Showcase</span>
              <span class="tag">Achievement</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
};

PortfolioApp.initPortofolio = function () {
  // Filter Tab Kategori Portofolio
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projCards = document.querySelectorAll('.portfolio-card');

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      const f = btn.getAttribute('data-filter');
      projCards.forEach((card) => {
        const cCat = card.getAttribute('data-category');
        if (f === 'all' || cCat === f) {
          card.classList.remove('hide');
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'scale(1)';
          }, 10);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'scale(0.95)';
          setTimeout(() => {
            card.classList.add('hide');
          }, 300);
        }
      });
    });
  });

  // Lightbox Modal Interaksi
  const modal = document.getElementById('portfolioModal');
  const modalImg = document.getElementById('modalImg');
  const modalTitle = document.getElementById('modalTitle');
  const modalDesc = document.getElementById('modalDesc');
  const modalClose = document.getElementById('modalCloseBtn');
  const modalBackdrop = document.getElementById('modalBackdrop');
  const previewBtns = document.querySelectorAll('.btn-preview');

  function openModal(title, src, desc) {
    if (!modal) return;
    modalTitle.textContent = title;
    modalImg.src = src;
    modalImg.alt = title;
    modalDesc.textContent = desc;
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    if (!modal) return;
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  previewBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      openModal(
        btn.getAttribute('data-title'),
        btn.getAttribute('data-src'),
        btn.getAttribute('data-desc')
      );
    });
  });

  if (modalClose) modalClose.addEventListener('click', closeModal);
  if (modalBackdrop) modalBackdrop.addEventListener('click', closeModal);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && modal.classList.contains('active')) {
      closeModal();
    }
  });
};
