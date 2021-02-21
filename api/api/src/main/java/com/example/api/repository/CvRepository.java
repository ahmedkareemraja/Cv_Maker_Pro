package com.example.api.repository;

import java.util.List;

import com.example.api.model.Cv;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface CvRepository extends JpaRepository<Cv,Integer> {

    @Query("SELECT c FROM Cv c WHERE c.email_fk = ?1")
	List<Cv> findByEmail(String email);
    
}