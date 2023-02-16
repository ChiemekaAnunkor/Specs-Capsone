package com.specs.capstone.server.service;

import com.specs.capstone.server.model.User;

import java.util.List;

public interface UserService {

    public User saveUser(User user);

    public List<User> getAllUsers();

}
