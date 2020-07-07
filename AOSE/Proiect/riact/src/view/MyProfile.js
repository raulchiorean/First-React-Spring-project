import React from "react";



const MyProfile = ({profile}) =>(
    <div className="middle">
        {
            profile.memes.map((meme, index) =>(
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
export default MyProfile;
