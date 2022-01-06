import React, {useDebugValue, useEffect} from 'react';
import {Box, Typography} from "@mui/material";
import {useTheme} from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';


interface IAboutMePage {
    icon: any,
    label: string
}

const AboutMePage: React.FC<IAboutMePage> = ({icon, label}) => {

    const theme = useTheme();
    const isMdOrLarger = useMediaQuery(theme.breakpoints.up('md'));

    useEffect(() => {

        console.log(isMdOrLarger)
    });


    return (
        <div>
            <Box style={{display: "flex", justifyContent: "center"}}>
                <Box style={{width: isMdOrLarger ? "45%" : "90%"}}>
                    <Typography variant="h4" component="h2" align={isMdOrLarger ? "justify" : "left"}>
                        I am a <span style={{color: "red", fontWeight: "bold"}}>Full-Stack React.JS/React Native </span>
                        developer with a degree in engineering who is passionate about creating
                        <span style={{color: "red", fontWeight: "bold"}}> Responsive Web Design</span> while providing
                        a stable and enjoyable user experience across all devices. I take advantage of my engineering
                        background to write clean, testable, reusable code and I am passionate about taking on new
                        challenges.
                    </Typography>
                    <br/>
                    <Typography variant="h4" component="h2">
                        Lets build a <span style={{color: "red", fontWeight: "bold"}}>Better</span> user
                        experience <span style={{color: "red", fontWeight: "bold"}}>Together</span>
                    </Typography>
                </Box>
            </Box>
        </div>
    );
};

export default AboutMePage;
