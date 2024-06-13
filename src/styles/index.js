import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: { paddingHorizontal: 40 },
    header: {
        width: "100%",
        marginTop: 44,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    headerLeft: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 10,
    },
    headerLeftText: {
        color: "#FFF",
        fontSize: 18,
        fontWeight: "600",
    },
    info: {
        paddingVertical: 70,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    infoImg: {
        width: 230,
        height: 230,
    },
    infoText: {
        fontSize: 100,
        fontWeight: "300",
        color: "#FFF",
    },
    infoTextMaxMin: {
        fontSize: 16,
        fontWeight: "600",
        color: "#FFF",
    },
    infoDetails: {
        gap: 15,
        paddingLeft: 40,
    },
    infoDetailsText: {
        color: "#FFF",
        fontSize: 22,
        fontWeight: "300",
    },
    infoDetailsCard: {
        marginRight: 20,
        width: 99,
        height: 129,
        backgroundColor: "rgba(255, 255, 255, 0.23)",
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
        gap: 4,
    },
    infoDetailsCardWeekDay: {
        fontSize: 16,
        fontWeight: "600",
    },
    infoDetailsCardPreview: {
        fontSize: 24,
        fontWeight: "300",
    },
})