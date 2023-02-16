package com.specs.capstone.server.repository;

import com.specs.capstone.server.model.Ticket;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TicketRepository extends JpaRepository<Ticket,Integer> {
}
