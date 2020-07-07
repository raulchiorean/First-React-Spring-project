package com.utcn.aose.project.dto;

import javax.persistence.Id;
import java.util.ArrayList;
import java.util.List;

public class ProfileDTO {
    private String username;
    private String role;
    private String profilePicture;
    private List<MemeDTO> memes;

    public ProfileDTO(String username, String role, String profilePicture, List<MemeDTO> memes) {
        this.username = username;
        this.role = role;
        this.profilePicture = profilePicture;
        this.memes = memes;
    }

    public ProfileDTO() {
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public String getProfilePicture() {
        return profilePicture;
    }

    public void setProfilePicture(String profilePicture) {
        this.profilePicture = profilePicture;
    }

    public List<MemeDTO> getMemes() {
        return memes;
    }

    public void setMemes(List<MemeDTO> memes) {
        this.memes = memes;
    }
}
