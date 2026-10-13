import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, Alert, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons'; 
import 'C:/Users/ANIRUF/Documents/Hybrid JS/LatteCalculator2/global.css';
export default function LoginScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = () => {
    if (username === '' || password === '') {
      Alert.alert('Perhatian', 'Username dan Password tidak boleh kosong!');
      return;
    }

    if (username === 'admin' && password === '12345') {
      router.replace('/kalkulator'); 
    } else {
      Alert.alert('Akses Ditolak', 'Username atau password salah.');
    }
  };

  return (
    <View className="flex-1 flex flex-col relative w-full bg-surface">
      <View className="flex flex-col items-center text-center mt-space-md mb-space-lg">
        <View className="w-20 h-20 mb-2 rounded-xl overflow-hidden shadow-sm bg-[#F5F3EF] p-2 items-center justify-center">
          <Image source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCbRRBpxzO3DOaXxmwi8KGrpMqYwajUWBBNP-2i-kmOgWaHRVSEPZ1YnbzNbSIImbqt9bmUCcCVDhjBL2Ah3yn788zaAe2MA-4x5d45GIvvnwCIKkV0xRTrp8jU-cCwLeexC0sVarBFAZAlLWOPFVEiwH4W-gitGJXSePr_QO2QDOlj4Jml6e1D6HAmtlzbFsiukkAIDFd2ueNbuBUF618TgxuMjFINVJHsHOpVU9VGc6xaFKo1x1456w' }} className="w-full h-full" resizeMode="contain">
          </Image>
        </View>
      </View>
      <Text className="text-2xl font-bold text-[#271310] text-center">
        Latte Calculator
      </Text>
      <Text className="text-[14px] text-[#504442] mt-1 text-center max-w-[280px] text-center">
        Lacak dan sadari jumlah pengeluaran
      </Text>
      <View className="w-full bg-[#FFFFFF] rounded-2xl p-6 shadow-sm border border-[#EAE8E4]">
        <View className="mb-4">
          
        </View>
      </View>
    </View>
    
  );
}