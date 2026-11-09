/**
 * ============================================================================
 * KEAHLIAN & SKILL - KEAHLIAN.JS
 * Merender daftar keahlian teknologi web dan animasi progress bar.
 * ============================================================================
 */

window.PortfolioApp = window.PortfolioApp || {};

PortfolioApp.renderKeahlian = function () {
  // Hanya mengambil keahlian teknologi web (kategori gaming/esport dihapus)
  const skills = PortfolioApp.data.skills.filter((cat) => cat.category !== 'gaming');

  return `
    <section id="skills" class="skills section">
      <div class="container">
        <div class="section-header">
          <span class="section-tag">Kompetensi</span>
          <h2 class="section-title">Keahlian & Penguasaan</h2>
          <div class="section-divider"></div>
          <p class="section-desc">Penguasaan teknologi modern untuk pengembangan website dan antarmuka pengguna.</p>
        </div>

        <div class="skills-grid" id="skillsGrid" style="grid-template-columns: 1fr; max-width: 820px; margin: 0 auto;">
          ${skills
            .map(
              (cat) => `
            <div class="skill-category-card" data-category="${cat.category}">
              <div class="cat-title">
                <i class="${cat.categoryIcon}"></i>
                <h3>${cat.categoryTitle}</h3>
              </div>
              ${cat.items
                .map(
                  (item) => `
                <div class="skill-item">
                  <div class="skill-info">
                    <span class="skill-name"><i class="${item.icon}"></i> ${item.name}</span>
                    <span class="skill-percent">${item.percent}</span>
                  </div>
                  <div class="skill-bar">
                    <div class="skill-progress" data-progress="${item.percent}"></div>
                  </div>
                </div>
              `
                )
                .join('')}
            </div>
          `
            )
            .join('')}
        </div>
      </div>
    </section>
  `;
};

PortfolioApp.initKeahlian = function () {
  // Animasi pengisian bar keahlian secara bertahap saat section terlihat
  const skillBars = document.querySelectorAll('.skill-progress');
  let skillsDone = false;

  function runSkills() {
    skillBars.forEach((bar, i) => {
      const val = bar.getAttribute('data-progress');
      setTimeout(() => {
        bar.style.width = val;
      }, i * 110);
    });
  }

  const skillsSec = document.getElementById('skills');
  if (skillsSec && 'IntersectionObserver' in window) {
    const sObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !skillsDone) {
            skillsDone = true;
            runSkills();
            sObserver.unobserve(e.target);
          }
        });
      },
      { threshold: 0.25 }
    );
    sObserver.observe(skillsSec);
  }
};
