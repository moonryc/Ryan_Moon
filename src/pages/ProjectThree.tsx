import React, {useContext, useState} from 'react';
import {Face} from "@mui/icons-material";
import {Box, Stack, Typography} from "@mui/material";
import {pictureStyles} from "../styles/styles";
import {ContextStore} from "../context/ContextStore";
import {IImageData} from "./ProjectsGalleryPage";
import DisplayPhoto from "../components/DisplayPhoto";

const item = {
    img: process.env.PUBLIC_URL + '/img/Quick-techie.png',
    title: "Quick-Techie",
    height: "100%",
    width: "100%",
    link: "https://quick-techie.herokuapp.com/",
    description: "This is a Wordpress-like clone that allows users to make blog posts and comment on each other posts. Posts can be delted and comments can be removed by the author of each post. mySQL is used to made the database, express-session is used for cookie and session management, and bcrypt is used for user password encryption",
    technologies: ["Express", "mySQL", "Handlebars", "expression-session", "bcrypt", "Bulma"],
    gitHubLink: "https://github.com/moonryc/quick-techie"
}

interface props {
    [x: string]: any
}


const ProjectOne: React.FC<props> = () => {


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
                            borderRadius: 5,
                            width:'auto'
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

export default ProjectOne;
