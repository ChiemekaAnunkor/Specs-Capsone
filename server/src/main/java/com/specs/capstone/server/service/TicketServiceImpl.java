package com.specs.capstone.server.service;

import com.specs.capstone.server.model.Ticket;
import com.specs.capstone.server.repository.TicketRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TicketServiceImpl implements TicketService{

    @Autowired
    private TicketRepository ticketRepository;

    @Override
    public Ticket saveTicket(Ticket ticket){
        return ticketRepository.save(ticket);
    }


    @Override
    public List<Ticket>getAllTickets(){
        return ticketRepository.findAll();
    }




}
