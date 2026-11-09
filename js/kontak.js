window.PortfolioApp = window.PortfolioApp || {};

PortfolioApp.renderKontak = function () {
  const profile = PortfolioApp.data.profile;

  return `
    <section id="contact" class="contact section">
      <div class="container">
        <div class="section-header">
          <span class="section-tag">Mari Terhubung</span>
          <h2 class="section-title">Kirim Pesan</h2>
          <div class="section-divider"></div>
          <p class="section-desc">Punya tawaran proyek, kolaborasi, atau sekadar ingin menyapa? Silakan hubungi saya!</p>
        </div>

        <div class="contact-wrapper">
          <div class="contact-info-panel card-glass">
            <h3>Informasi Kontak</h3>
            <p>Saya selalu terbuka untuk berdiskusi tentang peluang baru, pembuatan website, maupun kolaborasi kreatif.</p>

            <div class="info-items">
              <div class="info-item">
                <div class="info-icon"><i class="fas fa-envelope"></i></div>
                <div>
                  <h4>Email Resmi</h4>
                  <p>${profile.email}</p>
                </div>
              </div>

              <div class="info-item">
                <div class="info-icon"><i class="fas fa-phone-alt"></i></div>
                <div>
                  <h4>WhatsApp / Telepon</h4>
                  <p>${profile.phone}</p>
                </div>
              </div>

              <div class="info-item">
                <div class="info-icon"><i class="fas fa-map-marker-alt"></i></div>
                <div>
                  <h4>Lokasi</h4>
                  <p>${profile.location}</p>
                </div>
              </div>
            </div>

            <div class="contact-socials">
              <h4>Ikuti Saya:</h4>
              <div class="social-links-small">
                <a href="${profile.socials.github}" target="_blank" rel="noopener" aria-label="GitHub"><i class="fab fa-github"></i></a>
                <a href="${profile.socials.instagram}" target="_blank" rel="noopener" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
                <a href="${profile.socials.linkedin}" target="_blank" rel="noopener" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
                <a href="${profile.socials.discord}" target="_blank" rel="noopener" aria-label="Discord"><i class="fab fa-discord"></i></a>
              </div>
            </div>
          </div>

          <div class="contact-form-panel card-glass">
            <form class="contact-form" id="contactForm" novalidate>
              <div class="form-row">
                <div class="form-group">
                  <label for="name"><i class="fas fa-user"></i> Nama Lengkap</label>
                  <input type="text" id="name" name="name" placeholder="Masukkan nama Anda" required />
                  <span class="error-msg">Nama tidak boleh kosong.</span>
                </div>

                <div class="form-group">
                  <label for="email"><i class="fas fa-envelope"></i> Alamat Email</label>
                  <input type="email" id="email" name="email" placeholder="contoh@email.com" required />
                  <span class="error-msg">Format email tidak valid.</span>
                </div>
              </div>

              <div class="form-group">
                <label for="subject"><i class="fas fa-tag"></i> Subjek Pesan</label>
                <input type="text" id="subject" name="subject" placeholder="Topik diskusi atau tawaran proyek" required />
                <span class="error-msg">Subjek pesan diperlukan.</span>
              </div>

              <div class="form-group">
                <label for="message"><i class="fas fa-comment-dots"></i> Isi Pesan</label>
                <textarea id="message" name="message" rows="5" placeholder="Tuliskan pesan atau detail kebutuhan Anda..." required></textarea>
                <span class="error-msg">Pesan tidak boleh kosong.</span>
              </div>

              <div class="form-submit">
                <button type="submit" class="btn btn-primary btn-block" id="submitBtn">
                  <span><i class="fas fa-paper-plane"></i> Kirim Pesan Sekarang</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>

    <div class="toast-container" id="toastContainer"></div>
  `;
};

PortfolioApp.showToast = function (msg, icon = 'fas fa-check-circle') {
  const toastContainer = document.getElementById('toastContainer');
  if (!toastContainer) return;

  const t = document.createElement('div');
  t.className = 'toast';
  t.innerHTML = `<i class="${icon}"></i><span>${msg}</span>`;
  toastContainer.appendChild(t);

  setTimeout(() => {
    t.classList.add('fade-out');
    setTimeout(() => t.remove(), 350);
  }, 3500);
};

PortfolioApp.initKontak = function () {
  const profile = PortfolioApp.data.profile;

  const copyBtn = document.getElementById('copyEmailBtn');
  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      const email = copyBtn.getAttribute('data-email') || profile.email;
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard
          .writeText(email)
          .then(() => {
            PortfolioApp.showToast(`Email ${email} berhasil disalin!`, 'fas fa-copy');
          })
          .catch(() => {
            PortfolioApp.showToast(`Email: ${email}`, 'fas fa-envelope');
          });
      } else {
        PortfolioApp.showToast(`Email: ${email}`, 'fas fa-envelope');
      }
    });
  }

  const contactForm = document.getElementById('contactForm');
  const submitBtn = document.getElementById('submitBtn');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameInput = document.getElementById('name');
      const emailInput = document.getElementById('email');
      const subjectInput = document.getElementById('subject');
      const messageInput = document.getElementById('message');

      const fields = [
        { input: nameInput, valid: nameInput.value.trim().length > 0 },
        {
          input: emailInput,
          valid: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value.trim())
        },
        { input: subjectInput, valid: subjectInput.value.trim().length > 0 },
        { input: messageInput, valid: messageInput.value.trim().length > 0 }
      ];

      let hasError = false;
      fields.forEach(({ input, valid }) => {
        const group = input.closest('.form-group');
        if (!valid) {
          hasError = true;
          if (group) group.classList.add('has-error');
        } else {
          if (group) group.classList.remove('has-error');
        }

        input.addEventListener(
          'input',
          () => {
            if (group) group.classList.remove('has-error');
          },
          { once: true }
        );
      });

      if (hasError) {
        PortfolioApp.showToast('Harap isi data formulir dengan benar.', 'fas fa-exclamation-triangle');
        return;
      }

      const originalHtml = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Mengirim Pesan...';

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalHtml;
        contactForm.reset();
        PortfolioApp.showToast(
          'Pesan berhasil terkirim! Terima kasih telah menghubungi saya.',
          'fas fa-paper-plane'
        );
      }, 1200);
    });
  }
};
