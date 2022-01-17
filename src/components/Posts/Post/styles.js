import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
    card: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        borderRadius: "15px",
        height: "100%",
        position: "relative",
    },
    media: {
        height: 0,
        paddingTop: "56.25%",
        backgroundColor: "rgba(0,0,0,0.5)",
        backgroundBlendMode: "darken",
    },
    overlay: {
        position: "absolute",
        top: "20px",
        left: "20px",
        color: "white",
    },
    overlay2: {
        position: "absolute",
        top: "20px",
        right: "20px",
        color: "white",
    },
    details: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        margin: "20px",
    },
    title: { textAlign: "left" },
    content: {},
    postMessage: {},
    cardActions: {
        padding: "0 16px 8px 16px",
        display: "flex",
        justifyContent: "space-between",
    },
    likeBtn: {},
    deleteBtn: {},
    iconBtn: {
        color: "white",
    },
}));
