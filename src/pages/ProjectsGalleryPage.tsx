import React, {useContext, useState} from 'react';
import Box from '@mui/material/Box';


import {Masonry} from '@mui/lab';
import {Stack, Typography} from "@mui/material";
import {ContextStore} from "../context/ContextStore";
import DisplayPhoto from "../components/DisplayPhoto";


export interface IImageData {
    img: string,
    title: string,
    height: number | string,
    width: number | string,
    link: string,
    description: string,
    technologies: string[],
    gitHubLink: string
}

const itemData: IImageData[] = [
    {
        img: require('../images/moonmeds.jpg'),
        title: 'MoonMeds',
        height: "100%",
        width: "100%",
        link: "https://moonmeds.herokuapp.com/",
        description: "This is a one page app written in React.JS and Express.Js to help users keep track of their medications.",
        technologies: ["React.JS", "Express.JS", "Passport.JS", "MongoDb", "Material UI", "Date-FNS"],
        gitHubLink: "https://github.com/moonryc/moonmeds"
    },
    {
        img: require('../images/wslManager.jpg'),
        title: "WSL Manager",
        height: "100%",
        width: "100%",
        link: "https://github.com/moonryc/WSLManager",
        description: "An Application to help manage WSL distros on Windows machines",
        technologies: ["C#", "WPF"],
        gitHubLink: "https://github.com/moonryc/WSLManager"
    },
    {
        img: require('../images/WeathApp.jpg'),
        title: "WeatherApp",
        height: "100%",
        width: "100%",
        link: "https://moonryc.github.io/WeatherApp/",
        description: "This is a single page application for viewing weather for a given city of the the course of the next 5 days. Previous searches are saved in local storage",
        technologies: ["Moment.JS", "BootStrap,JQuery"],
        gitHubLink: "https://github.com/moonryc/WeatherApp"
    },
    {
        img: require('../images/dailyPlanner.jpg'),
        title: "Daily Planner",
        height: "100%",
        width: "100%",
        link: "https://moonryc.github.io/challenge5/",
        description: "A Single page application that allows for scheduling daily tasks for the standard work day. The hours are updated based on the time, and all tasks are saved in local storage",
        technologies: ["BootStrap", "Iconic", "Moment.JS", "JQuery", "Local Storage"],
        gitHubLink: "https://github.com/moonryc/challenge5/"
    },
    {
        img: require('../images/quiz.jpg'),
        title: "Javascript quiz",
        height: "100%",
        width: "100%",
        link: "https://moonryc.github.io/challenge4/",
        description: "A short quiz written in pure JavaScript that quizzes the user on JavaScript. If the users answers incorrectly the remains time decreases as a penalty. Highscores are saved in local Storage",
        technologies: ["JavaScript"],
        gitHubLink: "https://github.com/moonryc/Challenge4"
    },
    {
        img: require('../images/PasswordGen.jpg'),
        title: "Password Generator",
        height: "100%",
        width: "100%",
        link: "https://moonryc.github.io/challenge3/",
        description: "Generates passwords based on user input. Options include uppercase/lowercase letters, numbers, and symbols",
        technologies: ["JavaScript"],
        gitHubLink: "https://github.com/moonryc/challenge3"
    },
];

interface IProjectsGalleryPage {
    icon: any,
    label: string,
}

const ProjectsGalleyPage: React.FC<IProjectsGalleryPage> = ({icon, label}) => {


    const {setIsModalOpen} = useContext(ContextStore);


    const [selectedImage, setSelectedImage] = useState<IImageData>({
        img: require('../images/PasswordGen.jpg'),
        title: "Password Generator",
        height: "100%",
        width: "100%",
        link: "https://moonryc.github.io/challenge3/",
        description: "PASSWORD",
        technologies: ["null"],
        gitHubLink: ""
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
                <Typography variant="h4" component="h6">My Projects</Typography>
                <Masonry columns={{xs: 1, sm: 1, md: 2, lg: 3, xl: 3}} spacing={5} style={{padding: 0, margin: 0}}>
                    {itemData.map((item, index) => (
                        <Stack key={index}
                               sx={{cursor: "pointer", border: "5px solid #84b6ca", borderRadius: "10px"}}
                               onClick={() => handleOpen(item)}
                        >
                            <img
                                src={item.img}
                                srcSet={item.img}
                                alt={item.title}
                                loading="lazy"
                                style={{
                                    borderBottomLeftRadius: 4,
                                    borderTopRightRadius: 4,
                                    borderTopLeftRadius: 4,
                                    borderBottomRightRadius: 4,
                                    height: "auto",
                                    width: item.width
                                }}
                            />
                        </Stack>
                    ))}
                </Masonry>
            </Box>

            <DisplayPhoto selectedImage={selectedImage} open={open} setOpen={setOpen}/>


        </Box>


    );
};

export default ProjectsGalleyPage;
