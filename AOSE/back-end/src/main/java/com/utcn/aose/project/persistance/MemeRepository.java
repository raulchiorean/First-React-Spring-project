package com.utcn.aose.project.persistance;

import com.utcn.aose.project.entity.Meme;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface MemeRepository extends JpaRepository<Meme,Integer> {
    List<Meme> findMemeByIduser(Integer IdUser);
}
