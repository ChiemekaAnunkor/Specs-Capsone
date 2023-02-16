package com.specs.capstone.server.controller;

import com.specs.capstone.server.model.User;
import com.specs.capstone.server.repository.UserRepository;
import com.specs.capstone.server.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

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


    @PutMapping("/update")
    public String updateUser(@RequestBody User user){
        Integer ticketId= user.getId();

        Optional<User> optionalUser =userRepository.findById(ticketId);
        if(optionalUser.isPresent()){

            User userdata=optionalUser.get();
            userdata.setUsername(user.getUsername());
            userdata.setPassword(user.getPassword());

            userRepository.saveAndFlush(userdata);
            return "updated user Successfully";
        } else {
            return "error failed to find id";
        }
    }

    @DeleteMapping("delete/{id}")
    public String deleteTicket(@PathVariable Integer id){
        userRepository.deleteById(id);


        return "deleted ticket successfully";
    }


}
