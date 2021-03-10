package com.example.api.controller;

import java.util.List;
import java.util.Optional;

// import com.example.api.dto.EducationResponse;
// import com.example.api.dto.EducationResponse;
import com.example.api.model.Cv;
import com.example.api.model.Education;
import com.example.api.model.Experience;
import com.example.api.service.CvService;
import com.example.api.service.EducationService;
import com.example.api.service.ExperienceService;
import com.example.api.service.PdfService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CvController {

    @Autowired
    private CvService cvService;

    @Autowired
    private EducationService edService;

    @Autowired
    private ExperienceService exService;

    @Autowired
    private PdfService pdfService;

    // Post One CV
    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping("/addCV")
    public Cv addCV(@RequestBody Cv cv) {
        return cvService.saveCv(cv);
    }

    //Update ONe cv 
    @CrossOrigin(origins = "http://localhost:4200")
    @PutMapping("/update/{cv_id}")
    public Cv updateCv(@PathVariable int cv_id, @RequestBody Cv cv){
        return cvService.updateCv(cv, cv_id);
    }

    // //Download CV
    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping("/download")
    public void downloadCv(@RequestBody Cv cv) {

        Integer cv_id = cv.getCv_id();
        List<Education> ed;
        List<Experience> ex;
        ed = edService.getEducation(cv_id);
        ex = exService.getExperience(cv_id);

        pdfService.createDocument(cv, ed, ex);
        // return res;
    }

    // Get One CV For Edit
    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/cv/{cv_id}")
    public Optional<Cv> getCvById(@PathVariable int cv_id) {
        return cvService.getCVById(cv_id);
     }

    // //Get All CVs for one user
    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/cv/all/{email}")
    public List<Cv> getCvByEmail(@PathVariable String email) {
        return cvService.getCvByEmail(email);
    }

   

    //Delete CV ))
    @CrossOrigin(origins = "http://localhost:4200")
    @DeleteMapping("/delete/{cv_id}")
    public void deleteCv(@PathVariable Integer cv_id){
        // edService.deleteEducation(cv_id);
        // exService.deleteExperience(cv_id);
        cvService.deleteCv(cv_id);
        
    }
    
}