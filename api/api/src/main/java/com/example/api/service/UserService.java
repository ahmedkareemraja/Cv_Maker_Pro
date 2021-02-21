package com.example.api.service;

import java.util.List;
import java.util.Optional;

import com.example.api.model.User;
import com.example.api.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    // Post one User
    public User saveUser(User user) {
        return userRepository.save(user);
    }

    // Get All user
    public List<User> getUsers() {
        return userRepository.findAll();
    }

    // Get One User
    public Optional<User> getUser(String email) {
        return userRepository.findById(email);
    }
}