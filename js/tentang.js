/**
 * ============================================================================
 * TENTANG SAYA & STATISTIK - TENTANG.JS
 * Berisi seluruh tampilan dan logika bagian Biografi, Profil Pribadi, dan Statistik.
 * ============================================================================
 */

window.PortfolioApp = window.PortfolioApp || {};

PortfolioApp.renderTentang = function () {
  const { profile, stats } = PortfolioApp.data;

  return `
    <section id="counter" class="counter section">
      <div class="container">
        <div class="counter-grid">
          ${stats
            .map(
              (s) => `
            <div class="counter-item card-glass">
              <div class="counter-icon"><i class="${s.icon}"></i></div>
              <div class="counter-number" data-target="${s.number}">0</div>
              <div class="counter-text">${s.label}</div>
            </div>
          `
            )
            .join('')}
        </div>
      </div>
    </section>

    <section id="biography" class="biography section">
      <div class="container">
        <div class="section-header">
          <span class="section-tag">Profil Diri</span>
          <h2 class="section-title">Biografi Singkat</h2>
          <div class="section-divider"></div>
        </div>

        <div class="biography-content">
          <div class="biography-image-box">
            <div class="bio-img-frame">
              <img src="${profile.bioPhoto}" alt="Biografi ${profile.name}" class="bio-img" onerror="this.src='images/RAFFLI.jpg'" />
            </div>
            <div class="bio-exp-badge">
              <span class="exp-num">100%</span>
              <span class="exp-text">Dedikasi & Semangat</span>
            </div>
          </div>

          <div class="biography-text">
            <h3>Saya ${profile.name}</h3>
            <p class="bio-lead">${profile.bioLead}</p>
            <p class="bio-sub">${profile.bioSub}</p>

            <div class="bio-data-grid">
              <div class="bio-data-card">
                <div class="bio-data-icon"><i class="fas fa-user"></i></div>
                <div>
                  <strong>Nama Lengkap:</strong>
                  <span>${profile.name}</span>
                </div>
              </div>
              <div class="bio-data-card">
                <div class="bio-data-icon"><i class="fas fa-envelope"></i></div>
                <div>
                  <strong>Email:</strong>
                  <span>${profile.email}</span>
                </div>
              </div>
              <div class="bio-data-card">
                <div class="bio-data-icon"><i class="fas fa-calendar-alt"></i></div>
                <div>
                  <strong>Tgl Lahir:</strong>
                  <span>${profile.birthDate}</span>
                </div>
              </div>
              <div class="bio-data-card">
                <div class="bio-data-icon"><i class="fas fa-map-marker-alt"></i></div>
                <div>
                  <strong>Domisili:</strong>
                  <span>${profile.location}</span>
                </div>
              </div>
              <div class="bio-data-card">
                <div class="bio-data-icon"><i class="fas fa-graduation-cap"></i></div>
                <div>
                  <strong>Pendidikan:</strong>
                  <span>${profile.education}</span>
                </div>
              </div>
              <div class="bio-data-card">
                <div class="bio-data-icon"><i class="fas fa-briefcase"></i></div>
                <div>
                  <strong>Minat Karir:</strong>
                  <span>${profile.careerFocus}</span>
                </div>
              </div>
            </div>

            <div class="bio-actions">
              <a href="#contact" class="btn btn-primary">
                <i class="fas fa-paper-plane"></i> Hubungi Langsung
              </a>
              <a href="#skills" class="btn btn-secondary">
                <i class="fas fa-layer-group"></i> Eksplorasi Skill
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
};

PortfolioApp.initTentang = function () {
  // Animasi angka counter saat section counter terlihat (Intersection Observer)
  const counterNumbers = document.querySelectorAll('.counter-number');
  let countersDone = false;

  function runCounters() {
    counterNumbers.forEach((counter) => {
      const target = +counter.getAttribute('data-target') || 0;
      const duration = 2000;
      const start = performance.now();

      function step(now) {
        const progress = Math.min((now - start) / duration, 1);
        const ease = 1 - Math.pow(1 - progress, 2);
        counter.textContent = Math.floor(ease * target) + '+';
        if (progress < 1) {
          requestAnimationFrame(step);
        } else {
          counter.textContent = target + '+';
        }
      }
      requestAnimationFrame(step);
    });
  }

  const counterSec = document.getElementById('counter');
  if (counterSec && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !countersDone) {
            countersDone = true;
            runCounters();
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.3 }
    );
    observer.observe(counterSec);
  }
};
