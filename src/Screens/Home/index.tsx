import { LinearGradient } from "expo-linear-gradient";
import { BellSimple, CaretDown, MapPin } from "phosphor-react-native";
import { Text, View, ScrollView } from "react-native";
import { styles } from '../../styles/home'

import Sun from '../../../assets/image/01d.svg'
import Sun02d from '../../../assets/image/02d.svg'

export function Home() {
    return (
        <LinearGradient colors={["#292A4E", "#715C77", "#C75C2E"]}
            style={styles.container}>
            <View style={styles.content}>
                <View style={styles.header}>
                    <View style={styles.headerLeft}>
                        <MapPin color="#FFF" size={32} />
                        <Text style={styles.headerLeftText}>Iaciara, GO</Text>
                        <CaretDown color="#FFF" size={32} />
                    </View>
                    <BellSimple color="#FFF" size={32} />
                </View>
                <View style={styles.info}>
                    <Sun width={200} height={200} />
                    <Text style={styles.infoText}>21°C</Text>
                    <Text style={styles.infoTextMaxMin}>Max.: 31º Min.: 25º</Text>
                </View>
            </View>
            <View style={styles.infoDetails}>
                <Text style={styles.infoDetailsText}>Previsão dos próximos 7 dias</Text>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <View style={styles.infoDetailsCard}>
                        <Text style={styles.infoDetailsCardWeekDay}>Seg.</Text>
                        <Sun02d width={40} height={40} />
                        <Text style={styles.infoDetailsCardPreview}>19°C</Text>
                    </View>

                    <View style={styles.infoDetailsCard}>
                        <Text style={styles.infoDetailsCardWeekDay}>Seg.</Text>
                        <Sun02d width={40} height={40} />
                        <Text style={styles.infoDetailsCardPreview}>19°C</Text>
                    </View>

                    <View style={styles.infoDetailsCard}>
                        <Text style={styles.infoDetailsCardWeekDay}>Seg.</Text>
                        <Sun02d width={40} height={40} />
                        <Text style={styles.infoDetailsCardPreview}>19°C</Text>
                    </View>

                    <View style={styles.infoDetailsCard}>
                        <Text style={styles.infoDetailsCardWeekDay}>Seg.</Text>
                        <Sun02d width={40} height={40} />
                        <Text style={styles.infoDetailsCardPreview}>19°C</Text>
                    </View>
                </ScrollView>
            </View>
        </LinearGradient>
    );
}
