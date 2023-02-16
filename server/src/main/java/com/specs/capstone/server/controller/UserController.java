package com.specs.capstone.server.controller;

import com.specs.capstone.server.model.User;
import com.specs.capstone.server.repository.UserRepository;
import com.specs.capstone.server.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/user")
@CrossOrigin
public class UserController {
    @Autowired
    private UserService userService;
    @Autowired
    private UserRepository userRepository;


    @PostMapping("/add")
    public String add(@RequestBody User user){
        userService.saveUser(user);
        return "new user is Added";
    }

    @GetMapping("/getAll")
    public List<User> list(){
        System.out.println(userService.getAllUsers());
        return userService.getAllUsers();
    }

}
