import React, {useContext, useState} from 'react';
import Box from '@mui/material/Box';
import {Masonry} from '@mui/lab';
import {Grid, Stack, Typography} from "@mui/material";
import {ContextStore} from "../context/ContextStore";
import DisplayPhoto from "../components/DisplayPhoto";

const pictureStyles = {
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


export interface IImageData {
    img: string,
    title: string,
    maxHeight?:number|string,
    height?: number | string,
    width: number | string,
    link: string,
    description: string,
    technologies: string[],
    gitHubLink: string
}

const itemData: IImageData[] = [
    {
        img: process.env.PUBLIC_URL + '/img/Quick-techie.png',
        title: "Quick-Techie",
        height: "100%",
        width: "100%",
        link: "https://quick-techie.herokuapp.com/",
        description: "This is a Wordpress-like clone that allows users to make blog posts and comment on each other posts. Posts can be delted and comments can be removed by the author of each post. mySQL is used to made the database, express-session is used for cookie and session management, and bcrypt is used for user password encryption",
        technologies: ["Express", "mySQL", "Handlebars", "expression-session", "bcrypt", "Bulma"],
        gitHubLink: "https://github.com/moonryc/quick-techie"
    },
    {
        img: process.env.PUBLIC_URL +'/img/Movie-night.png',
        title: 'MovieNight',
        height: "100%",
        width: "100%",
        link: "https://moonryc.github.io/MovieNight/",
        description: "This is an Website for searching and comparing multiples movies and movie scores. You can save movies for later and press the popular button get a random movie",
        technologies: ["HTML", "CSS", "Bulma", "JavaScript"],
        gitHubLink: "https://github.com/moonryc/MovieNight"
    },
    {
        img: process.env.PUBLIC_URL + '/img/moonmeds.png',
        title: 'MoonMeds',
        height: "100%",
        width: "100%",
        link: "https://moonmeds.herokuapp.com/",
        description: "This is a one page app written in React.JS and Express.Js to help users keep track of their medications.",
        technologies: ["React.JS", "Express.JS", "Passport.JS", "MongoDb", "Material UI", "Date-FNS"],
        gitHubLink: "https://github.com/moonryc/moonmeds"
    },
    {
        img: process.env.PUBLIC_URL + '/img/RedBinder.png',
        title: "WSL Manager",
        height: "100%",
        width: "100%",
        link: "https://github.com/moonryc/WSLManager",
        description: "An Application to help manage WSL distros on Windows machines",
        technologies: ["C#", "WPF"],
        gitHubLink: "https://github.com/moonryc/WSLManager"
    }
];

interface IProjectsGalleryPage {
    icon: any,
    label: string,
}

const ProjectsGalleyPage: React.FC<IProjectsGalleryPage> = ({icon, label}) => {


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
        <div>
            <Box sx={{display: "flex", justifyContent: "center"}}>
                <Box sx={{maxWidth: "80%", minHeight: 393, paddingTop: 5}}>
                    <Typography variant="h4" component="h6" sx={{marginBottom: "5vh"}}>My Projects</Typography>




                    <Masonry columns={{xs: 1, sm: 1, md: 2, lg: 2, xl: 2}} spacing={5} style={{padding: 0, margin: 0}}>
                        {itemData.map((item, index) => (
                            <Stack key={index}
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
                                        height: "auto",
                                        borderRadius: 5,
                                        width: item.width
                                    }}
                                />
                                <Typography component={"span"} variant={"h6"}
                                            sx={pictureStyles.pictureHoverText}>View</Typography>


                            </Stack>
                        ))}
                    </Masonry>
                </Box>

                <DisplayPhoto selectedImage={selectedImage} open={open} setOpen={setOpen}/>


            </Box>

        </div>
    );
};

export default ProjectsGalleyPage;
