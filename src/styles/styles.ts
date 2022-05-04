export const pictureStyles = {
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