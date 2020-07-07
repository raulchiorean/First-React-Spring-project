import React, {Component} from "react";
import "./App.css";
import {BrowserRouter as Router, Switch, Route} from  'react-router-dom'
import SmartHome from "./view/SmartHome";
import SmartMyProfile from "./view/SmartMyProfile";
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import SmartUserLogin from "./view/SmartUserLogin";
import NavBar from "./view/NavBar";
import Logout from "./view/Logout";
import About from "./view/About";



export default class App extends Component{
    constructor() {
        super();
    }


    render() {
        return(
            <div className="page-container">
                <Router>
                    <Switch>
                        <Route exact path="/" render={props => <SmartUserLogin />}/>
                        <Route exact path={"/home"} render={props => <SmartHome/>}/>
                        <Route exact path={"/about"} render={props => <About/>}/>
                        <Route exact path={"/logout"} render={props => <Logout/>}/>
                        <Route exact path={"/profile"} render={props => <SmartMyProfile/>}/>
                    </Switch>
                </Router>
            </div>
        );
    }
}

