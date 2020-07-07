package com.utcn.aose.project.persistance;

import com.utcn.aose.project.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User,Integer> {
    List<User> findByRoleAndIdEquals(String role, Integer id);
    Optional<User> findByUsername(String username);
    User findTopByOrderByIdDesc();

}
