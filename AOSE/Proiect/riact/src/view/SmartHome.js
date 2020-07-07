import React, { Component } from "react";
import meme from "../model/meme";
import Home from "./Home";

import memePresenter from "../presenter/MemePresenter";
import user from "../model/user";
import userLoginPresenter from "../presenter/UserLoginPresenter";
import SmartLeftProfile from "./SmartLeftProfile";
import NavBar from "./NavBar";



const mapModelStateToComponentState = modelState =>({
    memes: modelState.memes,
})
const username = localStorage.getItem('username');
export default class SmartHome extends Component{
    constructor() {
        super();
        this.state = mapModelStateToComponentState(meme.state);
        this.listener = modelState => this.setState(mapModelStateToComponentState(modelState));
        meme.addListener("change",this.listener);
        memePresenter.onInit();
    }
    componentWillUnmount() {
        meme.removeListener("change",this.listener);
    }


    render() {
        return (
            <div>
                <NavBar/>
                <div className="row">
                    <SmartLeftProfile/>
                    <Home
                        memes={this.state.memes}
                        onCreate={memePresenter.onAddMeme}
                        onChange={memePresenter.onChange}
                    />
                </div>
            </div>
        );

    }
}
