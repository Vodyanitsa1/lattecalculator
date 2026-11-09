# Dokumentasi & Panduan Proyek Latte Calculator

Proyek ini merupakan aplikasi pencatatan keuangan (*Latte Calculator*) yang dibangun menggunakan ekosistem **React Native** dengan **Expo Router** dan styling berbasis utilitas (**NativeWind / Tailwind CSS**).

---

## 1. Analisis Kebutuhan & Desain Sistem

### A. Latar Belakang & Masalah
Dalam pengelolaan keuangan harian, fenomena *latte factor*—pengeluaran kecil yang dilakukan berulang tanpa disadari (seperti kopi harian, jajan sore, atau *top-up game*)—sering kali menjadi penyebab utama defisit anggaran bulanan. Masalah utama yang dihadapi meliputi:
* **Pencatatan Konvensional yang Rumit**: Aplikasi finansial yang beredar kerap kali terlalu rumit (*over-engineered*) dengan terlalu banyak langkah hanya untuk mencatat satu transaksi kecil.
* **Kurangnya Kesadaran Finansial Instan**: Pengguna sering tidak mengetahui kondisi riil keuangannya sampai saldo rekening mendekati limit kritis.
* **Kelalaian Input Tanggal & Nominal**: Format input nominal dan tanggal yang tidak intuitif pada aplikasi mobile sering memicu kesalahan entri data (*human error*).

### B. Target Pengguna
1. **Mahasiswa & Pelajar**: Memerlukan pencatatan uang saku harian yang cepat dan tidak membebani ponsel.
2. **Pekerja Muda & Freelancer**: Membutuhkan pemantauan arus kas pribadi (*cash flow*) harian untuk membatasi pengeluaran gaya hidup konsumtif.
3. **Pengguna Mobile Aktif**: Individu yang mengutamakan aplikasi finansial dengan antarmuka ringkas, estetis, dan dapat diakses dengan gestur satu tangan (*thumb-friendly*).

### C. Kebutuhan Pengguna (Minimal 5 Kebutuhan)
1. **Otentikasi Pengguna**: Pengguna dapat mendaftar (*register*) dan masuk (*login*) untuk mengamankan data transaksi pribadinya.
2. **Pemantauan Ringkasan Saldo & Status Finansial**: Pengguna dapat melihat total akumulasi saldo berjalan, ringkasan arus kas bulan berjalan, serta indikator status kesehatan keuangan secara seketika pada halaman utama.
3. **Pencatatan Transaksi Cepat (Pemasukan/Pengeluaran)**: Pengguna dapat memasukkan transaksi baru dengan tipe transaksi, nama, dan nominal uang yang otomatis difilter hanya angka.
4. **Pemilihan Tanggal Transaksi yang Fleksibel**: Pengguna dapat memilih tanggal transaksi lampau maupun hari ini melalui kalender interaktif native tanpa perlu mengetik manual.
5. **Riwayat Transaksi Kronologis**: Pengguna dapat meninjau histori transaksi yang dikelompokkan berdasarkan tanggal transaksi.
6. **Navigasi Intuitif Antarlayar**: Pengguna dapat berpindah halaman dengan cepat tanpa tersesat melalui bilah navigasi bawah (*bottom navigation*).

### D. Tabel Pemetaan Kebutuhan ke Layar dan Komponen

| No | Kebutuhan Pengguna | Layar (*Screen*) | Komponen / Pustaka yang Digunakan |
|---|---|---|---|
| 1 | Masuk ke akun & validasi masukan | `index.tsx` (Login) | `<TextInput>`, `<TouchableOpacity>`, `Alert.alert()`, `useRouter()` |
| 2 | Registrasi akun baru dengan konfirmasi kata sandi | `register.tsx` (Register) | `<TextInput>`, `<TouchableOpacity>`, `useState`, `Alert.alert()` |
| 3 | Tinjauan saldo total & status kesehatan finansial | `dashboard.tsx` (Dashboard) | `<SafeAreaView>`, `<View>`, `<Text>`, `<MaterialIcons>` |
| 4 | Pemilihan kategori Pemasukan/Pengeluaran | `tambahTransaksi.tsx` | `<TouchableOpacity>`, `<MaterialIcons>`, `<Text>` |
| 5 | Input nominal terfilter angka (*numeric only*) | `tambahTransaksi.tsx` | `<TextInput keyboardType='numeric'>`, manipulasi RegEx pada `onChangeText` |
| 6 | Pemilihan tanggal transaksi via kalender native | `tambahTransaksi.tsx` | `@react-native-community/datetimepicker`, `<TouchableOpacity>` |
| 7 | Tinjauan histori transaksi terkelompok | `riwayat.tsx` (Riwayat) | `<View>`, `<Text>`, `<MaterialIcons>` |
| 8 | Navigasi global antarmuka bawah | Semua layar operasional | `<View>`, `<TouchableOpacity>`, `router.push()` via `expo-router` |

