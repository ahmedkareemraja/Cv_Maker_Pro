package com.example.api.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table
public class Education {
    @Id
    @GeneratedValue
    private int ed_id;
    private String institution;
    private String degree;
    
   

    public Education() {
    }

    public Education(int ed_id, String institution, String degree) {
        this.ed_id = ed_id;
        this.institution = institution;
        this.degree = degree;
    }

    public int getEd_id() {
        return this.ed_id;
    }

    public void setEd_id(int ed_id) {
        this.ed_id = ed_id;
    }

    public String getInstitution() {
        return this.institution;
    }

    public void setInstitution(String institution) {
        this.institution = institution;
    }

    public String getDegree() {
        return this.degree;
    }

    public void setDegree(String degree) {
        this.degree = degree;
    }

    @Override
    public String toString() {
        return "{" +
            " ed_id='" + getEd_id() + "'" +
            ", institution='" + getInstitution() + "'" +
            ", degree='" + getDegree() + "'" +
            "}";
    }


}