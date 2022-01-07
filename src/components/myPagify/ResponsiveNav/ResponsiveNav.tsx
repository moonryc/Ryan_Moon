import React from 'react';

import './ResponsiveNav.css';
import {Grid} from "@mui/material";

const ResponsiveNav = (props:any) => {
    return (
        <div className="bottom-navigation">
            <Grid container spacing={0} className="justify-center" style={{justifyContent:"space-evenly"}}>
                {props.children.map((child:any) => (
                    <Grid key={child.key} item xs={4} sm={1}>
                        {child}
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default ResponsiveNav;
