package com.specs.capstone.server.service;

import com.specs.capstone.server.dto.TicketDto;
import com.specs.capstone.server.entity.Ticket;

import java.util.List;

public interface TicketService {

//    public Ticket saveTicket(Ticket ticket);

    //    @Override
    //    public Ticket saveTicket(Ticket ticket){
    //        return ticketRepository.save(ticket);
    //    }
    void saveTicket(TicketDto ticketDto, int userId);

    public List<Ticket> getAllTickets();

    List<TicketDto> getAllNotesByUserId(int userId);


}
