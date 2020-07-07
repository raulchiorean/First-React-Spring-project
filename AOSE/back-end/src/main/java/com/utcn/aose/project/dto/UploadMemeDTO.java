package com.utcn.aose.project.dto;

import org.springframework.web.multipart.MultipartFile;

import java.sql.Date;

public class UploadMemeDTO {
    private String title;
    private String creator;

    private MultipartFile image;
    private String name;

    public UploadMemeDTO(String title, String creator, MultipartFile image, String name) {
        this.title = title;
        this.creator = creator;
        this.image = image;
        this.name = name;
    }

    public UploadMemeDTO() {
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }
    public String getCreator() {
        return creator;
    }

    public void setCreator(String creator) {
        this.creator = creator;
    }



    public MultipartFile getImage() {
        return image;
    }

    public void setImage(MultipartFile image) {
        this.image = image;
    }
}
