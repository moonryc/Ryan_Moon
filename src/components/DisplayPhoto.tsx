import React, {useCallback, useContext, useEffect, useRef, useState} from 'react';
import Box from "@mui/material/Box";
import {Grid, Modal, Typography} from "@mui/material";
import {ContextStore} from "../context/ContextStore";
import {IImageData} from "../pages/ProjectsGalleryPage";

const modalBox = {
    display: "flex",
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    minWidth: "70%",
    minHeight: "10%",
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    maxHeight: "80%",
    maxWidth: "80%",
    justifyContent: "center",
    overflow: "auto"
} as const

const pictureStyles = {
    pictureContainer: {
        position: "relative",
        textAlign: "center",
        '&:hover img': {
            transition: 'all 0.25s ease-in-out',
            filter:'grayscale(80%) blur(2px)',
            backgroundColor:"gray",
        },
        '&:hover div': {
            transition: 'all 0.5s ease-in-out',
            filter:'grayscale(80%)',
        },
        '&:hover span':{
            transition: 'all 0.25s ease-in-out',
            color:"white",
            backgroundColor: "gray",
            padding:1.5,
            borderRadius:15
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


interface IDisplayPhoto {
    selectedImage: IImageData,
    open: boolean,
    setOpen: (value: boolean) => void
}

const DisplayPhoto: React.FC<IDisplayPhoto> = ({selectedImage, setOpen, open}) => {

    const imageRef = useRef(null);
    const imageTextRef = useRef(null);




    const {setIsModalOpen} = useContext(ContextStore);

    const handleClose = () => {
        setOpen(false)
        setIsModalOpen(false)
    };

    return (
        <div>
            <Modal open={open} disableScrollLock={open} onClose={handleClose} aria-labelledby="modal-modal-title"
                   aria-describedby="modal-modal-description">
                <Box sx={modalBox}>
                    <Grid container justifyContent={"center"} spacing={5}>
                        <Grid item xs={12} zeroMinWidth>
                            <Typography variant="h4" component="h6"
                                        textAlign={"center"}>{selectedImage.title}</Typography><br/>
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={12} xl={8} style={{paddingTop: 0}} container
                              justifyContent={"center"} alignItems={"center"}>


                            <Box
                                component={"a"}
                                ref={imageRef}
                                href={selectedImage.link}
                                target={"_blank"}
                                sx={pictureStyles.pictureContainer}
                            >

                                <img
                                    src={selectedImage.img}
                                    height={"auto"}
                                    width={"100%"}
                                    style={{borderRadius:15,border:"solid",borderColor:"lightBlue",borderWidth:"5px"}}
                                    alt={""}/>
                                <Typography variant={"h6"} component={"span"} sx={{...pictureStyles.pictureHoverText}}
                                            >Click Here To View</Typography>

                            </Box>


                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={12} xl={4} container justifyContent={"center"}
                              display={"block"}>

                            <Typography
                                variant="h5"
                                component="h2"
                            >Description:</Typography>

                            <Typography
                                variant="h6"
                                component="h2"
                            >{selectedImage.description}</Typography>

                            <br/>
                            <Typography
                                variant="h6"
                                component="h2"
                            >Technologies:
                                <ul>
                                    {selectedImage.technologies.map(item => {
                                        return (<li key={item}>{item}</li>)
                                    })}
                                </ul>
                            </Typography>

                            <Typography
                                variant="h6"
                                component="a"
                                textAlign={"center"}
                                href={selectedImage.gitHubLink}
                                target={"_blank"}
                            >View the source code
                            </Typography>
                            <br/>


                        </Grid>
                    </Grid>
                </Box>
            </Modal>
        </div>
    );
};

export default DisplayPhoto;
