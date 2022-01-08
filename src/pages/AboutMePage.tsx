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

    return (
        <div>
            <Box style={{display: "flex", justifyContent: "center"}}>
                <Box style={{width: isMdOrLarger ? "60%" : "90%"}}>
                    <Typography variant="h4" component="h2" align={"justify"} sx={{fontSize:isMdOrLarger?"2.125rem":"1.4rem"}}>
                        I am a <span style={{color: "red", fontWeight: "bold"}}>Full-Stack React.JS/Native </span>
                        developer with a B.S. degree in engineering who has a passion for providing
                        <span style={{color: "red", fontWeight: "bold"}}> Responsive</span>, Stable, and Enjoyable Web Designs
                        across all devices. I take advantage of my engineering
                        background to write clean, testable, reusable code and I am passionate about taking on new
                        challenges.
                    </Typography>
                    <br/>
                    <Typography variant="h4" component="h2" sx={{fontSize:isMdOrLarger?"2.125rem":"1.4rem"}}>
                        Let's <span style={{color: "red", fontWeight: "bold"}}>Build</span> a
                        <span style={{color: "red", fontWeight: "bold"}}> Better</span> user
                        experience <span style={{color: "red", fontWeight: "bold"}}>Together</span>.
                    </Typography>
                </Box>
            </Box>
        </div>
    );
};

export default AboutMePage;
