import React from "react";

const UploadMeme = ({memes,file,onUpload, onChange}) =>(

    <div className="App">
        <input placeholder="title" value={memes.title}
               onChange={ e => onChange("title", e.target.value)}/>
        <input placeholder="creator" value={memes.creator}
               onChange={ e => onChange("creator", e.target.value)}/>
        <input type="file" value={file}
               onChange={ e => onChange("image", e.target.value)}/>
        <input type="text" name="name" value={memes.name}
               onChange={ e => onChange("name", e.target.value)}/><br/><br/>
        <button onClick={onUpload}>Upload</button>
    </div>
);
export default UploadMeme;