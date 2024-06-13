import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, Text, View } from "react-native";

export function Home() {
    return (
        <LinearGradient colors={["#292A4E", "#715C77", "#C75C2E"]}
            style={styles.container}>
            <View style={styles.content}>
                <View style={styles.header}>
                    <View style={styles.headerLeft}>
                        <Text>São Paulo</Text>
                    </View>
                </View>
            </View>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    content : {

    },
    header : {

    },
    headerLeft : {

    }
})