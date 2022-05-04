import {Paper} from "@mui/material";

const color = '#fff'

export const ElevatedPaper: React.FC<{[key: string]: any}> = ({children, ...props}) => {
    return <Paper style={{borderColor:'rgba(255,255,255,0)'}} elevation={10} {...props}>
        {children}
    </Paper>;
}