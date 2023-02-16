package com.specs.capstone.server.repository;

import com.specs.capstone.server.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Integer> {
}
