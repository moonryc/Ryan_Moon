import React from 'react';
import './App.css';
import ProjectsGalleyPage from "./pages/ProjectsGalleryPage";
import {AlternateEmail, BorderAll, Face, Feed, Home,Folder} from "@mui/icons-material";
import HomePage from "./pages/HomePage";

import ContactMePage from "./pages/ContactMePage";
import AboutMePage from "./pages/AboutMePage";
import Pagify from "./components/myPagify/Pagify/Pagify";
import ContextStoreContainer from "./context/ContextStore";
import ProjectOne from "./pages/ProjectOne";
import ProjectTwo from "./pages/ProjectTwo";
import ProjectThree from "./pages/ProjectThree";
import ProjectFour from "./pages/ProjectFour";

function App() {
    return (
        <main className="App">
            <ContextStoreContainer>
            <Pagify>
                <HomePage icon={<Home/>} label={"Home"}/>
                <AboutMePage icon={<Face/>} label={"About Me"}/>
                <ProjectOne icon={<Folder/>} label={"Red Binder"}/>
                <ProjectTwo icon={<Folder/>} label={"MovieNight"}/>
                <ProjectThree icon={<Folder/>} label={"Quick-Techie"}/>
                <ProjectFour icon={<Folder/>} label={"MoonMeds"}/>
                <ContactMePage icon={<AlternateEmail/>} label={"Contact Me"}/>
            </Pagify>
            </ContextStoreContainer>
        </main>
    );
}

export default App;
