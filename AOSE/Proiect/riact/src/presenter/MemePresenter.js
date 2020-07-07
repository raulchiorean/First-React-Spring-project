import meme from "../model/meme";

class MemePresenter {

    onViewAll(){
        window.location.assign("/home");
    }
    onInit(){
        meme.loadMemes();
    }
    onCreateMeme(){
        window.location.assign("/home");
    }
    onAddMeme(){
        let name = meme.state.newMeme.name;
        let creator = meme.state.newMeme.creator;
        let date = meme.state.newMeme.date;
        let path = meme.state.newMeme.path;
        let file = meme.state.newMeme.file
        let title = meme.state.newMeme.title;

        meme.createMeme(name, creator, date, path, file, title).then(()=>{
            meme.changeNewMemeProperty("name","");
            meme.changeNewMemeProperty("creator","");
            meme.changeNewMemeProperty("date","");
            meme.changeNewMemeProperty("path","");
            meme.changeNewMemeProperty("file","");
            meme.changeNewMemeProperty("title","");
            window.location.assign("/home");
        });
    }
    onSearchByName(){
        var name = meme.state.nameSearch;
        meme.searchByName(name);
        window.location.assign('/home/'+name);
    }
    onChange(property, value){
        meme.changeNewMemeProperty(property,value);
    }

    onChangeSearch(property,value){
        meme.changeProperty(property,value);
    }

    onBack(){
        window.location.assign('/home');
    }

}
const memePresenter = new MemePresenter();
export default memePresenter;