import React, {useContext, useState} from 'react';
import {Face} from "@mui/icons-material";
import {Box, ImageListItem, ImageListItemBar, Stack, Typography} from "@mui/material";
import {picEffect, pictureStyles} from "../styles/styles";
import {ContextStore} from "../context/ContextStore";
import {IImageData} from "./ProjectsGalleryPage";
import DisplayPhoto from "../components/DisplayPhoto";

const item =         {
        img: process.env.PUBLIC_URL +'/img/SaraBot.png',
        title: 'SaraBot',
        height: "100%",
        width: "100%",
        link: "https://ryanmoon.xyz/sarabot",
        description: "SaraBot is an AI Tutor that can help assist your education it is programmed to answer questions regarding CSS, JavaScript, and HTML.",
        technologies: ["React", "Material-UI", "TypeScript", "AI21 studio"],
        gitHubLink: "https://github.com/ChisatoSozo/ai-code-helper"
    }

interface props {
    [x:string]:any
}


const ProjectTwo:React.FC<props> = () => {
    const {setIsModalOpen} = useContext(ContextStore);


    const [selectedImage, setSelectedImage] = useState<IImageData>({
        img: process.env.PUBLIC_URL + '/img/wslManager.jpg',
        title: " ",
        height: "100%",
        width: "100%",
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
                alt={item.title}
                style={{
                    height: "auto",
                    maxHeight: "70vh",
                    width:'100%',
                    borderRadius: 5,
                }}
            />
                <ImageListItemBar title={item.link} sx={pictureStyles.listItemBarStyle}/>
            <Typography component={"span"} variant={"h6"}
                        sx={pictureStyles.pictureHoverText}>View</Typography>
            </ImageListItem>

        </Stack>
                <DisplayPhoto selectedImage={selectedImage} open={open} setOpen={setOpen}/>
            </Box>
        </Box>
    );
};

export default ProjectTwo;
