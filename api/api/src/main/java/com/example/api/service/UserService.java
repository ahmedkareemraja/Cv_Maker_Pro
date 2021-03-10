package com.example.api.service;

import java.util.List;
// import java.util.Optional;

import com.example.api.dto.UserRequest;
import com.example.api.model.User;
import com.example.api.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    // Post one User
    public User saveUser(User user) {

        String hashedPassword = BCrypt.hashpw(user.getPassword(), BCrypt.gensalt(12));
        user.setPassword(hashedPassword);
        return userRepository.save(user);
    }

    // Get All user
    public List<User> getUsers() {
        return userRepository.findAll();
    }

    // Get One User
    public boolean getUser(UserRequest userRequest) {
        String email = userRequest.getEmail();
        User user = userRepository.findById(email).orElse(null);

        if(BCrypt.checkpw(userRequest.getPassword(), user.getPassword())){
            return true;
        }
        else{
            return false;
        }
         

    }
}