package com.example.api.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table
public class Experience {
    @Id
    @GeneratedValue
    private int ex_id;
    private String company;
    private String job_title;


    public Experience() {
    }

    public Experience(int ex_id, String company, String job_title) {
        this.ex_id = ex_id;
        this.company = company;
        this.job_title = job_title;
    }

    public int getEx_id() {
        return this.ex_id;
    }

    public void setEx_id(int ex_id) {
        this.ex_id = ex_id;
    }

    public String getCompany() {
        return this.company;
    }

    public void setCompany(String company) {
        this.company = company;
    }

    public String getJob_title() {
        return this.job_title;
    }

    public void setJob_title(String job_title) {
        this.job_title = job_title;
    }

    @Override
    public String toString() {
        return "{" +
            " ex_id='" + getEx_id() + "'" +
            ", company='" + getCompany() + "'" +
            ", job_title='" + getJob_title() + "'" +
            "}";
    }
    

}