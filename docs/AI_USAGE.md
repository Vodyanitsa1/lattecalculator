# Dokumentasi Penggunaan AI (AI Usage Documentation)

Dokumen ini mencatat transparansi dan cakupan penggunaan kecerdasan buatan (*Artificial Intelligence*) dalam proses pengembangan proyek mobile berbasis **React Native** dan **Expo**.

## 1. Ringkasan Eksekutif & Peran AI

Dalam proyek ini, AI berfungsi sebagai **Coding Assistant** dan **Learning Companion**. Peran AI terbatas pada:

* Eksplorasi konsep dan arsitektur komponen React Native.
* Analisis galat (*debugging*) serta pemecahan masalah dependensi.
* Penyusunan konfigurasi sistem *styling* (NativeWind & Tailwind CSS).
* Rekomendasi pustaka (*library*) dan penyediaan cuplikan kode (*code snippets*).

> **Catatan Integritas:** Seluruh integrasi kode, penyesuaian logika bisnis, verifikasi tipe data, dan pengujian akhir pada perangkat fisik tetap dieksekusi secara manual oleh pengembang.

## 2. Cakupan Penggunaan Umum (General AI Usage)

| No | Kategori | Deskripsi Penggunaan |
| :--- | :--- | :--- |
| 1 | **Debugging Code** | Mengidentifikasi *runtime error* dan *syntax warning* pada komponen React Native (seperti penanganan properti `onChangeText`, `TextInput`, dan konfigurasi berkas Expo). |
| 2 | **Code Explanation** | Memahami mekanisme kerja komponen bawaan React Native dan propertinya (`keyboardType`, `TextInput`, `Alert.alert()`, `View`, `Pressable`, dll.). |
| 3 | **Code Suggestions** | Meminta pola/contoh implementasi fitur, seperti validasi input nominal mata uang, validasi kredensial (email & password), serta manajemen *state* dengan `useState`. |
| 4 | **Framework & Library Guidance** | Panduan pemilihan dan implementasi stack ekosistem Expo (Expo Router, NativeWind, Safe Area Context, dan Expo Vector Icons). |
| 5 | **Tailwind & NativeWind Configuration** | Pembuatan dan penyesuaian berkas konfigurasi `tailwind.config.js`, integrasi preset NativeWind, pengaturan *content path*, serta pembuatan token warna kustom (*color palette*). |
| 6 | **Navigation Assistance** | Memahami paradigma *file-based routing* pada Expo Router, termasuk navigasi programatis menggunakan `router.push()`. |
| 7 | **Environment & Troubleshooting** | Mengatasi konflik versi dependensi (Expo SDK mismatch), instalasi *package*, serta pemecahan masalah ketika dijalankan di Expo Web maupun perangkat fisik. |
| 8 | **HTML to React Native Migration** | Memetakan elemen web standar ke primitif React Native (misal: pengganti `<form>`, `<nav>`, `<button>`, `<input>`, dan `<div>`). |
| 9 | **Input Handling & Validation** | Menentukan tipe keyboard virtual yang tepat, menyaring masukan angka (*numeric only*), dan sanitasi data masukan pengguna. |

## 3. Catatan Sesi Spesifik

### A. Konfigurasi Sistem Styling (`tailwind.config.js` & NativeWind)

* **Setup Integrasi NativeWind**: Menyiapkan struktur berkas `tailwind.config.js` yang kompatibel dengan NativeWind, termasuk penggunaan `presets: [require("nativewind/preset")]` dan deklarasi tipe JSDoc `/** @type {import('tailwindcss').Config} */`.
* **Konfigurasi Content Path**: Memastikan cakupan pemindaian kelas Tailwind mencakup seluruh berkas komponen pada direktori `./src/**/*.{js,jsx,ts,tsx}`, `./app/**/*.{js,jsx,ts,tsx}`, dan `./index.{js,jsx,ts,tsx}`.
* **Perluasan Desain Token Warna (*Color Palette*)**: Mengonfigurasi palet warna semantik Material Design 3 bernuansa *earthy/latte* ke dalam `theme.extend.colors` (seperti `primary`, `secondary`, `surface`, `surface-container-highest`, `surface-bright`, `on-surface`, dsb.) agar dapat diakses langsung melalui utility classes Tailwind.

### B. Troubleshooting & Debugging Layout UI

* **Penyelesaian Bug Ikon Navigasi:** Mendiagnosis penyebab hilangnya tombol "Pemasukan" dan "Pengeluaran" pada layar perangkat mobile akibat penggunaan kelas web font (`material-symbols-outlined`) pada elemen teks biasa, lalu menggantinya dengan ikon vektor native yang kompatibel (`@expo/vector-icons/MaterialIcons`).
* **Penyesuaian Responsivitas Input Nominal:** Menyesuaikan hierarki *flexbox*, `padding`, dan batas kontainer agar elemen `TextInput` nominal tidak terpotong atau tertutup *keyboard* sistem di Android.

