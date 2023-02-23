package com.specs.capstone.server.service;

import com.specs.capstone.server.dto.TicketDto;
import com.specs.capstone.server.entity.Ticket;
import com.specs.capstone.server.entity.User;
import com.specs.capstone.server.repository.TicketRepository;
import com.specs.capstone.server.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class TicketServiceImpl implements TicketService{

    @Autowired
    private TicketRepository ticketRepository;
    @Autowired
    private UserRepository userRepository;

//    @Override
//    public Ticket saveTicket(Ticket ticket){
//        return ticketRepository.save(ticket);
//    }
    @Override
    public void saveTicket(TicketDto ticketDto, int userId){
        Optional<User> userOptional = userRepository.findById(userId);
        Ticket ticket = new Ticket(ticketDto);
        userOptional.ifPresent(ticket::setUser);
        ticketRepository.saveAndFlush(ticket);
    }


    @Override
    public List<Ticket>getAllTickets(){
        return ticketRepository.findAll();
    }

    @Override
    public List<TicketDto> getAllNotesByUserId(int userid){
        Optional<User> userOptional = userRepository.findById(userid);
        if(userOptional.isPresent()){
            List<Ticket> ticketList = ticketRepository.findAllByUserEquals(userOptional.get());
            return ticketList.stream().map(ticket -> new TicketDto(ticket)).collect(Collectors.toList());
        }
        return Collections.emptyList();
    }



}
