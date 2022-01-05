import React from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import {Masonry} from '@mui/lab';
import {Stack} from "@mui/material";

const Label = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    color: theme.palette.text.secondary,
    border: '1px solid black',
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const itemData = [
    {
        img: require('../images/moonmeds.jpg'),
        title: 'MoonMeds',
    },
    {
        img: require('../images/moonmeds_mobile.jpg'),
        title:"MoonMeds Mobile"
    },
    {
        img: require('../images/WeathApp.jpg'),
        title:"WeatherApp"
    },
    {
        img: require('../images/WeathApp_Mobile.jpg'),
        title:"WeatherApp Mobile"
    },
    {
        img: require('../images/dailyPlanner.jpg'),
        title:"Daily Planner"
    },
    {
        img: require('../images/quiz.jpg'),
        title:"Javascript quiz"
    },
    {
        img: require('../images/PasswordGen.jpg'),
        title:"Javascript quiz"
    }
];

interface IProjectsGalleryPage {
    icon:any,
    label:string,
}

const ProjectsGalleyPage:React.FC<IProjectsGalleryPage> = ({icon,label}) => {
    return (
        <Box
            // sx={{ width: 500, minHeight: 829 }}
        >
            <Masonry columns={3} spacing={1}>
                {itemData.map((item, index) => (
                    <Stack key={index}>
                        <Label>{item.title}</Label>
                        <img
                            src={item.img}
                            srcSet={item.img}
                            alt={item.title}
                            loading="lazy"
                            style={{ borderBottomLeftRadius: 4, borderBottomRightRadius: 4 }}
                        />
                    </Stack>
                ))}
            </Masonry>
        </Box>
    );
};

export default ProjectsGalleyPage;
