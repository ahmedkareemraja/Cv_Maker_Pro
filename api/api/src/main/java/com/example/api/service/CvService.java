package com.example.api.service;

import java.util.List;
import java.util.Optional;

import com.example.api.model.Cv;
import com.example.api.repository.CvRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CvService {

    @Autowired
    private CvRepository cvRepository;

    // Save One CV
    public Cv saveCv(Cv cv) {
        return cvRepository.save(cv);
    }

    // //Get All CVs
    // public List<Cv> getCvs(){
    // return cvRepository.findAll();
    // }

    // // //Get All Cvs for one user
    public List<Cv> getCvByEmail(String email) {
        return cvRepository.findByEmail(email);
    }

    // Delete cv
    public void deleteCv(int cv_id) {
        cvRepository.deleteById(cv_id);
    }

    // Edit CV
    public Optional<Cv> getCVById(int cv_id) {
        return cvRepository.findById(cv_id);
    }

      //Update CV 
      public Cv updateCv(Cv cv, int cv_id) {
        Cv existingCV = cvRepository.findById(cv_id).orElse(null);
        existingCV.setTitle(cv.getTitle());
        existingCV.setName(cv.getName());
        existingCV.setPhone(cv.getPhone());
        existingCV.setAddress(cv.getAddress());
        existingCV.setEducation(cv.getEducation());
        existingCV.setExperience(cv.getExperience());

        // String title = cv.getTitle();
        // String name = cv.getName();
        // int phone = cv.getPhone();
        // String address = cv.getAddress();
        // List<Education> education = cv.getEducation();
        // List<Experience> experience = cv.getExperience();

        return cvRepository.save(existingCV);
        // return cvRepository.updateCVByUser(cv_id, title, name, phone, address, education, experience);

        

    }
}