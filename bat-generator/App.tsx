import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Image, Switch } from 'react-native';
import { styles } from './styles';

export default function App() {
  return (
    <View style={styles.container}>
      
      <Text style={styles.title}>BAT PASS GENERATOR</Text>
      <Image source={require('./images/batsinal.jpg')} style={styles.logo} />
      <TextInput style={styles.Campo} placeholder='Digite alguma coisa aqui' placeholderTextColor={'#fff'}/>
      <StatusBar style="auto" />
    </View>
  );
}


