import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Image, Switch } from 'react-native';
import { styles } from './styles';

export default function App() {
  return (
    <View style={styles.container}>
      
      <Image source={require('./images/batsinal.jpg')} style={{width:250, height:250}} />
      <Text style={styles.title}>Gerador de senha</Text>
      <TextInput style={styles.Campo} />
      <StatusBar style="auto" />
    </View>
  );
}


