import { Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

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

      {/* Section pemasukan pengeluaran */}
      <View className='grid grid-cols-2 gap-3'>
      {/* Bagian pemasukan */}
        <View className='rounded-xl bg-white border border-outline p-4 flex flex-col justify-between shadow-sm'>
          <View className='flex-row mb-2'>
            <MaterialIcons name ='keyboard-arrow-up' size ={20}/>
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
          <View className='flex-row mb-2'>
            <MaterialIcons name ='keyboard-arrow-down' size ={20}/>
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

      {/* Section tombol tambah transaksi */}
      <TouchableOpacity 
      className='mt-space-sm w-full h-11 rounded-lg bg-primary flex flex-row items-center justify-center'
      onPress={() => router.push('/tambahTransaksi')}>
        <Text className='text-on-primary font-headline-md text-headline-md'>+ Tambah transaksi</Text>
      </TouchableOpacity>

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