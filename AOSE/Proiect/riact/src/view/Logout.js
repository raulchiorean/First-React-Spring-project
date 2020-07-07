import React,{ Component } from "react";
import user from "../model/user";
import userLoginPresenter from "../presenter/UserLoginPresenter";

const mapModelStateToComponentState = modelState => ({
    username : modelState.newUser.username,
    password : modelState.newUser.password
});

export default class Logout extends Component{
    constructor(props){
        super(props);
        this.state = mapModelStateToComponentState(user.state);
        this.listener = modelState => this.setState(mapModelStateToComponentState(modelState));
        user.addListener("change", this.listener);
        userLoginPresenter.onLogout();
    }

    componentWillUnmount(){
        user.removeListener("change",this.listener);
    }


    render(){
        return(
            <h4>BYEEE</h4>
        );
    }
}