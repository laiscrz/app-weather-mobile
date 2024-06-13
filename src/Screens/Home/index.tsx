import { LinearGradient } from "expo-linear-gradient";
import { BellRinging, CaretDown, MapPin } from "phosphor-react-native";
import { Text, View } from "react-native";
import { styles } from '../../styles/home'

export function Home() {
    return (
        <LinearGradient colors={["#292A4E", "#715C77", "#C75C2E"]}
            style={styles.container}>
            <View style={styles.content}>
                <View style={styles.header}>
                    <View style={styles.headerLeft}>
                        <MapPin color="#fff" size={25} />
                        <Text style={styles.headerLeftText}>São Paulo</Text>
                        <CaretDown color="#fff" size={25}/>
                    </View>
                    <BellRinging color="#fff" size={25} />

                </View>
            </View>
        </LinearGradient>
    );
}
