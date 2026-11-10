# Dokumentasi Penggunaan AI (AI Usage)

Dokumen ini mencatat riwayat dan cakupan pemanfaatan kecerdasan buatan (AI) sebagai *coding assistant* dan *documentation assistant* selama pengembangan aplikasi **Latte Calculator** berbasis React Native dan Expo.

## Ringkasan Peran AI
Secara keseluruhan, AI digunakan sebagai *coding assistant* dan *documentation assistant* untuk membantu proses pengembangan aplikasi, memahami konsep React Native, memberikan contoh implementasi kode, melakukan *debugging* dan *troubleshooting*, serta membantu merapikan dan mengonversi draf dokumentasi dari dokumen eksternal (Microsoft Word) ke dalam format Markdown (`README.md`). AI berperan sebagai alat bantu pembelajaran, akselerasi pengembangan, dan perapian format, sedangkan implementasi, pengujian, dan penyesuaian akhir tetap dilakukan secara mandiri oleh pengembang.

---

## Cakupan Umum Penggunaan AI

| No | Kategori Penggunaan | Deskripsi Aktivitas |
| :-: | :--- | :--- |
| 1 | **Debugging Code** | Mengidentifikasi dan memperbaiki *error* pada kode React Native, seperti masalah pada `onChangeText`, `TextInput`, `FlatList`, dan konfigurasi proyek Expo. |
| 2 | **Code Explanation** | Menjelaskan fungsi komponen dan properti React Native, seperti `keyboardType`, `TextInput`, `Alert.alert()`, `View`, `Pressable`, dan `FlatList`. |
| 3 | **Code Suggestions** | Memberikan contoh potongan kode untuk mengimplementasikan fitur tertentu, seperti validasi input nominal, validasi email dan password, pembuatan *dummy data* terpisah, serta penggunaan `useState`. |
| 4 | **Framework & Library Guidance** | Memahami penggunaan React Native, Expo Router, NativeWind, Expo Vector Icons, dan Safe Area. |
| 5 | **Navigation Assistance** | Memahami navigasi antarhalaman menggunakan Expo Router (`Stack` pada `_layout.tsx` dan `router.push()`). |
| 6 | **Environment & Dependency Troubleshooting** | Mengatasi masalah instalasi *dependency*, ketidaksesuaian versi *package* Expo SDK, serta menjalankan proyek melalui Expo Web. |
| 7 | **HTML to React Native Conversion** | Menjelaskan pengganti elemen HTML dalam React Native, seperti `<form>`, `<nav>`, `<button>`, `<input>`, dan `<div>`. |
| 8 | **Input Handling & Validation** | Mengatur jenis *keyboard* input, membatasi input hanya berupa angka, dan menangani data yang dimasukkan pengguna. |
| 9 | **Tailwind & NativeWind Configuration** | Mengonfigurasi `tailwind.config.js`, mengatur cakupan *path* file `.tsx`, menambahkan preset `nativewind/preset`, dan mendefinisikan palet warna kustom. |
| 10 | **Static Data Structuring & FlatList Rendering** | Memberikan contoh perancangan struktur data statis menggunakan TypeScript `interface` di file terpisah (`dataTransaksi.ts`) serta merendernya menggunakan komponen `FlatList`. |
| 11 | **Document Formatting & Conversion (Word to Markdown)** | Mengonversi draf dokumentasi laporan dari Microsoft Word ke dalam format Markdown (`README.md`), menyusun ulang struktur tabel yang berantakan, serta merapikan blok kode dan sintaks direktori gambar antarmuka. |

---

## Rincian Teknis Sesi Pengembangan

### 1. Konfigurasi Styling & Tema (`tailwind.config.js`)
* **Setup NativeWind & Content Path:** Memastikan konfigurasi `content` mencakup seluruh direktori komponen (`./src/**/*.{js,jsx,ts,tsx}`, `./app/**/*.{js,jsx,ts,tsx}`, `./index.{js,jsx,ts,tsx}`) serta mengaktifkan preset `require("nativewind/preset")`.
* **Kustomisasi Token Warna:** Mendefinisikan palet warna tema aplikasi pada `theme.extend.colors` (seperti `surface`, `primary`, `secondary`, `surface-container-highest`, dan varian warna lainnya) untuk mendukung *design system* aplikasi.

### 2. Troubleshooting & Debugging Layout UI (Form Input Transaksi)
* **Diagnosis Bug Tombol Hilang:** Mendiagnosis bug tampilan tombol "Pemasukan" dan "Pengeluaran" yang hilang di layar HP akibat penggunaan class font icon (`material-symbols-outlined`) pada elemen teks biasa.
* **Perbaikan Flexbox & Padding:** Memperbaiki tata letak *flexbox* dan *padding* pada kontainer nominal agar `TextInput` tidak tertutup atau terpotong di perangkat Android.

### 3. Analisis Error Linter & Sintaks TypeScript
* **Duplikasi Atribut JSX:** Menjelaskan penyebab tanda merah pada properti `onChangeText` ganda di komponen `<TextInput>` serta alasan kodenya tetap berjalan di *runtime*.

### 4. Konsultasi Fitur & Integrasi Library
* **Pemilih Tanggal (Date Picker):** Memberikan rekomendasi *library* untuk input tanggal/kalender di Expo (`@react-native-community/datetimepicker`).
* **Implementasi State Kalender:** Panduan instalasi serta implementasi *state* dan *event handler* (`onDateChange`) untuk pemilih tanggal.

