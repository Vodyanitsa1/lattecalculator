import { Text, View, TouchableOpacity, FlatList } from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { DUMMY_TRANSAKSI, Transaksi } from '../data/dataTransaksi';

export default function riwayatScreen(){
 const router = useRouter();
 return (
    <>
    <SafeAreaView className="flex-1 bg-white">
      {/* header */}
    <View className='fixed top-0 w-full z-50 pt-safe bg-surface/90 backdrop-blur-md border-b border-outline/60'>

      <View className='h-14 px-4 flex-row items justify-between'>
        <View className='flex-row items-center gap-2'>
          <MaterialIcons name ='history' size ={20}/>
          <Text className='font-display font-bold text-lg text-primary tracking-tight'>
            Riwayat
          </Text>
        </View>
      </View>

    </View>

    {/* main bawah */}
    <View className='flex-1 w-full pt-16 pb-24 px-4 space-y-4'>

      {/* Section pemasukan pengeluaran */}
      <View className='grid grid-cols-2 gap-3'>
        {/* Bagian pemasukan */}
        <View className='rounded-xl bg-white border border-outline p-4 flex flex-col justify-between shadow-sm'>
          <View className='flex-row justify-between mb-2'>
            <Text className='font-display text-[11px] font-semibold text-on-surface-variant uppercase tracking-wider'>
              Pemasukan
            </Text>
            
          </View>
          {/* angka pemasukan */}
          <View>
            <Text className='text-base font-bold text-accent-green block truncate'>
              +100.000
            </Text>
            <Text className='text-xs text-on-surface-variant'>
              Bulan ini
            </Text>
          </View>
        </View>

        {/* Pengeluaran */}
        <View className='rounded-xl bg-white border border-outline p-4 flex flex-col justify-between shadow-sm'>
          <View className='flex-row justify-between mb-2'>
            <Text className='font-display text-[11px] font-semibold text-on-surface-variant uppercase tracking-wider'>
              Pengeluaran
            </Text>
            
          </View>
          {/* angka pemgeluaran */}
          <View>
            <Text className='text-base font-bold text-accent-green block truncate'>
              -200.000
            </Text>
            <Text className='text-xs text-on-surface-variant'>
              Bulan ini
            </Text>
          </View>
        </View>

      </View>
    {/* kartu list transaksi dari dataTransaksi */}
      <View className='flex-1 w-full p-4 bg-white'>
        <FlatList
        data={DUMMY_TRANSAKSI}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View className="flex-row justify-between p-3 border-b border-latte">
            <View>
              <Text className='font-semibold text-sm text-on-surface truncate'>
                {item.judul}
              </Text>
              <Text className='text-xs text-mute'>{item.kategori} • {item.tanggal}</Text>
            </View>
            <Text className={`font-bold ${item.tipe === 'pemasukan' ? 'text-green-600' : 'text-red-500'}`}>
              {item.tipe === 'pemasukan' ? '+' : '-'} Rp {item.nominal.toLocaleString('id-ID')}
            </Text>
          </View>
        )}/>
      </View>

    </View>

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
    </SafeAreaView>

    </>
    
  );
}