import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import MainView from "./MainView";
import StoryDetails from "./StoryDetails";
import About from "./About";

function App() {
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route path="/" exact component={MainView} />
                <Route path="/story/:id" component={StoryDetails} />
                <Route path="/about" exact component={About} />
            </Switch>
        </Router>
    );
}

export default App;
