import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, Alert, Image } from 'react-native';
import { useRouter } from 'expo-router';

export default function LoginScreen() {
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const handleLogin = () => {
    if (!identifier.trim() || !password.trim()) {
      setShowAlert(true);
      return;
    }

    setShowAlert(false);
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
            Kelola pemasukan dan pengeluaran
          </Text>
      </View>

          <View className='flex flex-col gap-y-space-md'>

            <View className='hidden flex items-center gap-space-sm p-space-sm rounded-lg bg-error-container'>

              <Text className='font-body-sm text-body-sm text-on-error-container'>
                Email & Password harus diisi!
              </Text>

              <TextInput className=''>

              </TextInput>

            </View>

            <View className='flex flex-col gap-y-space-xs'>

              <Text className='font-label-md text-label-md text-on-surface-variant tracking-wider'>
                Email atau username
              </Text>

              <TextInput
              className='w-full h-11 px-space-md rounded-lg bg-white border border-[#EFE4DC] text-on-surface font-body-md text-body-md placeholder:text-outline transition-colors focus:border-primary focus:bg-white focus:outline-none'
              placeholder='namaemailmu@mail.com ata username'
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
                <TouchableOpacity>
                  <Text className='font-body-sm text-body-sm text-outline hover:text-primary transition-colors'>
                    Lupa Password?
                  </Text>
                </TouchableOpacity>
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

            <TouchableOpacity 
            className='mt-space-sm w-full h-11 rounded-lg bg-primary flex flex-row items-center justify-center'
            onPress={handleLogin}>
              <Text className='text-on-primary font-headline-md text-headline-md'>
                {isLoading ? "Loading..." : "Masuk"}</Text>
            </TouchableOpacity>
          </View>

          <View className='flex items-center gap-1 font-body-md text-body-md text-on-surface-variant'>

            <Text>
              Belum punya akun?
            </Text>

            <TouchableOpacity>
              <Text className='font-headline-md text-headline-md text-primary underline hover'>
                Daftar
              </Text>
            </TouchableOpacity>

          </View>

    </View>
    
  );
}