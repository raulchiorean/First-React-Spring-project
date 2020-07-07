import React from "react";
import UploadMeme from "./UploadMeme";

const LeftProfile = ({profile}) => (
    <div className="left">
        <div className="left-profile-card">
            <div className="container-home-profile">
                <h4 className="left-profile-username">{profile.username}</h4>
                <p><img className="left-profile-picture"src={profile.profilePicture}  width="200rem" height="200rem" alt="Avatar"/></p>
            </div>
        </div>
    </div>
);
export default LeftProfile;