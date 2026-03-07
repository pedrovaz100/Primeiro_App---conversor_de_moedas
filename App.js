import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Touchable, View } from 'react-native';
import { Button } from './src/components/Button';

export default function App() {
  return (
    

    <View>
      <StatusBar style="auto" />

      <View>
      
    <Text>Conversor de moedas!</Text>
    <Text>
      Converta valores entre moedas.
    </Text>
    

      </View> 

        <View>
      <Text>De:</Text>
      <Button></Button>
        </View> 


    </View>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  contador: {
    fontSize: 20,
    marginBottom: 10,
  },
});