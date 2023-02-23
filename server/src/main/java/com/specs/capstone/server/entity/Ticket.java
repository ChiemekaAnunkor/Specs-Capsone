package com.specs.capstone.server.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.specs.capstone.server.dto.TicketDto;
import jakarta.persistence.*;

@Entity
public class Ticket {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;


    private String name;

    private  String description;

    private Integer progress;


    @ManyToOne
    @JsonBackReference
    private User user;

    public Ticket(){

    }
    public Ticket(TicketDto ticketDto){
        if(ticketDto.getName() !=null){
            this.name=ticketDto.getName();
        }

        if(ticketDto.getDescription() !=null){
            this.description=ticketDto.getDescription();
        }

        try {
            this.progress=ticketDto.getProgress();
        }catch ( Exception e){
            System.out.println(e);
        }


    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public int getProgress() {
        return progress;
    }

    public void setProgress(int progress) {
        this.progress = progress;
    }
}
