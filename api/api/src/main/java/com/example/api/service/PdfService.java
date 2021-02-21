package com.example.api.service;

import java.io.FileOutputStream;
import java.util.List;

import com.example.api.model.Cv;
import com.example.api.model.Education;
import com.example.api.model.Experience;
import com.itextpdf.text.Document;
import com.itextpdf.text.Paragraph;
import com.itextpdf.text.pdf.PdfWriter;


import org.springframework.stereotype.Service;

@Service
public class PdfService {
    public void createDocument(Cv cv, List<Education> ed, List<Experience> ex){
        try{
            String home = System.getProperty("user.home");
            String title = cv.getTitle();
            String dest = home+"/Downloads/"+title+".pdf";
            Document document = new Document();
            PdfWriter.getInstance(document, new FileOutputStream(dest));

            //Getting name
            String name = cv.getName();

            String address = cv.getAddress();

            Integer phone = cv.getPhone();

            // Integer cvId = cv.getCv_id();
            // Integer ed_size = ed.size();

            //List<Education> education = cv.getEducation();

            // List<Experience> experience = cv.getExperience();
            
            Education temp_ed;
            Experience temp_ex;





            document.open();
            document.add(new Paragraph("Name:"));
            document.add(new Paragraph(name));
            document.add(new Paragraph("Phone:"));
            document.add(new Paragraph(phone.toString()));
            document.add(new Paragraph("Address:"));
            document.add(new Paragraph(address));
            document.add(new Paragraph("Education:"));
            // document.add(new Paragraph(size.toString()));
            //For education
            
            for (int i = 0 ; i < ed.size() ; i++){
                temp_ed = ed.get(i);
                document.add(new Paragraph("institution:"));
                document.add(new Paragraph(temp_ed.getInstitution()));
                document.add(new Paragraph("degree:"));
                document.add(new Paragraph(temp_ed.getDegree()));

            }

            document.add(new Paragraph("Experience:"));
            //For experience 
            for (int i = 0 ; i < ex.size(); i++){
                temp_ex = ex.get(i);
                document.add(new Paragraph("company"));
                document.add(new Paragraph(temp_ex.getCompany()));
                document.add(new Paragraph("Job Title"));
                document.add(new Paragraph(temp_ex.getJob_title()));


            }

            



            document.close();
           
            
            
           
        }
        catch(Exception E){
            
        }
       
    }
}