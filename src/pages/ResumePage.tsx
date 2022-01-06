import React from 'react';
import {Box} from "@mui/material";



interface IResumePage {
    icon:any,
    label:string,
}
const ResumePage:React.FC<IResumePage> = ({icon,label}) => {
    return (
        <div>
            <a download={"Ryan_Moon_Resume.pdf"} href={require("../images/Resume.jpg")}>
                <img src={require("../images/Resume.jpg")} alt={"Ryan Moon Resume"}/>
            </a>
        </div>
    );
};

export default ResumePage;
