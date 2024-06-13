import { LinearGradient } from "expo-linear-gradient";
import { BellRinging, CaretDown, MapPin } from "phosphor-react-native";
import { Text, View } from "react-native";
import { styles } from '../../styles/home'

import Sun from '../../../assets/image/01d.svg'

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
                <View style={styles.info}>
                    <Text style={styles.infoTextUser}>Good Morning, User</Text>
                    <Sun  width={200} height={200}/>
                    <Text style={styles.infoTextClima}>21 °C</Text>
                    <Text style={styles.infoTextMaxMin}>Max.: 31° Min.:25°</Text>
                </View>
            </View>
        </LinearGradient>
    );
}
