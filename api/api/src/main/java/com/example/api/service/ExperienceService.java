package com.example.api.service;

import java.util.List;

import com.example.api.model.Experience;
import com.example.api.repository.ExperienceRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ExperienceService {
    @Autowired
    private ExperienceRepository repository;
    

    // //Delete Experience
    // public void deleteExperience(int cv_id_fk){
    //     repository.deleteByCV_id(cv_id_fk);
    // }


    // Get Experience
    public List<Experience> getExperience(Integer cv_id_fk){
        return repository.findByCvId(cv_id_fk);
    }

}