/**
 * ============================================================================
 * LAYANAN - LAYANAN.JS
 * Merender daftar layanan spesialisasi dan mengatur efek interaktif hover & tilt.
 * ============================================================================
 */

window.PortfolioApp = window.PortfolioApp || {};

PortfolioApp.renderLayanan = function () {
  const services = PortfolioApp.data.services;

  return `
    <section id="services" class="services section">
      <div class="container">
        <div class="section-header">
          <span class="section-tag">Spesialisasi</span>
          <h2 class="section-title">Layanan & Keahlian</h2>
          <div class="section-divider"></div>
          <p class="section-desc">Solusi digital yang berorientasi pada estetika, fungsionalitas, dan performa terbaik.</p>
        </div>

        <div class="services-grid">
          ${services
            .map(
              (srv) => `
            <div class="service-card tilt-card">
              <div class="service-icon-box">
                <i class="${srv.icon}"></i>
              </div>
              <h3>${srv.title}</h3>
              <p>${srv.desc}</p>
              <div class="service-foot">${srv.tag}</div>
            </div>
          `
            )
            .join('')}
        </div>
      </div>
    </section>
  `;
};

PortfolioApp.initLayanan = function () {
  // 3D Card Tilt untuk seluruh kartu layanan
  const serviceCards = document.querySelectorAll('.service-card.tilt-card');
  serviceCards.forEach((card) => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const cx = rect.width / 2;
      const cy = rect.height / 2;
      const rx = ((y - cy) / cy) * -8;
      const ry = ((x - cx) / cx) * 8;
      card.style.transform = `perspective(1000px) rotateX(${rx.toFixed(2)}deg) rotateY(${ry.toFixed(2)}deg) translateY(-8px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
    });
  });
};
