package com.utcn.aose.project.controller;

import com.utcn.aose.project.dto.*;
import com.utcn.aose.project.entity.User;
//import com.utcn.aose.project.service.UserService;
import com.utcn.aose.project.service.StorageService;
import com.utcn.aose.project.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;


import java.util.List;


@CrossOrigin(origins={ "http://localhost:3000", "http://localhost:8080" })
@RestController
public class UserController {
    UserService userService;
    StorageService storageService;

    @Autowired
    public UserController(UserService userService, StorageService storageService) {
        this.userService = userService;
        this.storageService = storageService;
    }

//    @PostMapping("/profile")
//    public void saveMeme(@ModelAttribute UserUploadPictureDTO userUploadPictureDTO){
//        userService.updateUserPicture(userUploadPictureDTO);
//    }
    @RequestMapping(value = "/login", method = RequestMethod.POST)
    public ResponseEntity<?> createToken(@RequestBody LoginDTO loginDTO) throws Exception{
        return userService.login(loginDTO);
    }
    @RequestMapping(value = "/user/{username:.+}", method = RequestMethod.GET)
    public ResponseEntity<?> getUser(@PathVariable String username){
        return userService.getUser(username);
    }
    @RequestMapping(value = "/logout/{username:.+}", method = RequestMethod.POST)
    public ResponseEntity<?> logout(@PathVariable String username) throws Exception{
        return userService.logout(username);
    }

    @RequestMapping(value = "/logged/{username:.+}", method = RequestMethod.GET)
    @ResponseBody
    public ResponseEntity<Boolean> checkIfLoggedIn(@PathVariable String username) throws Exception{
        return userService.checkIfLoggedIn(username);
    }
    @RequestMapping(value = "/register", method = RequestMethod.POST)
    public ResponseEntity<?> register(@RequestBody LoginDTO loginDTO) throws Exception{
        return userService.register(loginDTO);
    }
}
