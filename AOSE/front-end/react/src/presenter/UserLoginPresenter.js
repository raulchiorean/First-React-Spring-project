import user from "../model/user";

class UserLoginPresenter{
    // onLogin(){
    //
    //     const username = user.state.newUser.username;
    //     const password = user.state.newUser.password;
    //   user.login(username, password).then(response=>{
    //         console.log(response)
    //         if(response){
    //             // window.location.assign("/home");
    //         }
    //     });
    //
    // }
    async onLogin(){
        const username = user.state.newUser.username;
        const password = user.state.newUser.password;
        return await fetch( "/login",{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                'Accept': 'application/json'
            },
            body:JSON.stringify({
                "username": username,
                "password": password
            })
        }).then(response => response.json().then(loginCheck=>{
            if(loginCheck.loggedIn){
                window.localStorage.setItem('username',username);
                user.login(loginCheck)
                console.log(loginCheck.loggedIn)
                window.location.assign("/home");
            }
        }));
    }
    onChange(property, value){
        user.changeNewUserProperty(property,value);
    }
    // onLogout(){
    //     const response = user.logout(localStorage.getItem('username'));
    //     console.log(response)
    //     if(response){
    //         console.log(response)
    //         // window.location.assign("/");
    //     }
    // }
    async onLogout(){
        const username = localStorage.getItem('username')
        return await fetch("/logout/"+username, {
            method:"POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization':'Bearer '+ localStorage.getItem('login')
            }
        }).then(response =>response.json().then(loginCheck=>{
            if(!loginCheck.loggedIn){
                user.logout(loginCheck)
                window.location.assign("/");
            }
        }));
    }
    onGetUserProfile(username){
       user.setProfile(username);
    }
    onGoToUserProfile(username){
        this.onGetUserProfile(username);
        window.location.assign("/profile/"+username);
    }
    async onRegister(){
        const username = user.state.newUser.username;
        const password = user.state.newUser.password;
        return await fetch( "/register",{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                'Accept': 'application/json'
            },
            body:JSON.stringify({
                "username": username,
                "password": password
            })
        }).then(response => response.json().then(loginCheck=>{
            if(loginCheck.loggedIn){
                window.localStorage.setItem('username',username);
                user.login(loginCheck)
                console.log(loginCheck.loggedIn)
                window.location.assign("/home");
            }
        }));
    }
}

const userLoginPresenter = new UserLoginPresenter();

export default userLoginPresenter;