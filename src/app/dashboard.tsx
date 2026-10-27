import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { push } from 'expo-router/build/global-state/router';

export default function dashboardScreen() {

  return (
    <>
    {/* header */}
    <View className='fixed top-0 w-full z-50 pt-safe bg-surface/90 backdrop-blur-md border-b border-outline/60'>

      <View className='h-14 px-4 flex items-center justify-between'>
        <View className='flex items-center gap-2'>
          <Text className='font-display font-bold text-lg text-primary tracking-tight'>
            Latte Calculator
          </Text>
        </View>
      </View>

    </View>
    {/* main bawah */}
    <View className='flex-1 w-full pt-16 pb-24 px-4 space-y-4'>
      {/* section saldo saat ini */}
      <View className='rounded-2xl bg-gradient-to-br from-[#42281D] via-[#4D3124] to-[#53382C] text-white p-5 shadow-lg relative overflow-hidden'>
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
              Pemasukan
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

    </View>
    </>
    
  );
}