### E. Alasan Keputusan Desain (Design Decisions)
* **Tema Warna Kopi (*Warm Latte & Espresso Palette*)**: Menggunakan perpaduan warna *earthy* (`#42281D`, `#A64B2A`, `#EFE4DC`, dan aksen latte) untuk meredam kecemasan finansial (*financial anxiety*) dan memberikan identitas visual yang hangat, modern, dan nyaman di mata.
* **Styling Berbasis Utilitas (NativeWind / Tailwind CSS)**: Mempercepat proses penataan tata letak (*layouting*), memastikan konsistensi sistem spasi (*spacing*), sudut membulat (*border radius*), serta hierarki tipografi di seluruh layar tanpa menulis ratusan baris `StyleSheet` terpisah.
* **Floating Bottom Navigation Bar**: Penempatan navigasi di bagian bawah layar dirancang ergonomis untuk jangkauan ibu jari (*thumb zone*) saat menggunakan ponsel berlayar besar.
* **Sanitasi Input Nominal Sisi Klien**: Menghilangkan karakter non-angka secara otomatis melalui ekspresi reguler `replace(/[^0-9]/g, '')` guna mencegah rusaknya format data nominal sebelum diproses lebih lanjut.

### F. Rencana Pengembangan (Database Firebase)
Untuk meningkatkan kapabilitas aplikasi dari penyimpanan lokal/state sementara menjadi sistem tersinkronisasi awan, tahapan pengembangan selanjutnya difokuskan pada integrasi **Firebase**:
1. **Firebase Authentication**:
   * Menggantikan simulasi validasi form login/register dengan autentikasi berbasis Email & Password dari Firebase Auth.
   * Menyediakan manajemen sesi pengguna (*session state persistence*) dan alur pemulihan kata sandi (*forgot password*).
2. **Cloud Firestore (NoSQL Database)**:
   * Menyimpan data transaksi per pengguna dengan struktur koleksi:
     * `users/{userId}`: Profil pengguna, preferensi, dan saldo berjalan.
     * `users/{userId}/transactions/{transactionId}`: Dokumen transaksi memuat atribut `amount` (number), `title` (string), `type` (income/expense), `category` (string), dan `date` (timestamp).
   * Pemanfaatan *real-time listener* (`onSnapshot`) agar perubahan saldo dan penambahan transaksi di riwayat diperbarui secara instan di layar tanpa perlu memuat ulang aplikasi (*pull-to-refresh*).

---

## 2. Cara Kerja React Native

React Native memungkinkan pengembang membangun aplikasi mobile (*Android* dan *iOS*) menggunakan JavaScript/TypeScript serta paradigma deklaratif React.

Prinsip kerja utamanya meliputi:

1. **JavaScript Thread**: Tempat logika bisnis aplikasi, fungsi *handler*, kalkulasi data, pembaruan *state*, dan rendering elemen JSX dieksekusi.

2. **Native Thread (UI Thread)**: Menangani antarmuka visual native, rendering grafis, serta interaksi gestur dan sentuhan langsung pengguna pada perangkat.

3. **Penerjemahan Komponen (*Native Mapping*)**: Berbeda dengan aplikasi web hybrid lawas yang bertumpu pada *WebView* (browser mini tersembunyi), React Native memetakan komponen secara langsung ke widget UI native platform:

   * `<View>` diterjemahkan menjadi `android.view.ViewGroup` di Android dan `UIView` di iOS.

   * `<Text>` diterjemahkan menjadi `android.widget.TextView` di Android dan `UITextView` / `UILabel` di iOS.

   * `<TextInput>` diterjemahkan menjadi `android.widget.EditText` di Android dan `UITextField` di iOS.

4. **Komunikasi Antar-Thread**: Komunikasi antara JavaScript thread dan antarmuka native berjalan secara asinkron (menggunakan Bridge maupun arsitektur JSI modern), sehingga animasi antarmuka tetap berjalan mulus tanpa terhambat oleh proses kalkulasi logika di latar belakang.

---

## 3. Keunggulan React Native untuk Aplikasi Hybrid

Dibandingkan arsitektur aplikasi hybrid berbasis webview atau native murni:

1. **Satu Basis Kode untuk Banyak Platform (*Single Codebase*)**
   Pengembang cukup menulis kode satu kali dalam TypeScript/JSX untuk menghasilkan aplikasi yang berjalan optimal di Android maupun iOS, memangkas waktu *development* dan pemeliharaan kode.

