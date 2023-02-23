package com.specs.capstone.server.service;

import com.specs.capstone.server.dto.UserDto;
import com.specs.capstone.server.entity.User;

import java.util.List;

public interface UserService {

    public User saveUser(User user);

    public List<User> getAllUsers();

    List<String> userLogin(UserDto userDto);


}
