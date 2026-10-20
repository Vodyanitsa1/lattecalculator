import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, Alert, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { push } from 'expo-router/build/global-state/router';

export default function RegisterScreen() {
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const handleLogin = () => {
    if (!identifier.trim() || !password.trim()) {
      Alert.alert(
        'Email atau username & passwordnya diisi!!'
      )
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);

      router.replace('/dashboard'); 
      
    }, 1000);
  };

  return (
    <View className='flex-1 flex flex-col w-full bg-surface px-margin py-space-xl'>

      <View className='flex flex-col items-center text-center mb-space-xl'>
          <Text className='font-headline-lg text-headline-lg text-primary tracking-tight'>
            Latte Calculator
          </Text>
          <Text className='font-body-sm text-body-sm text-on-surface-variant mt-space-xs'>
            Kelola pemasukan dan pengeluaranmu
          </Text>
      </View>

          <View className='flex flex-col gap-y-space-md'>

            <View className='flex flex-col gap-y-space-xs'>

              <Text className='font-label-md text-label-md text-on-surface-variant tracking-wider'>
                Email atau username
              </Text>

              <TextInput
              className='w-full h-11 px-space-md rounded-lg bg-white border border-[#EFE4DC] text-on-surface font-body-md text-body-md placeholder:text-outline transition-colors focus:border-primary focus:bg-white focus:outline-none'
              placeholder='namaEmailKamu@mail.com atau username'
              value={identifier}
              onChangeText={setIdentifier}
              autoCapitalize='none'>
              </TextInput>

            </View>

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

            <View className='flex flex-col gap-y-space-xs'>

              <View className='flex-row items-center justify-between'>
                <Text className='font-label-md text-label-md text-on-surface-variant tracking-wider'>
                  Confirm Passwordd
                </Text>
              </View>

              <View className='relative justify-center'>
                <TextInput
                className='w-full h-11 pl-space-md pr-10 rounded-lg bg-white border border-outline-variant text-on-surface font-body-md text-body-md'
                placeholder='Confirm Password'
                value={password}
                secureTextEntry={!showConfirmPassword}
                onChangeText={setConfirmPassword}
                >
                </TextInput>

                <TouchableOpacity 
                className='absolute right-space-sm text-on-surface-variant p-1 flex items-center justify-center'
                onPress={()=>setShowConfirmPassword(!showConfirmPassword)}>
                  <Text className='text-on-surface-variant'>
                    {showConfirmPassword ? "Hide" : "Show"}
                  </Text>
                </TouchableOpacity>
              </View>
              
            </View>

            <TouchableOpacity 
            className='mt-space-sm w-full h-11 rounded-lg bg-primary flex flex-row items-center justify-center'
            onPress={handleLogin}>
              <Text className='text-on-primary font-headline-md text-headline-md'>
                {isLoading ? "Loading..." : "Daftar"}</Text>
            </TouchableOpacity>
          </View>

          <View className='flex items-center gap-1 font-body-md text-body-md text-on-surface-variant'>

            <Text>
              Sudah punya akun?
            </Text>

            <TouchableOpacity onPress={() => router.push('/')}>
              <Text className='font-headline-md text-headline-md text-primary underline hover'>
                LOGIN
              </Text>
            </TouchableOpacity>

          </View>

    </View>
    
  );
}