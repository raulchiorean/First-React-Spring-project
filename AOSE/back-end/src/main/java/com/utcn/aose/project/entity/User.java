package com.utcn.aose.project.entity;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class User {
    @Id
    private Integer id;
    private String username;
    private String password;
    private String role;
    private String profilePicture;
    private Boolean loggedIn ;

    public User(Integer id, String username, String password, String role, String profilePicture, Boolean loggedIn) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.role = role;
        this.profilePicture = profilePicture;
        this.loggedIn = loggedIn;
    }

    public User() {
    }

    public Boolean getLoggedIn() {
        return loggedIn;
    }

    public void setLoggedIn(Boolean loggedIn) {
        this.loggedIn = loggedIn;
    }

    public String getProfilePicture() {
        return profilePicture;
    }

    public void setProfilePicture(String profilePicture) {
        this.profilePicture = profilePicture;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }
}
