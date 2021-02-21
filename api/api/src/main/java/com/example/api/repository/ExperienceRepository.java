package com.example.api.repository;

import java.util.List;

// import javax.transaction.Transactional;

import com.example.api.model.Experience;

import org.springframework.data.jpa.repository.JpaRepository;
// import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

public interface ExperienceRepository extends JpaRepository<Experience,Integer> {

    // @Transactional
    // @Modifying
    // @Query("DELETE  FROM Education e WHERE e.cv_id_fk = ?1")
    // void deleteByCV_id(int cv_id_fk);

    
    @Query("SELECT e FROM Cv c JOIN c.experience e on c.cv_id = ?1")
    List<Experience> findByCvId (Integer cv_id);
}