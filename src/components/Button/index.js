import { Text, TouchableOpacity } from "react-native";
import {styles} from './styles'


export function Button ({variant = "primary", onPress, currency}){

    return (
        <TouchableOpacity 
        onPress={onPress}
        style={[
            styles.button, 
            variant === 'primary' ? styles.buttonPrimary : styles.buttonSecondary

        ]}>
            <Text styles={styles.buttonText}>
                {currency ? currency.code : "Selecionar"}
            </Text>
        </TouchableOpacity>
    )
}