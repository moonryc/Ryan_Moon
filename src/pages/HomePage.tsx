import React, {useEffect, useRef, useState} from 'react';
import {Box, Grid, Paper, Typography} from "@mui/material";
import {ReactComponent as CssSvg} from "../images/css3-original.svg";
import {ReactComponent as ExpressSvg} from "../images/express-original.svg";
import {ReactComponent as JavascriptSvg} from "../images/javascript-original.svg";
import {ReactComponent as TypescriptSvg} from "../images/typescript-original.svg";
import {ReactComponent as ReactSvg} from "../images/react-original.svg";
import {ReactComponent as PythonSvg} from "../images/python-original.svg";
import {ReactComponent as NodeSvg} from "../images/nodejs-original.svg";
import {ReactComponent as MongoSvg} from "../images/mongodb-original.svg";
import {Rating} from "@mui/lab";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';


interface IHomePage {
    icon: any,
    label: string,
}


const technologyIcons = [
    {icon: <ReactSvg/>, rating: 5, title:"React"},
    {icon: <JavascriptSvg/>, rating: 5, title:"JavaScript"},
    {icon: <CssSvg/>, rating: 4.5, title:"CSS"},
    {icon: <TypescriptSvg/>, rating: 3.5, title:"TypeScript"},
    {icon: <ExpressSvg/>, rating: 5, title:"Express"},
    {icon: <PythonSvg/>, rating: 3.5, title:"Python"},
    {icon: <NodeSvg/>, rating: 5, title:"Node"},
    {icon: <MongoSvg/>, rating: 4.5, title:"MongoDb"}]


const HomePage: React.FC<IHomePage> = ({icon, label}) => {

    const [heightOfNavbar, setHeightOfNavbar] = useState<number>(0);
    const [header, setHeader] = useState(0);

    const theme = useTheme();
    const isMdOrHigher = useMediaQuery(theme.breakpoints.up('md'));

    useEffect(() => {
        // @ts-ignore
        const height = window.document.querySelector(".bottom-navigation").clientHeight
        // @ts-ignore
        const headerTitle = window.document.querySelector("#header").clientHeight

        if(headerTitle !== null){
            setHeader(headerTitle)
        }

        if (height !== null) {
            setHeightOfNavbar(height)

        }

    });



    return (
        <div>

            <div id={"header"}>
                <Typography variant="h2" component="h2">Ryan Moon</Typography>
                <Typography variant="h3" component="h2">Your All in One Fullstack Developer</Typography>
            </div>

            <Grid container>


                {/*Image of me*/}
                <Grid item xs={12} sm={12} md={6} lg={4} >
                <Grid container={isMdOrHigher} style={ isMdOrHigher ? {
                    flexDirection:  "column-reverse",
                    height:`calc(100vh - ${heightOfNavbar}px - ${header}px)`
                }:{}}>
                    <img src={require('../images/me.png')} alt={""}
                         style={{maxHeight: `calc(100vh - ${heightOfNavbar}px - ${header}px)`,width:"100%", height:"auto",maxWidth: `calc((100vh - ${heightOfNavbar}px - ${header}px) * 0.79824256738)`}}/>
                </Grid>
                </Grid>

                {/*My everyday stack*/}
                <Grid item xs={12} sm={12} md={6} lg={7} style={{justifyContent: "center", textAlign: "center", alignItems: "center"}} container>


                    {technologyIcons.map((item) => {
                        return (

                            <Grid item xs={6} sm={5} md={4} lg={3} key={item.title} container style={{
                                paddingLeft:"2.5vw",
                                paddingRight:"2.5vw",
                                textAlign: "center",
                                justifyContent:"center",
                                alignItems:"center"
                            }}>
                                <Grid item xs={12}>
                                    {item.icon}
                                </Grid>

                                <Grid item xs={12}>
                                <Typography variant="h6" component="h2">{item.title}</Typography><br/>
                                </Grid>
                                <Grid item xs={12}>
                                <Rating name="read-only" precision={0.5} value={item.rating} readOnly/>
                                </Grid>
                            </Grid>
                        )
                    })}
                </Grid>
            </Grid>
        </div>
    );
};

export default HomePage;
