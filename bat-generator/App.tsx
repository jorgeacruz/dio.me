import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Image, Switch } from 'react-native';


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

const styles = StyleSheet.create({
     container: {
    flex: 1,
    backgroundColor: '#211f1f',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
    color:"#fff",
    fontSize:26,
    margin:12
  },
  Campo:{
    borderWidth:1,
    borderColor:"#fff",
    borderRadius:4,
    padding:2,
    width:'80%',
    height:40

  }
})

