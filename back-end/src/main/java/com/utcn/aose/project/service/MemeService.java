package com.utcn.aose.project.service;

import com.utcn.aose.project.dto.MemeDTO;
import com.utcn.aose.project.entity.Meme;
import com.utcn.aose.project.entity.User;
import com.utcn.aose.project.persistance.MemeRepository;
import com.utcn.aose.project.persistance.UserRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Service
public class MemeService {
    private MemeRepository memeRepository;
    private UserRepository userRepository;


    public MemeService(MemeRepository memeRepository, UserRepository userRepository){
        this.memeRepository = memeRepository;
        this.userRepository = userRepository;
    }

    @Transactional
    public ResponseEntity<List<MemeDTO>> getAllMemes(){
        List<Meme> memes = memeRepository.findAll();
        List<MemeDTO> memeDTOS = new ArrayList<>();
        for (Meme mem:memes) {
            User user = userRepository.findById(mem.getIduser()).get();
            memeDTOS.add(new MemeDTO(mem.getTitle(),mem.getPath(),user.getUsername(),mem.getDate(),user.getProfilePicture()));
        }
        return ResponseEntity.ok(memeDTOS);
    }
    @Transactional
    public void saveMeme(MemeDTO memeDTO){
        User user = userRepository.findByUsername(memeDTO.getCreator()).get();
        memeRepository.save(new Meme(memeDTO.getTitle(), memeDTO.getPath(),memeDTO.getDate(),user.getId()));
    }
    public List<MemeDTO> convertMemeToMemeDTO(List<Meme> memes){
        List<MemeDTO> memeDTOS = new ArrayList<>();
        for (Meme mem:memes) {
            User user = userRepository.findById(mem.getIduser()).get();
            memeDTOS.add(new MemeDTO(mem.getTitle(),mem.getPath(),user.getUsername(),mem.getDate(),user.getProfilePicture()));
        }
        return memeDTOS;
    }
}
