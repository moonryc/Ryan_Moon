import React from 'react';
import {Box, Button, Icon, Paper, Typography} from "@mui/material";
import {ReactComponent as EmailSvg} from "../images/iconmonstr-email-3.svg";
import {ReactComponent as GitSvg} from "../images/iconmonstr-github-3.svg";
import {ReactComponent as LinkedInSvg} from "../images/iconmonstr-linkedin-3.svg";
import {Article, Email, GitHub, LinkedIn} from "@mui/icons-material";


interface IContactMePage {
    icon: any,
    label: string
}

const ContactMePage: React.FC<IContactMePage> = ({icon, label}) => {
    return (
        <div>
            <Box style={{display: "flex", justifyContent: "center"}}>

                <Paper style={{maxWidth:'500px',minWidth: "auto", height:"auto",display:"flex",justifyContent:"center", textAlign:"center",flexDirection:"column", padding:'25px'}}>
                    <Typography variant="h4" gutterBottom component="div">CONTACT ME</Typography>

                    <Box style={{display: "flex", justifyContent: "center"}}>
                        <ul style={{listStyle: "none", textAlign: "justify"}}>
                            <li style={{display:"flex",alignItems:"center"}}>
                                <Email sx={{fontSize:40}}/>
                                <span>Email: <a href={"mailto:rycmoon@gmail.com"}>RycMoon@gmail.com</a></span>
                            </li>
                            <li style={{display:"flex",alignItems:"center"}}>
                                <GitHub sx={{fontSize:40}}/>
                                <span>Find me on <a href={"https://github.com/moonryc"}>Github</a></span>
                            </li>
                            <li style={{display:"flex",alignItems:"center"}}>
                                    <LinkedIn sx={{fontSize:40}}/>
                                <span>Find me on <a href={"https://www.linkedin.com/in/ryan-c-moon"}>Linkedin </a></span>
                            </li>
                            <li style={{display:"flex",alignItems:"center"}}>
                                <Article sx={{fontSize:40}}/>
                                <span>View my <a download={"Ryan_Moon_Resume.pdf"} href={require("../images/Ryan_Moon_Resume.pdf")}>Resume</a></span>
                            </li>
                        </ul>
                    </Box>
                </Paper>
            </Box>
        </div>
    );
};

export default ContactMePage;
