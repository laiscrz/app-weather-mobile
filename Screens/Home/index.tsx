import { LinearGradient } from "expo-linear-gradient";
import { BellSimple, CaretDown, MapPin } from "phosphor-react-native";
import { Text, View, ScrollView } from "react-native";
import { styles } from '../../styles/index'

import WeatherCard from '../../components/WeatherCard';

import Sun from '../../assets/image/01d.svg';

export function Home() {
  return (
    <LinearGradient colors={["#8e91e5", "#6BA8FF"]}
      style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <MapPin color="#FFF" size={32} />
            <Text style={styles.headerLeftText}>São Paulo, SP</Text>
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
          <WeatherCard dayOfWeek="Seg." temperature={19} />
          <WeatherCard dayOfWeek="Ter." temperature={20} />
          <WeatherCard dayOfWeek="Qua." temperature={22} />
          <WeatherCard dayOfWeek="Qui." temperature={25} />
          <WeatherCard dayOfWeek="Sex." temperature={21} />
        </ScrollView>
      </View>
    </LinearGradient>
  );
}
