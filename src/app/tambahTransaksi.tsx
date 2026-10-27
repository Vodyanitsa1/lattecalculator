import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { push } from 'expo-router/build/global-state/router';

export default function tambahTransaksiScreen(){
  const [nominal, setNominal] = useState('');
  const [namaTransaksi, setNamaTransaksi] = useState('');
  const [kategori, setKategori] = useState('');
  const [tanggal, setTanggal] = useState('');

}