export interface Transaksi {
  id: string;
  judul: string;
  nominal: number;
  tipe: 'pemasukan' | 'pengeluaran';
  kategori: string;
  tanggal: string;
}

export const DUMMY_TRANSAKSI: Transaksi[] = [
  {
    id: '1',
    judul: 'Gaji Bulanan',
    nominal: 100000,
    tipe: 'pemasukan',
    kategori: 'Pekerjaan',
    tanggal: '2026-11-01',
  },
  {
    id: '2',
    judul: 'Makan',
    nominal: 200000,
    tipe: 'pengeluaran',
    kategori: 'Makanan & Minuman',
    tanggal: '2026-11-03',
  },
];