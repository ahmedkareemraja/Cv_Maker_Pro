package com.example.api.service;

import java.util.List;

import com.example.api.model.Education;
import com.example.api.repository.EducationRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EducationService {
    @Autowired
    private EducationRepository repository;

    // Delete Education
    // public void deleteEducation(int cv_id_fk) {
    //     repository.deleteByCVid(cv_id_fk);
    // }

    // Get Education For one cv
    public List<Education> getEducation(Integer cv_id) {
        return repository.findByCvId(cv_id);
    }

    
}