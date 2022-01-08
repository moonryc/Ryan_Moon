import React from 'react';
import './App.css';
import ProjectsGalleyPage from "./pages/ProjectsGalleryPage";
import {AlternateEmail, BorderAll, Face, Feed, Home} from "@mui/icons-material";
import HomePage from "./pages/HomePage";
import ResumePage from "./pages/ResumePage";
import ContactMePage from "./pages/ContactMePage";
import AboutMePage from "./pages/AboutMePage";
import Pagify from "./components/myPagify/Pagify/Pagify";
import ContextStoreContainer from "./context/ContextStore";

function App() {
    return (
        <main className="App">
            <ContextStoreContainer>
            <Pagify>
                <HomePage icon={<Home/>} label={"Home"}/>
                <AboutMePage icon={<Face/>} label={"About Me"}/>
                <ResumePage icon={<Feed/>} label={"Resume"}/>
                <ProjectsGalleyPage icon={<BorderAll/>} label={"Project Gallery"}/>
                <ContactMePage icon={<AlternateEmail/>} label={"Contact Me"}/>
            </Pagify>
            </ContextStoreContainer>
        </main>
    );
}

export default App;
