import React from 'react';
import {Box} from "@mui/material";

interface IAboutMePage {
    icon: any,
    label: string
}

const AboutMePage: React.FC<IAboutMePage> = ({icon, label}) => {
    return (
        <div>
            <h3> ABOUT ME</h3>
            <Box style={{display: "flex", justifyContent: "center"}}>
                <Box style={{width: "50%"}}>
                    Full-Stack React.JS/React Native developer with a degree in engineering passionate about providing a
                    stable and enjoyable user experience across all devices. I take advantage of my engineering
                    background
                    to write clean organized code that results in a stable build that creates an enjoyable and smooth
                    user
                    experience. I am passionate about taking on new programming challenges and collaborating with others
                    to
                    create an enjoyable user experience. I am excited to bring my skills to a fast-paced environment to
                    build better experiences for users across all platforms.
                </Box>
            </Box>
        </div>
    );
};

export default AboutMePage;
