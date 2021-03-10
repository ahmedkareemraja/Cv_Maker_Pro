package com.example.api.controller;

import java.util.Optional;

import com.example.api.dto.UserRequest;
import com.example.api.model.User;
import com.example.api.service.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

    @Autowired
    private UserService userService;

    // Post Method One User
    // @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping("/addUser")
    public User addUser(@RequestBody User user) {
        return userService.saveUser(user);
    }

    // Get One User
    // @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping("/login")
    public boolean getUser(@RequestBody UserRequest userRequest) {
        boolean flag =  userService.getUser(userRequest);
        if(flag == true){
            return true;
        }
        else{
            return false;
        }
    }
}