import React from 'react';
import { View, Text } from 'react-native';
import Sun02d from '../assets/image/02d.svg';
import { styles } from '../styles/index';
import { WeatherCardProps } from '../@types/weatherTypes';

const WeatherCard: React.FC<WeatherCardProps> = ({ dayOfWeek, temperature }) => {
    return (
        <View style={styles.infoDetailsCard}>
            <Text style={styles.infoDetailsCardWeekDay}>{dayOfWeek}</Text>
            <Sun02d width={40} height={40} />
            <Text style={styles.infoDetailsCardPreview}>{temperature}°C</Text>
        </View>
    );
}

export default WeatherCard;

