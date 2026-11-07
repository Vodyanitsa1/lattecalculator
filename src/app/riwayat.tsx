import { Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function riwayatScreen(){
 const router = useRouter();
 return (
    <>
    <SafeAreaView className="flex-1 bg-white">
      {/* header */}
    <View className='fixed top-0 w-full z-50 pt-safe bg-surface/90 backdrop-blur-md border-b border-outline/60'>

      <View className='h-14 px-4 flex-row items justify-between'>
        <View className='flex items-center gap-2'>
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
              🢁 Pemasukan
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
              🡻 Pengeluaran
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
    {/* kartu list transaksi */}
      <View className='space-y-4'>
        {/* kartu 11 juli */}
        <View className='transaction-group space-y-2'>

            <View className='flex-row items-center justify-between px-1'>
                <Text className='font-display text-[11px] font-bold uppercase tracking-wider text-outline'>
                    Hari ini, 11 Juli 2026
                </Text>
                <Text className='text-[11px] text-outline font-medium'>
                    2 Transaksi
                </Text>
            </View>

            <View className='bg-surface-container-lowest rounded-xl border border-outline-variant divide-y divide-outline-variant/50 shadow-sm overflow-hidden'>

            {/* Item makan */}
                <View 
                className='transaction-item flex-row items justify-between p-3.5 hover:bg-surface-container-low/40 active:bg-surface-container-low transition-colors'>
                    <View className='flex-row items-center gap-3 min-w-0'>
                        <View className='min-w-0'>
                            <Text className='font-semibold text-sm text-on-surface truncate'>
                                Makan
                            </Text>
                        </View>
                    </View>
                    <Text className='font-display text-sm font-bold text-coffee-accent shrink-0 pl-2'>
                        -200.000
                    </Text>
                </View>
                <View 
                className='transaction-item flex-row items justify-between p-3.5 hover:bg-surface-container-low/40 active:bg-surface-container-low transition-colors'>
                    <View className='flex-row items-center gap-3 min-w-0'>
                        <View className='min-w-0'>
                            <Text className='font-semibold text-sm text-on-surface truncate'>
                                Uang masuk
                            </Text>
                        </View>
                    </View>
                    <Text className='font-display text-sm font-bold text-coffee-accent shrink-0 pl-2'>
                        +100.000
                    </Text>
                </View>
            </View>

        </View>
      </View>

    </View>

    {/* Navigasi halaman bawah */}
    <View className='fixed bottom-0 w-full z-50 pb-safe bg-surface/95 backdrop-blur-md border-t border-outline/70'>
      <View className='flex-row items-center justify-around h-16 max-w-md mx-auto px-4'>
        {/* Dashboard */}
        <TouchableOpacity className='flex flex-col items-center justify-center gap-1 min-w-[56px] text-primary'
        onPress={() => router.push('/dashboard')}>
          <Text className='material-symbols-outlined text-[22px]'>
            🏠
          </Text>
          <Text className='material-symbols-outlined text-[11px]'>
            Dashboard
          </Text>
        </TouchableOpacity>
        <TouchableOpacity className='flex flex-col items-center justify-center gap-1 min-w-[56px] text-primary'
        onPress={() => router.push('/riwayat')}>
          <Text className='material-symbols-outlined text-[22px]'>
            📜
          </Text>
          <Text className='material-symbols-outlined text-[11px]'>
            Riwayat
          </Text>
        </TouchableOpacity>
        <TouchableOpacity className='flex flex-col items-center justify-center gap-1 min-w-[56px] text-primary'
        onPress={() => router.push('/tambahTransaksi')}>
          <Text className='material-symbols-outlined text-[22px]'>
            +
          </Text>
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