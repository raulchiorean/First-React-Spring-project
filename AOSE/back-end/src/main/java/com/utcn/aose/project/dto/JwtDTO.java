package com.utcn.aose.project.dto;

public class JwtDTO {
    private String name;
    private Boolean loggedIn;


    public JwtDTO(String name, Boolean loggedIn) {
        this.name = name;
        this.loggedIn = loggedIn;
    }

    public JwtDTO() {
    }

    public Boolean getLoggedIn() {
        return loggedIn;
    }

    public void setLoggedIn(Boolean loggedIn) {
        this.loggedIn = loggedIn;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