### 5. Debugging Logika Validasi Form
* **Perbaikan Kondisi Submit:** Menganalisis kesalahan pemanggilan properti `.Date` pada pengecekan kondisi *submit* form.
* **Solusi Validasi Tipe Data:** Memberikan solusi validasi yang tepat sesuai tipe data (`Date` atau `string`).

### 6. Memberikan Contoh Pembuatan Data Statis Terpisah & Debugging `FlatList` (`dataTransaksi.ts` & `riwayat.tsx`)
* **Pemisahan File Data Statis (*Dummy Data*):** Konsultasi pembuatan struktur data transaksi di file terpisah (`data/dataTransaksi.ts`) menggunakan TypeScript `interface Transaksi` (`id`, `judul`, `nominal`, `tipe`, `kategori`, `tanggal`) dan mengekspor array konstanta `DUMMY_TRANSAKSI` agar dapat diimpor lintas komponen.
* **Integrasi Komponen `FlatList`:** Panduan mengimpor `DUMMY_TRANSAKSI` ke halaman `riwayat.tsx` dan merender daftar riwayat transaksi secara dinamis menggunakan `FlatList`, `keyExtractor`, dan `renderItem`.
* **Troubleshooting Daftar Riwayat Tidak Muncul di Layar:**
  * *Ketidakcocokan Nama Variabel:* Mengidentifikasi masalah di mana array yang diekspor bernama `DUMMY_TRANSAKSI`, namun properti `data` pada `FlatList` sempat memanggil variabel yang belum terdefinisi (`riwayatTransaksi`).
  * *Masalah Kontainer Induk Kehilangan Tinggi (Height Collapse):* Menganalisis masalah kontainer pembungkus `<FlatList>` yang menggunakan `flex-1` tetapi menciut menjadi tinggi 0 piksel akibat tidak adanya lebar penuh (`w-full`) dan pengaturan *flex* yang sesuai pada kontainer induknya. Diperbaiki dengan menyesuaikan *class* pembungkus menjadi `<View className='flex-1 w-full p-4 bg-white'>`.

### 7. Konversi & Restrukturisasi Laporan Dokumen (Word ke Markdown `README.md`)
* **Ekstraksi & Penataan Ulang Teks Word:** Membantu menyalin dan menstrukturkan konten dari dokumen Word mentah (*Untitled document*) menjadi format Markdown yang sesuai standar dokumentasi repositori GitHub/GitLab.
* **Perbaikan Format Tabel Identitas:** Merapikan tata letak tabel atribut pengembang (NIM, Nama, Tema) yang sempat berantakan agar tersaji secara proporsional.
* **Standardisasi Sintaks Dokumentasi Screenshot:** Menyusun format pemanggilan aset tangkapan layar antarmuka pengguna (`./Screenshot/1-5.jpeg` atau `./Screenshot/1.jpeg` hingga `5.jpeg`) untuk visualisasi layar Login, Register, Dashboard, Tambah Transaksi, dan Riwayat.

---

## Lampiran Log Percakapan (Screenshots)

Berikut adalah dokumentasi tangkapan layar riwayat interaksi bersama AI selama pengerjaan proyek:

<details>
<summary><b>Log Percakapan Bagian 1 (01.png - 10.png)</b></summary>
<br>

![Log 01](./Gambar/01.png)
![Log 02](./Gambar/02.png)
![Log 03](./Gambar/03.png)
![Log 04](./Gambar/04.png)
![Log 05](./Gambar/05.png)
![Log 06](./Gambar/06.png)
![Log 07](./Gambar/07.png)
![Log 08](./Gambar/08.png)
![Log 09](./Gambar/09.png)
![Log 10](./Gambar/10.png)

</details>

<details>
<summary><b>Log Percakapan Bagian 2 (11.png - 20.png)</b></summary>
<br>

![Log 11](./Gambar/11.png)
![Log 12](./Gambar/12.png)
![Log 13](./Gambar/13.png)
![Log 14](./Gambar/14.png)
![Log 15](./Gambar/15.png)
![Log 16](./Gambar/16.png)
![Log 17](./Gambar/17.png)
![Log 18](./Gambar/18.png)
![Log 19](./Gambar/19.png)
![Log 20](./Gambar/20.png)

</details>

<details>
<summary><b>Log Percakapan Bagian 3 (21.png - 30.png)</b></summary>
<br>

![Log 21](./Gambar/21.png)
![Log 22](./Gambar/22.png)
![Log 23](./Gambar/23.png)
![Log 24](./Gambar/24.png)
![Log 25](./Gambar/25.png)
![Log 26](./Gambar/26.png)
![Log 27](./Gambar/27.png)
![Log 28](./Gambar/28.png)
![Log 29](./Gambar/29.png)
![Log 30](./Gambar/30.png)

</details>

<details>
<summary><b>Log Percakapan Bagian 4 (31.png - 40.png)</b></summary>
<br>

![Log 31](./Gambar/31.png)
![Log 32](./Gambar/32.png)
![Log 33](./Gambar/33.png)
![Log 34](./Gambar/34.png)
![Log 35](./Gambar/35.png)
![Log 36](./Gambar/36.png)
![Log 37](./Gambar/37.png)
![Log 38](./Gambar/38.png)
![Log 39](./Gambar/39.png)
![Log 40](./Gambar/40.png)

</details>

<details>
<summary><b>Log Percakapan Bagian 5 (41.png - 44.png)</b></summary>
<br>

![Log 41](./Gambar/41.png)
![Log 42](./Gambar/42.png)
![Log 43](./Gambar/43.png)
![Log 44](./Gambar/44.png)

</details>
