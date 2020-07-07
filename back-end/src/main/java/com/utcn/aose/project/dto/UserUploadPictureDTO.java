package com.utcn.aose.project.dto;

import org.springframework.web.multipart.MultipartFile;

import javax.persistence.Id;

public class UserUploadPictureDTO {
    @Id
    private Integer id;
    private String name;
    private MultipartFile multipartFile;

    public UserUploadPictureDTO(Integer id, String name, MultipartFile multipartFile) {
        this.id = id;
        this.name = name;
        this.multipartFile = multipartFile;
    }

    public UserUploadPictureDTO() {
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public MultipartFile getMultipartFile() {
        return multipartFile;
    }

    public void setMultipartFile(MultipartFile multipartFile) {
        this.multipartFile = multipartFile;
    }
}
