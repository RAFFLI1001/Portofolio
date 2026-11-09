/**
 * ============================================================================
 * DATA PORTOFOLIO - DATA.JS
 * Berisi seluruh data informasi diri, keahlian, layanan, portofolio, dan kontak.
 * ============================================================================
 */

window.PortfolioApp = window.PortfolioApp || {};

PortfolioApp.data = {
  profile: {
    name: 'Muhammad Raffli Arditya',
    shortName: 'Portfolio',
    avatar: 'images/RAFFLI.jpg',
    bioPhoto: 'images/RAFFLI.jpg',
    roles: [
      'Frontend Web Developer',
      'UI/UX Visual Designer',
      'Tactical E-Sports Player',
      'Creative Tech Enthusiast'
    ],
    availability: 'Tersedia untuk Proyek & Kolaborasi',
    email: 'raffliarditya@gmail.com',
    phone: '+62 858-1007-7475',
    location: 'Indonesia',
    birthDate: '10 Januari 2008',
    education: 'SMK Negeri 65 Jakarta - Jurusan Rekayasa Perangkat Lunak (RPL)',
    careerFocus: 'Frontend & UI/UX',
    bioLead:
      'Kreator digital yang bersemangat dalam perancangan antarmuka visual (UI/UX) dan pengembangan website modern. Senang menciptakan produk web yang interaktif, elegan, dan berorientasi pada kepuasan pengguna.',
    bioSub:
      'Selain aktif mendalami pemrograman web modern, saya memiliki rekam jejak di dunia game e-sports kompetitif yang mengasah fokus strategi, kepemimpinan tim, serta ketahanan analisis dalam situasi dinamis.',
    socials: {
      github: 'https://github.com',
      instagram: 'https://instagram.com',
      linkedin: 'https://linkedin.com',
      discord: 'https://discord.com'
    }
  },

  stats: [
    { icon: 'fas fa-folder-open', number: 15, label: 'Proyek Selesai' },
    { icon: 'fas fa-user-check', number: 24, label: 'Klien & Partner Puas' },
    { icon: 'fas fa-clock', number: 2, label: 'Tahun Pengalaman' },
    { icon: 'fas fa-trophy', number: 8, label: 'Prestasi & Penghargaan' }
  ],

  services: [
    {
      icon: 'fas fa-paint-brush',
      title: 'Web Design',
      desc: 'Mendesain tampilan website yang modern, elegan, intuitif, dan sesuai dengan identitas visual terkini.',
      tag: 'Clean & Modern Aesthetic'
    },
    {
      icon: 'fas fa-pencil-ruler',
      title: 'UI/UX Design',
      desc: 'Merancang alur interaksi dan tata letak pengguna yang nyaman untuk aplikasi web dan mobile.',
      tag: 'User-Centered Focus'
    },
    {
      icon: 'fas fa-code',
      title: 'Web Development',
      desc: 'Membangun website responsif, cepat diakses, dan interaktif menggunakan standar HTML5, CSS3, dan JavaScript murni.',
      tag: 'Responsive & Fast Loading'
    },
    {
      icon: 'fas fa-mobile-alt',
      title: 'Responsive Layout',
      desc: 'Memastikan seluruh tampilan halaman web tampil optimal di smartphone, tablet, maupun monitor desktop.',
      tag: 'Cross-Device Ready'
    },
    {
      icon: 'fas fa-gamepad',
      title: 'Gaming & E-Sports',
      desc: 'Pengalaman strategi kompetitif tinggi dalam kepemimpinan tim, komunikasi taktis, dan pemikiran cepat.',
      tag: 'Strategy & Teamwork'
    },
    {
      icon: 'fas fa-rocket',
      title: 'Website Optimization',
      desc: 'Optimasi performa halaman, efisiensi penulisan skrip, serta animasi visual yang halus tanpa lag.',
      tag: 'Smooth Experience'
    }
  ],

  skills: [
    {
      category: 'tech',
      categoryTitle: 'Pengembangan Web & Desain',
      categoryIcon: 'fas fa-laptop-code',
      items: [
        { name: 'HTML5 & CSS3 Modern', percent: '85%', icon: 'fab fa-html5' },
        { name: 'JavaScript & DOM Manipulation', percent: '75%', icon: 'fab fa-js-square' },
        { name: 'UI/UX Design & Prototyping', percent: '80%', icon: 'fas fa-layer-group' },
        { name: 'Responsive Web Layout', percent: '90%', icon: 'fas fa-mobile-alt' }
      ]
    },
    {
      category: 'gaming',
      categoryTitle: 'Prestasi E-Sports & Strategi',
      categoryIcon: 'fas fa-trophy',
      items: [
        { name: 'Blood Strike: Rank Legend', percent: '100%', icon: 'fas fa-crosshairs' },
        { name: 'Mobile Legends: Ex Glory 71', percent: '95%', icon: 'fas fa-shield-alt' },
        { name: 'Clash of Clans: Ex Liga Juara 1', percent: '85%', icon: 'fas fa-crown' },
        { name: 'Team Communication & Leadership', percent: '90%', icon: 'fas fa-users' }
      ]
    }
  ],

  projects: [
    {
      category: 'mobile',
      catLabel: 'React Native & Expo',
      title: 'Habit Tracker Mobile App',
      image: 'images/project-habittracker.png',
      desc: 'Aplikasi mobile pelacak kebiasaan harian dengan streak counter, visualisasi grafik progress, dan pengingat pintar.',
      detail:
        'Aplikasi pelacak kebiasaan yang dibangun menggunakan React Native, TypeScript, dan Expo. Membantu pengguna membangun konsistensi harian dengan sistem streak counter, analitik performa, dan antarmuka modern yang nyaman digunakan.'
    },
    {
      category: 'web',
      catLabel: 'Vite & Modern Web',
      title: 'Ondel-Ondel Bakery & Store',
      image: 'images/project-ondelondel.jpg',
      desc: 'Platform web katalog dan toko kue kuliner dengan sistem ulasan rating, navigasi interaktif, dan performa cepat.',
      detail:
        'Website toko kue dan kuliner yang dikembangkan dengan Vite, JavaScript modern, dan CSS responsif. Dilengkapi halaman showcase produk, sistem filter katalog, ulasan pelanggan, serta tata letak responsif di semua perangkat.'
    },
    {
      category: 'mobile',
      catLabel: 'Flutter & Dart',
      title: 'Aplikasi Catatan Notera',
      image: 'images/project-notera.png',
      desc: 'Aplikasi pencatatan digital cepat dan aman dengan fitur checklist to-do, pencarian catatan, dan pengelompokan rapi.',
      detail:
        'Aplikasi mobile berbasis Flutter dan Dart yang memudahkan pengguna membuat catatan penting, manajemen daftar to-do harian, fitur checklist real-time, dan tampilan antarmuka yang bersih serta responsif.'
    },
    {
      category: 'game',
      catLabel: 'JavaScript Game Dev',
      title: 'Game Whack A Mole',
      image: 'images/project-whackamole.png',
      desc: 'Game mini interaktif pukul tikus tanah berbasis web dengan efek suara dinamis, skor real-time, dan animasi seru.',
      detail:
        'Game berbasis web yang dirancang dengan HTML5, CSS3, dan logika Vanilla JavaScript murni. Memiliki sistem perhitungan skor pemain secara real-time, efek audio sound effects (SFX) yang responsif, dan animasi visual memikat.'
    },
    {
      category: 'mobile',
      catLabel: 'Flutter & Dart',
      title: 'Aplikasi NestList Todos',
      image: 'images/project-nestlist.png',
      desc: 'Aplikasi manajemen tugas dan aktivitas harian dengan prioritas tenggat waktu dan status penyelesaian tugas.',
      detail:
        'Aplikasi produktivitas berbasis Flutter untuk pengelolaan jadwal dan tugas pribadi. Membantu meningkatkan efisiensi waktu dengan penandaan prioritas tugas, filter status selesai, dan penyimpanan data lokal yang handal.'
    },
    {
      category: 'web',
      catLabel: 'Frontend Architecture',
      title: 'Modern Single-Page Portfolio',
      image: 'images/project-portfolio.png',
      desc: 'Website portofolio developer modern dengan kanvas partikel interaktif, efek 3D tilt, dan arsitektur JS modular.',
      detail:
        'Portofolio single-page application yang dikembangkan dengan arsitektur JavaScript modular tanpa framework eksternal. Dilengkapi kanvas partikel rasi bintang interaktif, kartu efek 3D tilt, dark mode switcher, dan performa tinggi.'
    }
  ],

  milestones: [
    {
      year: '2023',
      title: 'Langkah Awal di Dunia Digital',
      desc: 'Memulai eksplorasi dasar-dasar pemrograman web, struktur HTML, tata letak CSS, dan logika dasar algoritma.'
    },
    {
      year: '2024',
      title: 'Puncak Prestasi E-Sports & Strategi Tim',
      desc: 'Meraih rank Legend di Blood Strike dan Mythic Glory di Mobile Legends, membuktikan kedisiplinan dan ketahanan mental kompetitif.'
    },
    {
      year: '2025',
      title: 'Pengembangan JavaScript & UI/UX Modern',
      desc: 'Mengembangkan aplikasi web interaktif, manipulasi DOM dinamis, arsitektur modular, dan perancangan antarmuka pengguna elegan.'
    }
  ]
};
