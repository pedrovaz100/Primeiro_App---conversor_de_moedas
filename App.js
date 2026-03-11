import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { Button } from './src/components/Button';
import { styles } from './App.styles'
import { currencies } from './src/constants/currencies';
import {TextInput} from '/src/components/Input'
import { Input } from './src/components/Input'




export default function App() {
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >

      <ScrollView style={styles.scrollView}>


        <View style={styles.content}>
          <StatusBar style="auto" />

          <View style={styles.header}>

            <Text style={styles.title}>Conversor de moedas!</Text>
            <Text style={styles.subTitle}>
              Converta valores entre moedas.
            </Text>


          </View>

          <View style={styles.card}>
            <Text style={styles.label}>De:</Text>
            <View style={styles.currencyGrid}>
              {currencies.map(currency => (
                <Button variant='primary'
                  key={currency.code}
                  currency={currency}

                >

                </Button>
              ))}

              <Input/>
             
            </View>

          </View>


        </View>
      </ScrollView>
    </KeyboardAvoidingView>

  );
}

