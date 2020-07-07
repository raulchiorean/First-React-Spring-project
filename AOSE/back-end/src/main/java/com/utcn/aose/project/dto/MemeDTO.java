package com.utcn.aose.project.dto;

import java.sql.Date;

public class MemeDTO {
    private String title;
    private String path;
    private String creator;
    private Date date;
    private String profile;

    public MemeDTO(String title, String path, String creator, Date date, String profile) {
        this.title = title;
        this.path = path;
        this.creator = creator;
        this.date = date;
        this.profile = profile;
    }

    public String getProfile() {
        return profile;
    }

    public void setProfile(String profile) {
        this.profile = profile;
    }

    public MemeDTO() {
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getPath() {
        return path;
    }

    public void setPath(String path) {
        this.path = path;
    }

    public String getCreator() {
        return creator;
    }

    public void setCreator(String creator) {
        this.creator = creator;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }
}
