import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useRouter } from 'expo-router';

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
    <View className="flex-1 bg-[#FAF3E0] items-center justify-center p-6">
      
      <Text className="text-3xl font-bold mb-2 text-[#4A3B32]">
        Latte Calculator
      </Text>
      
      <Text className="text-[15px] text-[#705C53] mb-10 text-center">
        Pantau pengeluaran harianmu
      </Text>

      <TextInput
        className="w-full h-14 bg-white border border-[#D4C4B7] rounded-xl px-4 mb-4 text-base text-[#333333]"
        placeholder="Username (ketik: admin)"
        placeholderTextColor="#999"
        value={username}
        onChangeText={setUsername}
        autoCapitalize="none"
      />
      
      <TextInput
        className="w-full h-14 bg-white border border-[#D4C4B7] rounded-xl px-4 mb-4 text-base text-[#333333]"
        placeholder="Password (ketik: 12345)"
        placeholderTextColor="#999"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity 
        className="w-full h-14 bg-[#8B5A2B] rounded-xl items-center justify-center mt-4 active:opacity-80"
        onPress={handleLogin}
      >
        <Text className="text-white text-base font-bold tracking-widest">
          MASUK
        </Text>
      </TouchableOpacity>

    </View>
  );
}