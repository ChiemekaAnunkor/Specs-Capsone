package com.specs.capstone.server.dto;

import com.specs.capstone.server.entity.Ticket;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class TicketDto implements Serializable {
    private int id;
    private String name;
    private String description;
    private Integer progress;

    private UserDto userDto;


    public TicketDto(Ticket ticket){


        try {
            this.id=ticket.getId();
        }catch ( Exception e){
            System.out.println(e);
        }


        if(ticket.getName() !=null){
            this.name=ticket.getName();
        }

        if(ticket.getDescription() !=null){
            this.description=ticket.getDescription();
        }


    }


}
