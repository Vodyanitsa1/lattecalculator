import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';


export default function tambahTransaksiScreen(){
  const [nominal, setNominal] = useState('');
  const [namaTransaksi, setNamaTransaksi] = useState('');
  const [tanggal, setTanggal] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleTransaksi = () => {
    if (!nominal.trim() || !namaTransaksi.trim() || !tanggal) {
      Alert.alert(
        'Nominal, nama transaksi, & tanggalnya diisi!'
      )
      return;
    }
  }

  const onDateChange = (event: DateTimePickerEvent, selectedDate?: Date) => {
    setShowDatePicker(false);
    if (event.type === 'set' && selectedDate) {
      setTanggal(selectedDate);
    }
  };

  const router = useRouter();

  return (
    <>
    <SafeAreaView className="flex-1 bg-white">
      {/* header */}
    <View className='fixed top-0 w-full z-50 pt-safe bg-surface/90 backdrop-blur-md border-b border-outline/60'>

      <View className='h-14 px-4 flex-row items justify-between'>
        <View className='flex items-center gap-2'>
          <Text className='font-display font-bold text-lg text-primary tracking-tight'>
            + Tambah Transaksi
          </Text>
        </View>
      </View>

    </View>

    {/* main bawah */}
    <View className='flex-1 px-5 py-4 max-w-md mx-auto w-full flex flex-col gap-4'>

      {/* Section header tulisan formulir */}
      <View className='flex-row items-center justify-between'>
        
        <View>
          <Text className='text-[11px] font-semibold text-muted tracking-wider uppercase'>
            Formulir finasnial
          </Text>
          <Text className='text-xl font-bold font-display text-espresso'>
            TAMBAH TRANSAKSI
          </Text>
        </View>

      </View>

      {/* Section navugasi jenis pemasukan/pengeluaran */}
      <View className='flex-row p-1 bg-latte-light rounded-xl border border-latte'>
        {/* Dashboard */}
        <TouchableOpacity className='flex-1 py-2 rounded-lg bg-surface text-coffee font-semibold text-xs flex items-center justify-center gap-1.5 shadow-sm'>
          <Text className='text-[15px] font-semibold text-[#A64B2A]'>
            Pemasukan
          </Text>
        </TouchableOpacity>
        <TouchableOpacity className='flex-1 py-2 rounded-lg bg-surface text-coffee font-semibold text-xs flex items-center justify-center gap-1.5 shadow-sm'>
          <Text className='text-[15px] font-semibold text-[#A64B2A]'>
            Pengeluaran
          </Text>
        </TouchableOpacity>

      </View>

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

      {/* Kartu tanggal */}
      <View className='flex flex-col gap-1.5'>
        <Text className='text-[10px] font-semibold tracking-wider text-muted uppercase'>
          Tanggal Transaksi
        </Text>
        <View className='bg-surface px-3.5 py-2.5 rounded-xl border border-latte flex-row items-center gap-2.5 shadow-sm'>
          <View className='flex-row items-center gap-2.5'>
            <TouchableOpacity 
            onPress={() => setShowDatePicker(true)}
            className="p-3 bg-surface rounded-xl border border-latte flex-row justify-between items-center">
              <Text className="text-espresso font-semibold">
                {tanggal.toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}
              </Text>
              <Text className="text-lg">🗓️</Text>
            </TouchableOpacity>

            {showDatePicker && (
              <DateTimePicker
              value={tanggal}
              mode="date"
              display="default"
              onChange={onDateChange}
              />
            )}

          </View>
        </View>
      </View>

      {/* Tombol simpan */}
      <View className='pt-2 flex flex-col gap-2'>
        <TouchableOpacity 
        className='mt-space-sm w-full h-11 rounded-lg bg-primary flex flex-row items-center justify-center'
        onPress={handleTransaksi}>
          <Text className='text-on-primary font-headline-md text-headline-md'>
            Simpan Transaksi
          </Text>
        </TouchableOpacity>

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