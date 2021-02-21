package com.example.api.model;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table
public class Cv {

    @Id
    @GeneratedValue
    private int cv_id;
    private String title;
    private String name;
    private int phone;
    private String address;   
    private String email_fk;
    
    @OneToMany(targetEntity = Education.class,cascade = CascadeType.ALL)
    @JoinColumn(name = "cv_id_fk" , referencedColumnName = "cv_id")
    private List<Education> education;

    @OneToMany(targetEntity = Experience.class, cascade = CascadeType.ALL)
    @JoinColumn(name = "cv_id_fk" , referencedColumnName = "cv_id")
    private List<Experience> experience;



    public Cv() {
    }

    public Cv(int cv_id, String title, String name, int phone, String address, String email_fk, List<Education> education, List<Experience> experience) {
        this.cv_id = cv_id;
        this.title = title;
        this.name = name;
        this.phone = phone;
        this.address = address;
        this.email_fk = email_fk;
        this.education = education;
        this.experience = experience;
    }

    public int getCv_id() {
        return this.cv_id;
    }

    public void setCv_id(int cv_id) {
        this.cv_id = cv_id;
    }

    public String getTitle() {
        return this.title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getPhone() {
        return this.phone;
    }

    public void setPhone(int phone) {
        this.phone = phone;
    }

    public String getAddress() {
        return this.address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getEmail_fk() {
        return this.email_fk;
    }

    public void setEmail_fk(String email_fk) {
        this.email_fk = email_fk;
    }

    public List<Education> getEducation() {
        return this.education;
    }

    public void setEducation(List<Education> education) {
        this.education = education;
    }

    public List<Experience> getExperience() {
        return this.experience;
    }

    public void setExperience(List<Experience> experience) {
        this.experience = experience;
    }

    @Override
    public String toString() {
        return "{" +
            " cv_id='" + getCv_id() + "'" +
            ", title='" + getTitle() + "'" +
            ", name='" + getName() + "'" +
            ", phone='" + getPhone() + "'" +
            ", address='" + getAddress() + "'" +
            ", email_fk='" + getEmail_fk() + "'" +
            ", education='" + getEducation() + "'" +
            ", experience='" + getExperience() + "'" +
            "}";
    }
    


   

}