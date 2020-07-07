
const data = new FormData();
export default class RestClient {
    loadAllMemes(){

        let key = Object.keys(localStorage)
        let token = localStorage.getItem(key[0])
        return fetch("/memes", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Authorization':'Bearer '+ localStorage.getItem('login')
            },

        }).then(response => response.json());
    }
     uploadMemes(name, creator, date, path, file, title){
        data.append("title",title)
        data.append("creator",localStorage.getItem('username'))
        data.append("image", file)
        data.append("name",file.name)
        console.log(data.get("image").name);


        return  fetch("/memes",{
            method: "POST",
            headers: {

                'Authorization':'Bearer '+ localStorage.getItem('login')
            },
            body:data
        }).then(response => response.json());
    }

    getUser(username){
        return fetch("/user", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Authorization':'Bearer '+ localStorage.getItem('login')
            },
            body:JSON.stringify(username)

        }).then(response =>response.json());
    }
    // async logout(username){
    //     return await fetch("/logout/"+username, {
    //         method:"POST",
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'Authorization':'Bearer '+ localStorage.getItem('login')
    //         }
    //     }).then(response =>response.json());
    // }
}