import { Switch } from "react-router-dom"
import { Route } from "react-router-dom";
import React from "react";
import StudyMusic from "./pages/StudyMusic";
import PartyMusic from "./pages/PartyMusic";
import Home from "./pages/Home"
import About from "./pages/About";
import SongCard from "./SongCard";


function App() {

    return (
        <div className="app">
            <Switch>
                <Route path="/studyMusic">
                    <StudyMusic genre={"Study"}/>
                </Route>
                <Route path="/partyMusic">
                    <PartyMusic genre={"Party"}/>
                </Route>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/songs/:id">
                    <SongCard />
                </Route>
            </Switch>
        </div>
    )
}

export default App;