2. **Performa Nyata Antarmuka (*Near-Native Performance*)**
   Karena widget yang dirender adalah komponen asli perangkat (bukan elemen HTML DOM yang disimulasikan di browser), interaksi seperti *scrolling*, perpindahan input form, dan transisi layar terasa sangat mulus.

3. **Ekosistem & Efisiensi Pengembangan (*Developer Experience*)**
   Adanya fitur **Fast Refresh** memungkinkan perubahan kode terlihat seketika di layar tanpa kompilasi ulang dari awal. Ekosistem Expo SDK juga mempermudah pemanfaatan fitur native perangkat seperti *Date Picker*, status bar, ikon vektor, hingga *safe area context*.

---

## 4. Konsep Dasar & Implementasi Kode Proyek

Berikut adalah implementasi empat konsep inti React Native yang diambil langsung dari berkas kode terbaru:

### A. Komponen (Component)

Komponen adalah unit independen yang menyusun tampilan aplikasi:

* **Komponen Inti / Bawaan**: Komponen bawaan React Native seperti `SafeAreaView`, `View`, `Text`, `TextInput`, dan `TouchableOpacity`.

* **Komponen Fungsional Kustom**: Fungsi yang mengembalikan elemen JSX antarmuka pengguna.

#### Contoh Kode Asli (`dashboard.tsx`):

```
export default function dashboardScreen() {
    const router = useRouter();

  return (
    <>
    <SafeAreaView className="flex-1 bg-white">
      {/* header */}
    <View className='fixed top-0 w-full z-50 pt-safe bg-surface/90 backdrop-blur-md border-b border-outline/60'>

      <View className='h-14 px-4 flex-row items justify-between'>
        <View className='flex-row items-center gap-2'>
          <MaterialIcons name ='coffee' size ={20}/>
          <Text className='font-display font-bold text-lg text-primary tracking-tight'>
            Latte Calculator
          </Text>
        </View>
      </View>

    </View>

    {/* main bawah */}
    <View className='flex-1 w-full pt-16 pb-24 px-4 space-y-4'>
      {/* section saldo saat ini */}
      <View className='rounded-2xl bg-primary-container from-[#42281D] via-[#4D3124] to-[#53382C] text-white p-5 shadow-lg relative overflow-hidden'>
        {/* target & idr */}
        <View className='flex flex-col space-y-3 relative z-10'>
          <View className='flex-row justify-between'>
            <Text className='font-display text-[11px] font-semibold uppercase tracking-wider text-[#DEC1AF]'>
              Total saldomu
            </Text>
            <Text className='text-[11px] font-medium bg-[#5F3E2F] text-[#FBDDCA] px-2.5 py-0.5 rounded-full flex items-center gap-1.5 border border-[#785442]'>
              <Text className='w-1.5 h-1.5 rounded-full bg-[#EABF8D]'>
              </Text>
              IDR
            </Text>
          </View>

          {/* angka saldo */}
          <View className=''>
            <Text className='text-3xl font-bold tracking-tight text-[#FFF8F6]'>
              -100.000
            </Text>
          </View>
          <View className='flex justify-between pt-1 text-xs'>
            <Text className='text-[#FFF8F6] '>
              Status finansial: SANGAT TIDAK STABIL
            </Text>
          </View>
        </View>
      </View>
```

### B. Props (Properties)

Props adalah atribut atau data masukan yang dikirimkan ke dalam komponen untuk mengatur tampilan maupun perilaku komponen tersebut. Props bersifat *read-only*.

Contoh props yang digunakan:

* `placeholder`, `value`, `secureTextEntry`, `onChangeText` pada `<TextInput>`.

* `name` dan `size` pada `<MaterialIcons>`.

* `onPress` pada `<TouchableOpacity>`.

#### Contoh Kode Asli (`index.tsx`):

```
            <View className='flex flex-col gap-y-space-xs'>

              <View className='flex-row items-center justify-between'>
                <Text className='font-label-md text-label-md text-on-surface-variant tracking-wider'>
                  Passwordd
                </Text>
              </View>

              <View className='relative justify-center'>
                <TextInput
                className='w-full h-11 pl-space-md pr-10 rounded-lg bg-white border border-outline-variant text-on-surface font-body-md text-body-md'
                placeholder='Password'
                value={password}
                secureTextEntry={!showPassword}
                onChangeText={setPassword}
                >
                </TextInput>

                <TouchableOpacity 
                className='absolute right-space-sm text-on-surface-variant p-1 flex items-center justify-center'
                onPress={()=>setShowPassword(!showPassword)}>
                  <Text className='text-on-surface-variant'>
                    {showPassword ? "Hide" : "Show"}
                  </Text>
                </TouchableOpacity>
              </View>
              
            </View>
```

