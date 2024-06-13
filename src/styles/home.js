import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    content : {
        paddingTop: 40,
        paddingHorizontal: 35,
        alignItems: "center"
    },
    header : {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    headerLeft : {
        flexDirection: "row",
        alignItems: "center",
        gap: 10
    },
    headerLeftText : {
        color: "#fff",
        fontSize: 18,
        fontWeight: 600
    },
    info : {
        paddingVertical: 70,
        alignItems: "center",
        gap: 10,
    },
    infoTextUser: {
        fontSize: 32,
        fontWeight: "300",
        color: "#fff"
    },
    infoTextClima : {
        fontSize: 100,
        fontWeight: "300",
        color: "#fff"
    },
    infoTextMaxMin : {
        fontSize: 16,
        fontWeight: "600",
        color: "#fff"
    },
})