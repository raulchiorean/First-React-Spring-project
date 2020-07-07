import { EventEmitter } from "events";
import RestClient from "../rest/RestClient";

const client = new RestClient();

class Meme extends EventEmitter{
    constructor() {
        super();
        this.state={
            memes:[],
            newMeme:{
                title:"",
                path:"",
                creator:"",
                date:"",
                name:"",
                file:null,
                profile:"",

            },
            searchedMemeByName:[],
            nameSearch:"",
        };
    }
    loadMemes(){
        return client.loadAllMemes().then(memes =>{
            this.state = {
                ...this.state,
                memes:memes,
            };
            this.emit("change", this.state);
        });
    }
    createMeme(name, creator, date, path, file, title){
        return client.uploadMemes(name, creator, date, path, file, title)
            .then(memes =>{
                this.state={
                    ...this.state,
                    memes:this.state.memes.concat([memes]),
                };
                this.emit("change",this.state);
            });
    }
    appendMemes(food) {
        this.state = {
            ...this.state,
            memes: this.state.memes.concat([food])
        };
        this.emit("change", this.state);
    }
    changeProperty(property,value){
        this.state={
            ...this.state,
            [property]: value
        };
        this.emit("change", this.state);
    }
    changeNewMemeProperty(property, value){
        this.state = {
            ...this.state,
            newMeme: {
                ...this.state.newMeme,
                [property]: value
            }
        };
        this.emit("change",this.state);
    }
}

const meme = new Meme();

export default meme;