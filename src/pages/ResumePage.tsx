import React from 'react';
import {Box} from "@mui/material";



interface IResumePage {
    icon:any,
    label:string,
}
const ResumePage:React.FC<IResumePage> = ({icon,label}) => {
    return (
        <div>
            <br/>
            <img src={require("../images/Resume.jpg")} alt={"Ryan Moon Resume"}/>
        </div>
    );
};

export default ResumePage;
