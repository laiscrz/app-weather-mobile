import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    content : {
        paddingTop: 40,
        paddingHorizontal: 35,
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
    }
})