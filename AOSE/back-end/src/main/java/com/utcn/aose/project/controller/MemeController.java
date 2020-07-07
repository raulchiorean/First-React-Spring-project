package com.utcn.aose.project.controller;

import com.utcn.aose.project.dto.MemeDTO;
import com.utcn.aose.project.dto.UploadMemeDTO;
import com.utcn.aose.project.exception.StorageFileNotFoundException;
import com.utcn.aose.project.service.MemeService;
import com.utcn.aose.project.service.StorageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.sql.Date;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.util.List;
@CrossOrigin(origins={ "http://localhost:3000", "http://localhost:8080" })
@RestController
public class MemeController {
    private MemeService memeService;
    private StorageService storageService;

    @Autowired
    public MemeController(MemeService memeService, StorageService storageService) {
        this.memeService = memeService;
        this.storageService = storageService;
    }

    @GetMapping("/memes")
    public ResponseEntity<List<MemeDTO>> getAllMemes(){
        return memeService.getAllMemes();
    }

    @PostMapping("/memes")
    public ResponseEntity<?> saveMeme(@ModelAttribute UploadMemeDTO uploadMemeDTO){
        SimpleDateFormat formatter= new SimpleDateFormat("yyyy-MM-dd 'at' HH:mm:ss z");
        Date currentDate = new Date(System.currentTimeMillis());
        MemeDTO memeDTO = new MemeDTO();
        uploadMemeDTO.setName(currentDate+"_"+uploadMemeDTO.getImage().getOriginalFilename());
        storageService.store(uploadMemeDTO.getImage(), uploadMemeDTO.getName());
        memeDTO.setCreator(uploadMemeDTO.getCreator());
        memeDTO.setDate(currentDate);
        memeDTO.setPath("http://localhost:8080/file/" + uploadMemeDTO.getName());
        memeDTO.setTitle(uploadMemeDTO.getTitle());
        memeService.saveMeme(memeDTO);
        return ResponseEntity.ok(memeDTO);
    }
}
