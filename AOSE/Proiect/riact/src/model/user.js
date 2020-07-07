import { EventEmitter } from "events";
import RestClient from "../rest/RestClient";

const client = new RestClient();

class User extends EventEmitter{
    constructor() {
        super();
        this.state = {
            user:[],
            newUser:{
                username:"",
                password:"",
            },
            currentUser:{
                username:"",
                password:"",
            },
            loginCheck: {
                name:"",
                loggedIn:false
            },
            newloginCheck: {
                name:"",
                loggedIn:false
            },
            profile:{
                username:"",
                role:"",
                profilePicture:"",
                memes:[]
            },
            searchByName:[]
        };
    }
    addUser(username, password){
        this.state={
            ...this.state,
            users:this.state.user.concat([{
                username:username,
                password:password,
            }])
        };
        this.emit("change",this.state);
    }

    changeNewUserProperty(property,value){
        this.state = {
            ...this.state,
            newUser: {
                ...this.state.newUser,
                [property]: value
            }
        };
        this.emit("change",this.state);
    }
    changeLoggedInProperty(property,value){
        this.state = {
            ...this.state,
            loginCheck: {
                ...this.state.newloginCheck,
                [property]: value
            }
        };
        this.emit("change",this.state);
    }
    changeCurrentUserProperty(property,value){
        this.state = {
            ...this.state,
            currentUser: {
                ...this.state.currentUser,
                [property]: value
            }
        };
        this.emit("change",this.state);
    }
    changeLoginFlag(property,value){
        this.state={
            ...this.state,
            [property]: value
        };
        this.emit("change", this.state);
    }
    login(loginCheck){
            this.state = {
                ...this.state,
                loginCheck: loginCheck,
            };
            window.localStorage.setItem('login',loginCheck.name);
            window.localStorage.setItem('logged',loginCheck.loggedIn);
            console.log(loginCheck.loggedIn)
            this.emit("change", this.state);
    }
    logout(loginCheck){
            this.state= {
                ...this.state,
                loginCheck: loginCheck
            };
            window.localStorage.setItem('login',loginCheck.name);
            window.localStorage.setItem('logged',loginCheck.loggedIn);
            window.localStorage.setItem('username',"");
            console.log(loginCheck.loggedIn)
            this.emit("change", this.state);
    }
    setProfile(username){
        return  fetch("/user/"+username,{
            method:"GET",
            headers: {
                'Authorization':'Bearer '+ localStorage.getItem('login')
            }
        }).then(response =>response.json().then(profile=>{
            this.state={
                ...this.state,
                profile: profile
            };
            console.log(profile)
            this.emit("change", this.state);
        }))

    }
    getUser(username){
        return client.getUser(username).then(user =>{
            this.state = {
                ...this.state,
                searchByName: user
            };
            this.emit("change", this.state);
        })
    }
}
const user = new User();

export default user;