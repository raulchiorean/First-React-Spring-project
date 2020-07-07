import React, { Component } from "react";
import Home from "./Home";
import user from "../model/user";
import userLoginPresenter from "../presenter/UserLoginPresenter";
import LeftProfile from "./LeftProfile";



const mapModelStateToComponentState = modelState =>({
    profile: modelState.profile,
})
const username = localStorage.getItem('username');

export default class SmartLeftProfile extends Component{
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
            <LeftProfile
                profile={this.state.profile}
            />
        );
    }
}
