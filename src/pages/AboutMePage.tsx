import React from 'react';
import {Box, Typography} from "@mui/material";

interface IAboutMePage {
    icon: any,
    label: string
}

const AboutMePage: React.FC<IAboutMePage> = ({icon, label}) => {
    return (
        <div>
            <Box style={{display: "flex", justifyContent: "center"}}>
                <Box style={{width: "45%"}}>
                    <Typography variant="h4" component="h2" align={"justify"}>
                        I am a <span style={{color: "red", fontWeight:"bold"}}>Full-Stack React.JS/React Native </span> developer with a degree in
                        engineering who is passionate about
                        providing a
                        stable and enjoyable user experience across all devices. I take advantage of my engineering
                        background to write clean organized code, and I am passionate about taking on new challenges.
                    </Typography>
                    <br/>
                    <Typography variant="h4" component="h2">
                        Lets build a <span style={{color: "red", fontWeight:"bold"}}>better</span> user experience <span style={{color: "red", fontWeight:"bold"}}>together</span>
                    </Typography>
                </Box>
            </Box>
        </div>
    );
};

export default AboutMePage;
