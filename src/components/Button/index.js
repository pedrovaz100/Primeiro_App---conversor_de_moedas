import { Text, TouchableOpacity } from "react-native";
import {styles} from './styles'


export function Button (){

    return (
        <TouchableOpacity style={[
            styles.button, styles.buttonSecondary
        ]}>
            <Text styles={styles.buttonText}>
                clique aqui
            </Text>
        </TouchableOpacity>
    )
}