import React from 'react';
import './App.css';
import ProjectsGalleyPage from "./pages/ProjectsGalleryPage";
import {AlternateEmail, BorderAll, Face, Feed, Home} from "@mui/icons-material";
import HomePage from "./pages/HomePage";

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
                <ProjectsGalleyPage icon={<BorderAll/>} label={"Portfolio"}/>
                <ContactMePage icon={<AlternateEmail/>} label={"Contact Me"}/>
            </Pagify>
            </ContextStoreContainer>
        </main>
    );
}

export default App;
