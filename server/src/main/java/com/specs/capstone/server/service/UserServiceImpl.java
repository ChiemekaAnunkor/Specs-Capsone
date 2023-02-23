package com.specs.capstone.server.service;

import com.specs.capstone.server.dto.UserDto;
import com.specs.capstone.server.entity.User;
import com.specs.capstone.server.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImpl  implements  UserService{

    @Autowired
    private UserRepository userRepository;


    @Override
    public User saveUser(User user){
        return userRepository.save(user);
    }

    @Override
    public List<User> getAllUsers(){

        return userRepository.findAll();
    }

    @Override
    public List<String> userLogin(UserDto userDto) {
        List<String> response = new ArrayList<>();
        Optional<User> userOptional = userRepository.findByUsername(userDto.getUsername());
        if (userOptional.isPresent()) {

            if(userOptional.get().getPassword().equals(userDto.getPassword())){
                System.out.println("success");
            response.add(String.valueOf(userOptional.get().getRole()));
            response.add(String.valueOf(userOptional.get().getUsername()));

            response.add(String.valueOf(userOptional.get().getId()));
            } else {
                response.add("incorrect password or username");
            }

        } else {
            response.add("username or password incorrect");
        }

        return response;
    }



}
