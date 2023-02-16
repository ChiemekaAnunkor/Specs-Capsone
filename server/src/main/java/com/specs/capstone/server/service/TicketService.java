package com.specs.capstone.server.service;

import com.specs.capstone.server.model.Ticket;

import java.util.List;

public interface TicketService {

    public Ticket saveTicket(Ticket ticket);

    public List<Ticket> getAllTickets();


}
