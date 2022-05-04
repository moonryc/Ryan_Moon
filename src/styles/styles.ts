export const pictureStyles = {
    listItemBarStyle:{
      // borderRadius: 5
    },
    pictureContainer: {
        position: "relative",
        textAlign: "center",
        '&:hover img': {
            transition: 'all 0.25s ease-in-out',
            filter: 'grayscale(80%) blur(2px)',
            backgroundColor: "gray",
        },
        '&:hover div': {
            transition: 'all 0.5s ease-in-out',
            filter: 'grayscale(80%)',
        },
        '&:hover span': {
            transition: 'all 0.25s ease-in-out',
            color: "white",
            backgroundColor: "gray",
            padding: 1,
            paddingRight: 3.5,
            paddingLeft: 3.5,
            borderRadius: 25
        }
    },
    pictureHoverText: {
        position: "absolute",
        color: "transparent",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
    }
} as const

export const picEffect = {
    position: "relative",
    overflow: "hidden",
    // width: "90%",
    // height: "90%",
    "&:hover img": {
        transition: "all 0.5s ease-in-out",
        filter: "blur(2px)",
    },
    "&:hover div": {
        transition: "all 0.5s ease-in-out",
        opacity: "0",
    },
} as const;


const imgTextEffect = {
    top: "0",
    color: "text.secondary",
    bgcolor: "background.pic",
    width: "100%",
    height: "100%",
    padding: "10px",
    position: "absolute",
    opacity: "0",
    transition: "all 0.5s ease-in-out",
    "&:hover": {
        backgroundOpacity: "0.5",
        opacity: "100",
    },
} as const;