Serta props pada komponen pihak ketiga (`tambahTransaksi.tsx`):

```
            {showDatePicker && (
              <DateTimePicker
              value={tanggal}
              mode="date"
              display="default"
              onChange={onDateChange}
              />
            )}
```

### C. State

State adalah penyimpanan data internal komponen yang reaktif. Saat nilai state diperbarui melalui pemanggilan fungsi pengubahnya (*setter*), React Native akan otomatis memicu render ulang untuk menampilkan data terkini di layar.

#### Inisialisasi State (`register.tsx` & `tambahTransaksi.tsx`):

```
  const [nama, setNama] = useState('');
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
```

```
  const [nominal, setNominal] = useState('');
  const [namaTransaksi, setNamaTransaksi] = useState('');
  const [tanggal, setTanggal] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
```

#### Pembaruan State melalui Input Pengguna (`tambahTransaksi.tsx`):

```
      {/* kartu tulis nominal */}
      <View className='bg-surface p-4 rounded-2xl border border-latte flex flex-col gap-1 shadow-sm'>
        <Text className='text-[10px] font-semibold tracking-wider text-muted uppercase'>
          Nominal
        </Text>
        <View className='flex-row items-center gap-2'>
          <Text className='font-display font-bold text-2xl text-muted/60'>
            RP
          </Text>
          <TextInput
          className='flex-1 font-display font-bold text-2xl text-espresso'
          placeholder='Masukan Nominal'
          value={nominal}
          autoCapitalize='none'
          keyboardType='numeric'
          onChangeText={(text) => {
            setNominal(text.replace(/[^0-9]/g, ''));
          }}>
          </TextInput>
        </View>
      </View>

      {/* Kartu tulis nama transaksi */}
      <View className='flex flex-col gap-1.5'>
        <Text className='text-[10px] font-semibold tracking-wider text-muted uppercase'>
          Nama Transaksi
        </Text>
        <View className='bg-surface px-3.5 py-2.5 rounded-xl border border-latte flex-row items-center gap-2.5 shadow-sm'>
          <TextInput
          className='flex-1 font-display font text-1xl text-espresso'
          placeholder='Contoh: TOP UP GAME'
          value={namaTransaksi}
          autoCapitalize='none'
          onChangeText={setNamaTransaksi}>
          </TextInput>
        </View>
      </View>
```

### D. Navigasi (Expo Router)

Navigasi mengatur alur perpindahan antarlayar dalam aplikasi. Pada **Expo Router**, navigasi dilakukan dengan hook `useRouter()` dan pemanggilan fungsi `router.push('/rute')`:

#### Contoh Navigasi dengan Validasi Form Login (`index.tsx`):

```
  const handleLogin = () => {
    if (!identifier.trim() || !password.trim()) {
      Alert.alert(
        'Email atau username & passwordnya diisi!!'
      )
      return;
    }
    else{
      router.push('/dashboard')
      return;
    }
    
  };
```

```
            <TouchableOpacity 
            className='mt-space-sm w-full h-11 rounded-lg bg-primary flex flex-row items-center justify-center'
            onPress={handleLogin}>
              <Text className='text-on-primary font-headline-md text-headline-md'>
                Masuk</Text>
            </TouchableOpacity>
```

#### Contoh Navigasi Bottom Navigation Bar (`dashboard.tsx`):

```
    {/* Navigasi halaman bawah */}
    <View className='fixed bottom-0 w-full z-50 pb-safe bg-surface/95 backdrop-blur-md border-t border-outline/70'>
      <View className='flex-row items-center justify-around h-16 max-w-md mx-auto px-4'>
        {/* Dashboard */}
        <TouchableOpacity className='flex flex-col items-center justify-center gap-1 min-w-[56px] text-primary'
        onPress={() => router.push('/dashboard')}>
          <MaterialIcons name ='home' size ={20}/>
          <Text className='material-symbols-outlined text-[11px]'>
            Dashboard
          </Text>
        </TouchableOpacity>
        <TouchableOpacity className='flex flex-col items-center justify-center gap-1 min-w-[56px] text-primary'
        onPress={() => router.push('/riwayat')}>
          <MaterialIcons name ='history' size ={20}/>
          <Text className='material-symbols-outlined text-[11px]'>
            Riwayat
          </Text>
        </TouchableOpacity>
        <TouchableOpacity className='flex flex-col items-center justify-center gap-1 min-w-[56px] text-primary'
        onPress={() => router.push('/tambahTransaksi')}>
          <MaterialIcons name ='add' size ={20}/>
          <Text className='material-symbols-outlined text-[11px]'>
            Tambah
          </Text>
        </TouchableOpacity>

      </View>
    </View>
```