### C. Analisis Linter & Sintaks TypeScript

* **Duplikasi Atribut JSX:** Menganalisis peringatan linter terkait deklarasi ganda pada properti `onChangeText` di dalam komponen `<TextInput>`. AI menjelaskan mengapa kode tersebut tetap dieksekusi oleh runtime JavaScript (nilai properti terakhir menimpa nilai sebelumnya) meskipun terdeteksi sebagai peringatan di IDE.

### D. Konsultasi Fitur & Integrasi Library Kalender

* **Rekomendasi DateTime Picker:** Memilih pustaka pemilih tanggal native yang stabil untuk Expo (`@react-native-community/datetimepicker`).
* **Implementasi State & Handler:** Menyediakan struktur penanganan *state* tanggal (`Date`), pembukaan dialog modal kalender, serta *callback* saat pengguna memilih tanggal transaksi.

### E. Debugging Logika Validasi Form

* **Perbaikan Pemeriksaan Kondisi:** Mengidentifikasi galat logika pemanggilan properti yang keliru (`.Date`) saat validasi sebelum pengiriman form (*submit*).
* **Penyesuaian Tipe Data:** Merestrukturisasi kondisi validasi agar selaras dengan tipe data aktual yang digunakan (objek `Date` atau representasi `string`).

## 4. Kesimpulan

Pemanfaatan AI dalam alur kerja ini meningkatkan efisiensi iterasi pengembangan antarmuka, mempercepat konfigurasi tooling styling (Tailwind/NativeWind), menelusuri akar masalah (*root-cause analysis*) pada bug tata letak mobile, serta memandu penerapan arsitektur kode React Native yang terstruktur.

## 5. Lampiran Tangkapan Layar Log Percakapan AI (Chat Logs)

Seluruh bukti percakapan dan konsultasi bersama AI diarsipkan dalam folder `./Gambar/` dengan penomoran `01.png` sampai `40.png`:

<details>
<summary><b>Lihat Log Chat Bagian 1 (01 - 10)</b></summary>

| Log 01 - 05 | Log 06 - 10 |
| :---: | :---: |
| ![Chat Log 01](./Gambar/01.png) | ![Chat Log 06](./Gambar/06.png) |
| ![Chat Log 02](./Gambar/02.png) | ![Chat Log 07](./Gambar/07.png) |
| ![Chat Log 03](./Gambar/03.png) | ![Chat Log 08](./Gambar/08.png) |
| ![Chat Log 04](./Gambar/04.png) | ![Chat Log 09](./Gambar/09.png) |
| ![Chat Log 05](./Gambar/05.png) | ![Chat Log 10](./Gambar/10.png) |

</details>

<details>
<summary><b>Lihat Log Chat Bagian 2 (11 - 20)</b></summary>

| Log 11 - 15 | Log 16 - 20 |
| :---: | :---: |
| ![Chat Log 11](./Gambar/11.png) | ![Chat Log 16](./Gambar/16.png) |
| ![Chat Log 12](./Gambar/12.png) | ![Chat Log 17](./Gambar/17.png) |
| ![Chat Log 13](./Gambar/13.png) | ![Chat Log 18](./Gambar/18.png) |
| ![Chat Log 14](./Gambar/14.png) | ![Chat Log 19](./Gambar/19.png) |
| ![Chat Log 15](./Gambar/15.png) | ![Chat Log 20](./Gambar/20.png) |

</details>

<details>
<summary><b>Lihat Log Chat Bagian 3 (21 - 30)</b></summary>

| Log 21 - 25 | Log 26 - 30 |
| :---: | :---: |
| ![Chat Log 21](./Gambar/21.png) | ![Chat Log 26](./Gambar/26.png) |
| ![Chat Log 22](./Gambar/22.png) | ![Chat Log 27](./Gambar/27.png) |
| ![Chat Log 23](./Gambar/23.png) | ![Chat Log 28](./Gambar/28.png) |
| ![Chat Log 24](./Gambar/24.png) | ![Chat Log 29](./Gambar/29.png) |
| ![Chat Log 25](./Gambar/25.png) | ![Chat Log 30](./Gambar/30.png) |

</details>

<details>
<summary><b>Lihat Log Chat Bagian 4 (31 - 40)</b></summary>

| Log 31 - 35 | Log 36 - 40 |
| :---: | :---: |
| ![Chat Log 31](./Gambar/31.png) | ![Chat Log 36](./Gambar/36.png) |
| ![Chat Log 32](./Gambar/32.png) | ![Chat Log 37](./Gambar/37.png) |
| ![Chat Log 33](./Gambar/33.png) | ![Chat Log 38](./Gambar/38.png) |
| ![Chat Log 34](./Gambar/34.png) | ![Chat Log 39](./Gambar/39.png) |
| ![Chat Log 35](./Gambar/35.png) | ![Chat Log 40](./Gambar/40.png) |

</details>