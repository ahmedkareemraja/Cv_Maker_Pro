package com.example.api.repository;

import java.util.List;

// import com.example.api.dto.EducationResponse;

// import javax.transaction.Transactional;

import com.example.api.model.Education;
// import com.example.api.model.Cv;

import org.springframework.data.jpa.repository.JpaRepository;
// import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

public interface EducationRepository extends JpaRepository<Education,Integer> {

    // // @Transactional
    // // @Modifying
    // // @Query("DELETE FROM Education e WHERE e.cv_id_fk = ?1")
    // void deleteByCVid(Integer cv_id_fk);
    
    
    @Query("SELECT e FROM Cv c JOIN c.education e ON c.cv_id = ?1")
    List<Education> findByCvId(Integer cv_id);

    
}