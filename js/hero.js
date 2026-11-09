
window.PortfolioApp = window.PortfolioApp || {};

PortfolioApp.renderHero = function () {
  const profile = PortfolioApp.data.profile;

  return `
    <section id="home" class="hero section">
      <div class="container">
        <div class="hero-content">
          <div class="hero-text">
            <div class="hero-badge">
              <span class="pulse-dot"></span>
              <span>${profile.availability}</span>
            </div>
            <h3 class="hero-subtitle">Halo, Selamat Datang! Saya</h3>
            <h1 class="hero-title">${profile.name}</h1>
            <div class="typewriter-container">
              <span class="typewriter-prefix">Fokus sebagai </span>
              <span class="typewriter-text" id="typewriterText"></span>
              <span class="typewriter-cursor">|</span>
            </div>
            <p class="hero-desc">${profile.bioLead}</p>

            <div class="hero-actions">
              <a href="#portfolio" class="btn btn-primary">
                <i class="fas fa-briefcase"></i> Lihat Hasil Karya
              </a>
              <button class="btn btn-secondary" id="copyEmailBtn" data-email="${profile.email}">
                <i class="fas fa-copy"></i> Salin Email
              </button>
            </div>

            <div class="social-links">
              <a href="${profile.socials.github}" target="_blank" rel="noopener" aria-label="GitHub"><i class="fab fa-github"></i></a>
              <a href="${profile.socials.instagram}" target="_blank" rel="noopener" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
              <a href="${profile.socials.linkedin}" target="_blank" rel="noopener" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
              <a href="${profile.socials.discord}" target="_blank" rel="noopener" aria-label="Discord"><i class="fab fa-discord"></i></a>
            </div>
          </div>

          <div class="hero-image-wrapper">
            <div class="profile-card-tilt" id="profileTilt">
              <div class="profile-glow"></div>
              <div class="profile-img-container">
                <img src="${profile.avatar}" alt="${profile.name}" class="profile-img" onerror="this.src='images/RAFFLI.jpg'" />
              </div>
              <div class="floating-badge badge-top-right">
                <i class="fas fa-code"></i>
                <span>Web Developer</span>
              </div>
              <div class="floating-badge badge-bottom-left">
                <i class="fas fa-gamepad"></i>
                <span>Tactical Gamer</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
};

PortfolioApp.initHero = function () {
  const profile = PortfolioApp.data.profile;

  // Typewriter Animation
  const typewriterElement = document.getElementById('typewriterText');
  const words = profile.roles;
  let wordIdx = 0;
  let charIdx = 0;
  let isDeleting = false;
  let speed = 100;

  function tickTypewriter() {
    if (!typewriterElement) return;
    const currentWord = words[wordIdx];

    if (isDeleting) {
      charIdx--;
      typewriterElement.textContent = currentWord.substring(0, charIdx);
      speed = 50;
    } else {
      charIdx++;
      typewriterElement.textContent = currentWord.substring(0, charIdx);
      speed = 110;
    }

    if (!isDeleting && charIdx === currentWord.length) {
      speed = 1800;
      isDeleting = true;
    } else if (isDeleting && charIdx === 0) {
      isDeleting = false;
      wordIdx = (wordIdx + 1) % words.length;
      speed = 400;
    }

    setTimeout(tickTypewriter, speed);
  }
  tickTypewriter();

  // 3D Card Tilt on Profile Avatar
  const profileTilt = document.getElementById('profileTilt');
  if (profileTilt) {
    profileTilt.addEventListener('mousemove', (e) => {
      const rect = profileTilt.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const cx = rect.width / 2;
      const cy = rect.height / 2;
      const rx = ((y - cy) / cy) * -9;
      const ry = ((x - cx) / cx) * 9;
      profileTilt.style.transform = `perspective(1000px) rotateX(${rx.toFixed(2)}deg) rotateY(${ry.toFixed(2)}deg) translateY(-5px)`;
    });

    profileTilt.addEventListener('mouseleave', () => {
      profileTilt.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
    });
  }
};
