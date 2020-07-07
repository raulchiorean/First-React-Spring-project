import React, { Component } from "react";
import meme from "../model/meme";
import UploadMeme from "./UploadMeme";
import memePresenter from "../presenter/MemePresenter";



const mapModelStateToComponentState = modelState =>({
    memes: modelState.memes,
    file: modelState.file,

})
export default class SmartUploadMeme extends Component{
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
            <UploadMeme
                memes={this.state.memes}
                file={this.state.memes.file}

                onUpload={memePresenter.onAddMeme()}
                onChange={memePresenter.onChange}

            />
        );
    }
}