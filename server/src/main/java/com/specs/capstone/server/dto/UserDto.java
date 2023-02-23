package com.specs.capstone.server.dto;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserDto implements Serializable {

    private int id;

    private String username;

    private String password;

    private String role;

    private Set<TicketDto> ticketDtoSet = new HashSet<>();

    public  UserDto(UserDto user){
        try {
            this.id=user.getId();
        }catch ( Exception e){
            System.out.println(e);
        }

        if(user.getUsername() !=null ){
            this.username=user.getUsername();
        }

        if(user.getPassword()!=null ){
            this.password=user.getPassword();
        }
        if(user.getRole() !=null ){
            this.role=user.getRole();
        }

    }
}
