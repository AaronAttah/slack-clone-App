import { makeStyles } from "@material-ui/core";

export default makeStyles(() => ({
    // for header
    headerColor: {
        backgroundColor: "#350d36",

        "&$activeHeaderCont": {
            color: "white",
        },
    },
    activeHeaderCont: {
        backgroundColor: "#090c44",
    },
    // for sidebar
    sidebarColor: {
        backgroundColor: "#350d36",

        "&$activeSideCont": {
            color: "white",
        },
    },
    activeSideCont: {
        color: "white",
        backgroundColor: "#090c44",
    },
   

    
}));
