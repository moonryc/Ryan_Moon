import React, {useState, Suspense} from 'react';
import Box from '@mui/material/Box';
import {styled} from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import {Masonry} from '@mui/lab';
import {Button, Grid, Modal, Stack, Typography} from "@mui/material";


const Label = styled(Paper)(({theme}) => ({
    ...theme.typography.body2,
    color: theme.palette.text.secondary,
    border: '1px solid black',
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));


interface IImageData {
    img: string,
    title: string,
    height: number | string,
    width: number | string,
    link: string,
    description: string,
    technologies: string
}

const itemData: IImageData[] = [
    {
        img: require('../images/moonmeds.jpg'),
        title: 'MoonMeds',
        height: "100%",
        width: "100%",
        link: "https://moonmeds.herokuapp.com/",
        description: "This is a one page app written in React.JS and Express.Js to help users keep track of their medications.",
        technologies: "React.JS, Express.JS, Passport.JS, MongoDb, Material UI, Date-FNS"
    },
    {
        img: require('../images/wslManager.jpg'),
        title: "WSL Manager",
        height: "100%",
        width: "100%",
        link: "https://github.com/moonryc/WSLManager",
        description: "An Application to help manage WSL distros on Windows machines",
        technologies: "C#, WPF"
    },
    {
        img: require('../images/WeathApp.jpg'),
        title: "WeatherApp",
        height: "100%",
        width: "100%",
        link: "https://moonryc.github.io/WeatherApp/",
        description: "This is a single page application for viewing weather for a given city of the the course of the next 5 days. Previous searches are saved in local storage",
        technologies: "Moment.JS, BootStrap,JQuery"
    },
    {
        img: require('../images/dailyPlanner.jpg'),
        title: "Daily Planner",
        height: "100%",
        width: "100%",
        link: "https://moonryc.github.io/challenge5/",
        description: "A Single page application that allows for scheduling daily tasks for the standard work day. The hours are updated based on the time, and all tasks are saved in local storage",
        technologies: "BootStrap, Iconic, Moment.JS, JQuery, Local Storage"
    },
    {
        img: require('../images/quiz.jpg'),
        title: "Javascript quiz",
        height: "100%",
        width: "100%",
        link: "https://moonryc.github.io/challenge4/",
        description: "A short quiz written in pure JavaScript that quizzes the user on JavaScript. If the users answers incorrectly the remains time decreases as a penalty. Highscores are saved in local Storage",
        technologies: "JavaScript"
    },
    {
        img: require('../images/PasswordGen.jpg'),
        title: "Password Generator",
        height: "100%",
        width: "100%",
        link: "https://moonryc.github.io/challenge3/",
        description: "Generates passwords based on user input. Options include uppercase/lowercase letters, numbers, and symbols",
        technologies: "JavaScript"
    },
];

interface IProjectsGalleryPage {
    icon: any,
    label: string,
}

const ProjectsGalleyPage: React.FC<IProjectsGalleryPage> = ({icon, label}) => {

    const [open, setOpen] = React.useState(false);
    const [selectedImage, setSelectedImage] = useState<IImageData>({
        img: require('../images/PasswordGen.jpg'),
        title: "Password Generator",
        height: "100%",
        width: "100%",
        link: "https://moonryc.github.io/challenge3/",
        description: "PASSWORD",
        technologies: "null"
    });
    const handleClose = () => setOpen(false);


    const selectImage = (singleImageData: IImageData) => {
        setSelectedImage(singleImageData)
        setOpen(true);
    }



    return (

        <Suspense fallback={<div>Loading...</div>}>
        <>
            <Box sx={{display: "flex", justifyContent: "center"}}>
                <Box sx={{maxWidth: "80%", minHeight: 393, paddingTop: 5}}>
                    <Typography variant="h4" component="h6">My Projects</Typography>
                    <Masonry columns={{xs: 1, sm: 1, md: 2, lg: 3, xl: 3}} spacing={5} style={{padding: 0, margin: 0}}>
                        {itemData.map((item, index) => (
                            <Stack key={index}
                                   sx={{cursor: "pointer", border:"5px solid black", borderRadius:"10px"}}
                                   onClick={() => selectImage(item)}
                            >
                                <img
                                    src={item.img}
                                    srcSet={item.img}
                                    alt={item.title}
                                    loading="lazy"
                                    style={{
                                        borderBottomLeftRadius: 4,
                                        borderBottomRightRadius: 4,
                                        height: item.height,
                                        width: item.width
                                    }}
                                />
                            </Stack>
                        ))}
                    </Masonry>
                </Box>

                <Modal
                    open={open}
                    disableScrollLock={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={{
                        display: "flex",
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        minWidth: 275,
                        // maxWidth:275,
                        bgcolor: 'background.paper',
                        border: '2px solid #000',
                        boxShadow: 24,
                        p: 4,
                        maxHeight: "80%",
                        maxWidth: "80%",
                        justifyContent: "center",
                        overflow: "auto"
                    }}>
                        <Grid container justifyContent={"center"} spacing={5}>
                            <Grid item xs={12} >
                                <Typography variant="h4" component="h6" textAlign={"center"}>{selectedImage.title}</Typography><br/>
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={8} xl={8} style={{}} container
                                  justifyContent={"center"}>
                                <a href={selectedImage.link}>
                                    <img
                                        src={selectedImage.img}
                                        height={selectedImage.height}
                                        width={selectedImage.width}
                                        alt={""}/>
                                </a>
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={4} xl={4} container justifyContent={"center"}
                                  display={"block"} style={{}}>

                                <Typography
                                    variant="h6"
                                    component="h2"
                                >{selectedImage.description}</Typography>

                                <Typography
                                    variant="h6"
                                    component="h2"
                                >Technologies: {selectedImage.technologies}</Typography>


                            </Grid>
                        </Grid>
                    </Box>
                </Modal>


            </Box>
        </>
            </Suspense>

    );
};

export default ProjectsGalleyPage;
