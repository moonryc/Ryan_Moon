import React, {useContext, useState} from 'react';
import {Face} from "@mui/icons-material";
import {Box, Stack, Typography} from "@mui/material";
import {pictureStyles} from "../styles/styles";
import {ContextStore} from "../context/ContextStore";
import {IImageData} from "./ProjectsGalleryPage";
import DisplayPhoto from "../components/DisplayPhoto";

const item =         {
        img: process.env.PUBLIC_URL +'/img/Movie-night.png',
        title: 'MovieNight',
        height: "100%",
        width: "100%",
        link: "https://moonryc.github.io/MovieNight/",
        description: "This is an Website for searching and comparing multiples movies and movie scores. You can save movies for later and press the popular button get a random movie",
        technologies: ["HTML", "CSS", "Bulma", "JavaScript"],
        gitHubLink: "https://github.com/moonryc/MovieNight"
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


            <img
                src={item.img}
                srcSet={item.img}
                alt={item.title}
                loading={"eager"}
                style={{
                    maxHeight: "70vh",
                    width:'auto',
                    borderRadius: 5,
                }}
            />
            <Typography component={"span"} variant={"h6"}
                        sx={pictureStyles.pictureHoverText}>View</Typography>


        </Stack>
                <DisplayPhoto selectedImage={selectedImage} open={open} setOpen={setOpen}/>
            </Box>
        </Box>
    );
};

export default ProjectTwo;