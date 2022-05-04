import {
    Folder,
    FolderOutlined,
    Home,
    HomeOutlined,
    Info,
    InfoOutlined,
    IntegrationInstructions,
    IntegrationInstructionsOutlined,
    Mail,
    MailOutlined,
} from "@mui/icons-material";
import { Box, IconButton, Tooltip } from "@mui/material";
import { ElevatedPaper } from "./EvevatedPaper";

export const SectionedScrollBar = (props: any) => {
    const ScrollPartition = (props: any) => {
        if (props.id === props.page) {
            return (
                <Tooltip
                    sx={{ margin: "5px" }}
                    placement="left"
                    title={props.title}
                    arrow
                >
                    <IconButton style={{ color: "blue" }}>
                        <Home sx={{ display: props.id === 0 ? "block" : "none" }} />
                        <Info sx={{ display: props.id === 1 ? "block" : "none" }} />
                        <Folder sx={{ display: props.id === 2 ? "block" : "none" }} />
                        <Folder sx={{ display: props.id === 3 ? "block" : "none" }} />
                        <Folder sx={{ display: props.id === 4 ? "block" : "none" }} />
                        <Folder sx={{ display: props.id === 5 ? "block" : "none" }} />
                        <Mail sx={{ display: props.id === 6 ? "block" : "none" }} />
                    </IconButton>
                </Tooltip>
            );
        } else {
            return (
                <Tooltip
                    sx={{ margin: "5px" }}
                    placement="left"
                    title={props.title}
                    arrow
                >
                    <IconButton
                        style={{ color: "blue" }}
                        onClick={() => props.setPage(props.id)}
                    >
                        <HomeOutlined sx={{ display: props.id === 0 ? "block" : "none" }} />
                        <InfoOutlined sx={{ display: props.id === 1 ? "block" : "none" }} />
                        <FolderOutlined
                            sx={{ display: props.id === 2 ? "block" : "none" }}
                        />
                        <FolderOutlined
                            sx={{ display: props.id === 3 ? "block" : "none" }}
                        />
                        <FolderOutlined
                            sx={{ display: props.id === 4 ? "block" : "none" }}
                        />
                        <FolderOutlined
                            sx={{ display: props.id === 5 ? "block" : "none" }}
                        />
                        <MailOutlined sx={{ display: props.id === 6 ? "block" : "none" }} />
                    </IconButton>
                </Tooltip>
            );
        }
    };

    return (
        <Box
            sx={{
                width: "min-content",
                height: "max-content",
                position: "fixed",
                right: "10px",
                top: "50%",
                zIndex: "100",
                transform: "translateY(-50%)",
                display: ["none", "none", "block"],
            }}
        >
            <ElevatedPaper
                sx={{
                    height: "max-content",
                    pt: "20px",
                    pb: "20px",
                    borderRadius: "15px",
                    borderColor: "secondary.main",
                    borderStyle: "solid",
                }}
            >
                <ScrollPartition
                    id={0}
                    page={props.page}
                    setPage={props.setPage}
                    title="Home"
                />
                <ScrollPartition
                    id={1}
                    page={props.page}
                    setPage={props.setPage}
                    title="About Me"
                />
                <ScrollPartition
                    id={2}
                    page={props.page}
                    setPage={props.setPage}
                    title="Red Binder"
                />
                <ScrollPartition
                    id={3}
                    page={props.page}
                    setPage={props.setPage}
                    title="SaraBot"
                />
                <ScrollPartition
                    id={4}
                    page={props.page}
                    setPage={props.setPage}
                    title="Quick-Techie"
                />
                <ScrollPartition
                    id={5}
                    page={props.page}
                    setPage={props.setPage}
                    title="MoonMeds"
                />
                <ScrollPartition
                    id={6}
                    page={props.page}
                    setPage={props.setPage}
                    title="Contact Me"
                />
            </ElevatedPaper>
        </Box>
    );
};