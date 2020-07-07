import React, {Component} from "react";
import meme from "../model/meme";
import memePresenter from "../presenter/MemePresenter";
import NavBar from "./NavBar";
import SmartLeftProfile from "./SmartLeftProfile";
import Home from "./Home";

export default class About extends Component{
    constructor() {
        super();
    }
    render() {
        return (
            <div>
                <NavBar/>
                <div className="post-container-details">
                    <br/>
                    <h3>This meme page was made by Chiorean Raul</h3>
                    <h4>Work in progress</h4>
                </div>
            </div>
        );

    }
}
