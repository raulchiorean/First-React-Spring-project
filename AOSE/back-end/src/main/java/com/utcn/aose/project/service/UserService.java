package com.utcn.aose.project.service;

import com.utcn.aose.project.dto.*;
import com.utcn.aose.project.entity.Meme;
import com.utcn.aose.project.entity.User;
import com.utcn.aose.project.persistance.MemeRepository;
import com.utcn.aose.project.persistance.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class UserService implements UserDetailsService {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private MemeRepository memeRepository;
    @Autowired
    private MemeService memeService;
    @Autowired
    private StorageService storageService;
    @Autowired
    private AuthenticationManager authenticationManager;
    @Autowired
    private JwtService jwtService;

    public List<User> findAllUsers() {
        return userRepository.findAll();
    }
//
//    public List<User> findByRoleAndId(String role, Integer id) {
//        return userRepository.findByRoleAndIdEquals(role, id);
//    }
    public User findById(Integer id){
        return userRepository.findById(id).get();
    }

    public ResponseEntity<?> login(LoginDTO loginDTO){
        try {
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(loginDTO.getUsername(),loginDTO.getPassword()));

        }catch (BadCredentialsException e){
            try {
                throw new Exception("Incorrect usernmae or password", e);
            } catch (Exception ex) {
                ex.printStackTrace();
                return ResponseEntity.ok("Bad credentials");
            }
        }
        final UserDetails user = loadUserByUsername(loginDTO.getUsername());
        final String jwt = jwtService.generateToken(user);
        JwtDTO jwtDTO = new JwtDTO(jwt,true);
        User user1 = userRepository.findByUsername(loginDTO.getUsername()).get();
        user1.setLoggedIn(true);
        userRepository.save(user1);
        return ResponseEntity.ok(jwtDTO);
    }
    public ResponseEntity<?> logout(String username){
        User user = userRepository.findByUsername(username).get();
        user.setLoggedIn(false);
        userRepository.save(user);
        return ResponseEntity.ok(new JwtDTO("",false));
    }
    public ResponseEntity<?> register(LoginDTO loginDTO){
        User user = new User();
        user.setUsername(loginDTO.getUsername());
        user.setPassword(loginDTO.getPassword());
        user.setRole("user");
        User id1 = userRepository.findTopByOrderByIdDesc();
        user.setId(id1.getId()+1);
        user.setLoggedIn(false);
        userRepository.save(user);
        return ResponseEntity.ok("Succes");
    }

//    public void updateUserPicture(UserUploadPictureDTO userUploadPictureDTO){
//        storageService.store(userUploadPictureDTO.getMultipartFile());
//        User user = findById(userUploadPictureDTO.getId());
//        user.setProfilePicture("http://localhost:8080/file/"+ userUploadPictureDTO.getName());
//        userRepository.save(user);
//    }
    public ResponseEntity<Boolean> checkIfLoggedIn(String username){
        User user = userRepository.findByUsername(username).get();
        if(user.getLoggedIn()){
            return ResponseEntity.ok(true);
        }
        return  ResponseEntity.ok(false);
    }
    public ResponseEntity<?> getUser(String username){
        User user = userRepository.findByUsername(username).get();
        ProfileDTO profileDTO = new ProfileDTO();
        profileDTO.setProfilePicture(user.getProfilePicture());
        profileDTO.setUsername(user.getUsername());
        profileDTO.setRole(user.getRole());
        List<Meme> memes = memeRepository.findMemeByIduser(user.getId());
        profileDTO.setMemes(memeService.convertMemeToMemeDTO(memes));
        return ResponseEntity.ok(profileDTO);
    }

    @Override
    public UserDetails loadUserByUsername(String s) throws UsernameNotFoundException {
        User user = userRepository.findByUsername(s).get();
        if(user == null ){

                throw new UsernameNotFoundException(String.format("The username %s doesn't exist", s));
        }else {
        }
        List<GrantedAuthority> authorities = new ArrayList<>();
        String role = user.getRole();
        authorities.add(new SimpleGrantedAuthority(role));

        UserDetails userDetails = new org.springframework.security.core.userdetails.
                User(user.getUsername(), user.getPassword(), authorities);

        return userDetails;
    }
}
