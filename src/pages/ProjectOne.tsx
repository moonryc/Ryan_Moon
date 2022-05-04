import React, {useContext, useState} from 'react';
import {Face} from "@mui/icons-material";
import {Box, ImageListItem, ImageListItemBar, Stack, Typography} from "@mui/material";
import {pictureStyles, picEffect} from "../styles/styles";
import {ContextStore} from "../context/ContextStore";
import {IImageData} from "./ProjectsGalleryPage";
import DisplayPhoto from "../components/DisplayPhoto";

const item = {
    img: process.env.PUBLIC_URL + '/img/RedBinder.png',
    title: "Red Binder",
    maxHeight: "70vh",
    width: "auto",
    link: "https://github.com/moonryc/red-binder",
    description: "An iOS/Android application design to manage medications for multiple people in a household.",
    technologies: ['React Native', 'expo', 'apollo-server-express', 'bcrypt', 'mongoose', 'express', 'graphql', 'date-fns', 'lodash', '@react-native-community/datetimepicker', 'react-navigation ( various react navigation packages)'],
    gitHubLink: "https://github.com/moonryc/red-binder"
}

interface props {
    [x: string]: any
}


const ProjectOne: React.FC<props> = () => {

    const {setIsModalOpen} = useContext(ContextStore);


    const [selectedImage, setSelectedImage] = useState<IImageData>({
        img: process.env.PUBLIC_URL + '/img/wslManager.jpg',
        title: " ",
        height:'auto',
        width: "auto",
        maxHeight:'70vh',
        link: " ",
        description: " ",
        technologies: ["null"],
        gitHubLink: " "
    });
    const [open, setOpen] = useState(false);

    const handleOpen = (singleImageData: IImageData) => {

        setSelectedImage(singleImageData)
        setOpen(true)
        setIsModalOpen(true)
    }

    return (
        <Box sx={{display: "flex", justifyContent: "center"}}>
            <Box sx={{maxWidth: "80%", minHeight: 393, paddingTop: 5}}>
                <Typography variant="h4" component="h6" sx={{marginBottom: "5vh"}}>{item.title}</Typography>
                <Stack
                    sx={{
                        cursor: "pointer",
                        border: "5px solid #84b6ca",
                        borderRadius: "10px", ...pictureStyles.pictureContainer
                    }}
                    onClick={() => handleOpen(item)}
                >

                    <ImageListItem sx={{...picEffect}}>
                    <img
                        src={item.img}
                        srcSet={item.img}
                        alt={item.title}
                        loading={"eager"}
                        style={{
                            height: "70vh",
                            borderRadius: 5,
                            width: item.width
                        }}
                    />
                        <ImageListItemBar title={item.gitHubLink} sx={pictureStyles.listItemBarStyle}/>
                    <Typography component={"span"} variant={"h6"}
                                sx={pictureStyles.pictureHoverText}>View</Typography>
                    </ImageListItem>

                </Stack>
                <DisplayPhoto selectedImage={selectedImage} open={open} setOpen={setOpen}/>
            </Box>
        </Box>
    );
};

export default ProjectOne;
