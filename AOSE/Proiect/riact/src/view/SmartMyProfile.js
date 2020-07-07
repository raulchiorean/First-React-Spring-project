import React, { Component } from "react";
import meme from "../model/meme";
import MyProfile from "./MyProfile";
import user from "../model/user";
import userLoginPresenter from "../presenter/UserLoginPresenter";
import SmartLeftProfile from "./SmartLeftProfile";
import NavBar from "./NavBar";


const mapModelStateToComponentState = modelState =>({
    profile: modelState.profile,
})
const username = localStorage.getItem('username');
export default class SmartMyProfile extends Component{
    constructor() {
        super();
        this.state = mapModelStateToComponentState(user.state);
        this.listener = modelState => this.setState(mapModelStateToComponentState(modelState));
        user.addListener("change",this.listener);
        userLoginPresenter.onGetUserProfile(username);

    }
    componentWillUnmount() {
        user.removeListener("change",this.listener);

    }
    render() {
        return (
            <div>
                <NavBar/>
                <div className="row">
                    <SmartLeftProfile/>
                    <MyProfile
                        profile={this.state.profile}/>
                </div>
            </div>
        );
    }
}