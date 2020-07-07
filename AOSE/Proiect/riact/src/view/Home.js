import React from "react";
import UploadMeme from "./UploadMeme";

const Home = ({memes,onCreate, onChange}) =>(
        <div className="middle">
            <div className="post-row">
                <div className="post-col">
                    <div className="post-card">
                        <div className="post-container">
                            <h6 >Post meme, feel better :)</h6>
                            <p className="post-title">Title: Funny Cat</p>
                            <input type="text" placeholder="title" value={memes.title}
                                   onChange={ e => onChange("title", e.target.value)}/>
                            <input type="file" value={memes.file}
                                   onChange={ e => onChange("file", e.target.files.item(0))}/>
                            <button onClick={onCreate}>Upload</button>
                        </div>
                    </div>
                </div>
            </div>
                {
                    memes.map((meme, index) =>(
                        <div className="post-container-details">
                            <br/>
                            <img id="post-profile-picture" src={meme.profile} className="profile-picture-post" height={50} width={50}/>
                            <span className="post-time">{meme.date}</span>
                            <h4>{meme.creator}</h4><br/>
                            <hr className="post-details"/>
                            <h3>{meme.title}</h3>
                            <div className="w3-row-padding">
                                <div className="w3-half">
                                    <img className="feed-item-image" src={meme.path} height={200} width={200} />
                                </div>
                            </div>
                        </div>
                    ))
                }
        </div>
);
export default Home;
