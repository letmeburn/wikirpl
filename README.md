# 📚 WikiRPL — Panduan Lengkap Rekayasa Perangkat Lunak

> Proyek Wikipedia jurusan RPL (Rekayasa Perangkat Lunak) — dari pemula hingga ahli.

---

## 🎯 Tentang Proyek

WikiRPL adalah platform edukasi berbasis web yang dirancang oleh mahasiswa jurusan RPL untuk memandu siapa saja — dari yang baru mengenal dunia pemrograman hingga yang ingin menjadi profesional di bidang rekayasa perangkat lunak.

Platform ini menyediakan:
- Panduan langkah demi langkah (roadmap) belajar RPL
- Tips & trik dari praktisi dan mahasiswa berpengalaman
- Referensi materi kuliah dan proyek nyata
- Kamus istilah teknis RPL
- Contoh kode, studi kasus, dan best practice

---

## ✨ Fitur Utama

### 🗺️ Roadmap Belajar
- Jalur belajar dari level Pemula → Menengah → Ahli
- Checklist progres belajar yang bisa disimpan
- Estimasi waktu per topik

### 📖 Artikel & Materi
- Artikel terstruktur per kategori (Dasar Pemrograman, OOP, Database, Web Dev, dll)
- Versi ringkas dan versi lengkap tiap artikel
- Dukungan kode snippet dengan syntax highlighting

### 🔍 Pencarian & Filter
- Pencarian full-text di seluruh konten
- Filter berdasarkan level, kategori, dan tag
- Saran pencarian otomatis

### 💡 Tips & Trik
- Koleksi tips dari komunitas RPL
- Shortcut, workflow, dan productivity hack
- Rekomendasi tools dan software

### 🧪 Kuis & Latihan
- Kuis per topik untuk mengukur pemahaman
- Latihan soal dengan pembahasan
- Leaderboard komunitas

### 👥 Komunitas & Kontribusi
- Sistem kontribusi artikel (seperti Wikipedia)
- Komentar dan diskusi per artikel
- Profil kontributor

### 🌙 UI/UX
- Dark mode / Light mode
- Responsif untuk mobile dan desktop
- Navigasi sidebar yang intuitif
- Breadcrumb dan related articles

---

## 🛠️ Tech Stack

| Layer | Teknologi |
|-------|-----------|
| Frontend | HTML5, CSS3, JavaScript (Vanilla / React) |
| Styling | Tailwind CSS atau Bootstrap |
| Backend | Node.js / PHP Laravel |
| Database | MySQL / PostgreSQL |
| Search | Algolia / Fuse.js |
| Hosting | Vercel / Netlify / VPS |

---

## 📁 Struktur Proyek

```
wikirpl/
├── index.html                      # Landing page utama
├── README.md                       # Dokumentasi proyek
├── prompt.txt                      # Panduan development untuk AI
│
├── assets/                         # Aset statis
│   ├── css/
│   │   └── style.css              # Stylesheet utama (CSS Variables, Responsive)
│   ├── js/
│   │   └── main.js                # JavaScript utama (Dark mode, Navigation, Smooth scroll)
│   └── images/                     # Folder untuk gambar, logo, dan ikon
│       └── .gitkeep
│
├── pages/                          # Halaman-halaman aplikasi
│   ├── artikel/
│   │   └── index.html             # Halaman daftar artikel dengan filter
│   ├── roadmap/
│   │   └── index.html             # Halaman roadmap interaktif
│   ├── kuis/
│   │   └── index.html             # Halaman kuis per topik
│   └── profil/
│       └── index.html             # Halaman profil kontributor
│
├── components/                     # Komponen HTML reusable
│   ├── navbar.html                # Navbar dengan dark mode toggle
│   ├── sidebar.html               # Sidebar navigasi kategori
│   └── footer.html                # Footer dengan link penting
│
└── data/                           # Data JSON untuk konten dinamis
    └── articles.json              # Database artikel (id, title, category, level, dll)
```

### 📝 Penjelasan Struktur

**Root Files:**
- `index.html` - Landing page dengan hero section, fitur unggulan, roadmap preview, dan artikel terbaru
- `README.md` - Dokumentasi lengkap proyek
- `prompt.txt` - Panduan development dan instruksi untuk AI assistant

**Assets:**
- `css/style.css` - Semua styling dengan CSS Variables untuk theming (dark/light mode)
- `js/main.js` - Interaktivitas: hamburger menu, dark mode toggle, smooth scrolling
- `images/` - Placeholder untuk logo, thumbnail artikel, dan aset visual

**Pages:**
- Setiap halaman memiliki folder sendiri untuk skalabilitas
- Struktur siap untuk pengembangan SPA atau multi-page

**Components:**
- Komponen HTML yang bisa di-include/reuse di berbagai halaman
- Memudahkan maintenance dan konsistensi UI

**Data:**
- `articles.json` - Menyimpan data artikel dalam format JSON
- Mudah di-fetch dengan JavaScript untuk konten dinamis

---

## 🚀 Cara Menjalankan

```bash
# Clone repo
git clone https://github.com/letmeburn/wikirpl.git

# Masuk ke folder
cd wikirpl

# Buka di browser (jika static)
open index.html

# Atau jalankan dengan live server
npx live-server
```

---

## 🤝 Kontribusi

1. Fork repo ini
2. Buat branch baru: `git checkout -b fitur/nama-fitur`
3. Commit perubahan: `git commit -m "Tambah: nama fitur"`
4. Push ke branch: `git push origin fitur/nama-fitur`
5. Buat Pull Request

---

## 📄 Lisensi

MIT License — bebas digunakan untuk keperluan edukasi.

---

*Dibuat dengan ❤️ oleh Arshavin Bintang Wibowo*
