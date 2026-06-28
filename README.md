# 📚 WikiRPL — Platform Pembelajaran Rekayasa Perangkat Lunak

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![GitHub stars](https://img.shields.io/github/stars/letmeburn/wikirpl?style=social)](https://github.com/letmeburn/wikirpl)
[![GitHub forks](https://img.shields.io/github/forks/letmeburn/wikirpl?style=social)](https://github.com/letmeburn/wikirpl)

> 📖 Platform edukasi interaktif untuk mempelajari **Rekayasa Perangkat Lunak (RPL)** dari level pemula hingga ahli. Dibangun oleh komunitas, untuk komunitas.

**[🌐 Kunjungi Website →](https://wikirpl.page.gd)**

---

## 🎯 Tentang Proyek

WikiRPL adalah platform pembelajaran berbasis web yang dirancang khusus untuk mahasiswa dan profesional yang ingin menguasai **Software Engineering**. Kami menyediakan:

✅ **Roadmap terstruktur** — Jalur belajar dari pemula hingga expert  
✅ **+100 artikel berkualitas** — Materi lengkap dengan contoh kode  
✅ **Kuis interaktif** — Uji pemahaman dengan feedback real-time  
✅ **Dark mode** — Nyaman untuk belajar kapan saja  
✅ **100% gratis & open-source** — Kontribusi welcome dari siapa saja  

---

## ✨ Fitur Utama

### 🗺️ Roadmap Belajar Terstruktur
- Level Pemula → Menengah → Ahli
- Progress tracking dengan checklist
- Estimasi waktu belajar per topik

### 📖 Perpustakaan Artikel
- **Kategori:** Dasar RPL, Pemrograman, OOP, Database, Web Dev, Tools, dan lebih banyak
- **Filter pintar:** Cari by level, kategori, atau keyword
- **Syntax highlighting** untuk kode snippet
- **Breadcrumb navigation** untuk konteks yang jelas

### 🧪 Kuis Interaktif
- 6+ topik dengan 10 soal per topic
- Instant feedback dengan pembahasan
- Score tracking dan statistik lengkap
- Mobile-friendly

### 💡 Resources Tambahan
- Tips & trik dari praktisi
- Best practices industri
- Rekomendasi tools
- Glossary istilah teknis

### 🌙 User Experience
- **Dark/Light Mode** — Otomatis sesuai preference sistem
- **Fully responsive** — Mobile-first design
- **Aksesibilitas** — WCAG 2.1 compliant
- **Performance** — Optimized assets, fast load time

---

## 🛠️ Tech Stack

| Layer | Teknologi |
|-------|-----------|
| **Frontend** | HTML5, CSS3, Vanilla JavaScript |
| **Styling** | Custom CSS dengan CSS Variables |
| **Build** | GitHub Pages (Static Site) |
| **Icons** | Font Awesome 6.4 |
| **Fonts** | Google Fonts (Poppins) |
| **Performance** | Optimized assets, no dependencies |

---

## 📁 Struktur Project

```
wikirpl/
├── 📄 index.html                    # Landing page utama
├── 📄 README.md                     # Dokumentasi (file ini)
├── 📄 LICENSE                       # MIT License
├── 📄 CONTRIBUTING.md               # Panduan kontribusi
├── 📄 CODE_OF_CONDUCT.md            # Kode etik komunitas
│
├── 📁 assets/
│   ├── css/
│   │   └── style.css               # Stylesheet utama (CSS Variables)
│   │   └── responsive.css          # Media queries
│   ├── js/
│   │   ├── main.js                 # Core functionality
│   │   ├── dark-mode.js            # Dark mode toggle
│   │   └── navigation.js           # Mobile navigation
│   └── images/
│       └── favicon.ico             # Browser tab icon
│
├── 📁 pages/
│   ├── artikel/
│   │   ├── index.html              # Daftar artikel + filter
│   │   └── [artikel-files]/        # Artikel individual
│   ├── roadmap/
│   │   └── index.html              # Roadmap interaktif
│   ├── kuis/
│   │   └── index.html              # Platform kuis
│   └── profil/
│       └── index.html              # Profil kontributor
│
├── 📁 data/
│   ├── articles.json               # Database artikel
│   ├── quizzes.json                # Database kuis
│   └── contributors.json           # Data kontributor
│
└── 📁 .github/
    └── workflows/
        └── deploy.yml              # Auto deploy ke GitHub Pages
```

---

## 🚀 Quick Start

### 1. Clone Repository
```bash
git clone https://github.com/letmeburn/wikirpl.git
cd wikirpl
```

### 2. Buka Secara Lokal
Opsi A: Langsung di browser
```bash
open index.html  # macOS
start index.html # Windows
xdg-open index.html # Linux
```

Opsi B: Dengan live server
```bash
# Install live-server
npm install -g live-server

# Jalankan
live-server
```

### 3. Deploy ke GitHub Pages
Repository ini sudah siap deploy otomatis. Push ke `main` branch dan GitHub akan auto-deploy ke:
```
https://letmeburn.github.io/wikirpl/
```

---

## 📖 Panduan Penggunaan

### Untuk Pelajar
1. Mulai dengan **Roadmap** untuk jalur belajar terstruktur
2. Baca artikel sesuai level kemampuan
3. Latihan dengan **Kuis interaktif**
4. Review pembahasan jika ada yang kurang paham
5. Kontribusi pertanyaan/saran ke komunitas

### Untuk Kontributor
1. Baca [CONTRIBUTING.md](CONTRIBUTING.md)
2. Fork repository dan buat branch baru
3. Tambah artikel/fitur/perbaikan
4. Buat Pull Request dengan deskripsi jelas
5. Tim review akan memberikan feedback

---

## 🤝 Kontribusi

Kami sangat welcome terhadap kontribusi! Cara kontribusi:

### Tipe-tipe Kontribusi
- ✍️ **Tulis artikel** baru tentang RPL
- 🐛 **Perbaiki bug** atau issue yang ada
- ✨ **Tambah fitur** baru yang berguna
- 🎨 **Improve design** dan UX
- 📝 **Perbaiki dokumentasi**

### Langkah Kontribusi
1. **Fork** repository ini
2. **Branch baru**: `git checkout -b feature/nama-fitur`
3. **Buat perubahan** dan test secara lokal
4. **Commit**: `git commit -m "Feat: deskripsi perubahan"`
5. **Push**: `git push origin feature/nama-fitur`
6. **Pull Request** dengan deskripsi detail

Lihat [CONTRIBUTING.md](CONTRIBUTING.md) untuk panduan lengkap.

---

## 📋 Checklist Status

- ✅ Landing page dengan hero section
- ✅ Roadmap interaktif dengan 3 level
- ✅ Sistem artikel dengan 18+ materi
- ✅ Kuis interaktif dengan 6 topik
- ✅ Dark/Light mode toggle
- ✅ Mobile responsive design
- ✅ Search & filter artikel
- ✅ Profil kontributor
- ✅ GitHub Pages deployment
- ✅ MIT License
- ⏳ Backend API (planned)
- ⏳ User authentication (planned)
- ⏳ Comment system (planned)

---

## 📞 Dukungan & Komunitas

- 🐛 **Report Bug**: [GitHub Issues](https://github.com/letmeburn/wikirpl/issues)
- 💡 **Suggest Feature**: [GitHub Discussions](https://github.com/letmeburn/wikirpl/discussions)
- 📧 **Email**: dikalacodingtapimalesngetik@gmail.com
- 🌐 **Website**: [wikirpl.github.io](https://letmeburn.github.io/wikirpl/)

---

## 📊 Statistik

- **Stars**: ⭐ Community votes
- **Contributors**: 👥 Team enthusiasts
- **Articles**: 📚 100+ quality content
- **Quizzes**: 🧪 60+ questions
- **Last Update**: 📅 2026-05-05

---

## 📄 Lisensi

MIT License - bebas untuk digunakan, dimodifikasi, dan didistribusikan untuk keperluan komersial maupun non-komersial.

Baca [LICENSE](LICENSE) untuk detail lengkap.

---

## 🙏 Ucapan Terima Kasih

Terima kasih kepada:
- Semua kontributor yang telah membantu
- Komunitas mahasiswa RPL
- Praktisi yang memberikan feedback
- Pengguna yang terus mendukung

---

<div align="center">

**Dibuat dengan ❤️ untuk komunitas RPL Indonesia**

[⭐ Give us a star if you find this helpful!](https://github.com/letmeburn/wikirpl)

</div>
