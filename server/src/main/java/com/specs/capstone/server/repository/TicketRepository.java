package com.specs.capstone.server.repository;

import com.specs.capstone.server.entity.Ticket;
import com.specs.capstone.server.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TicketRepository extends JpaRepository<Ticket,Integer> {

    List<Ticket> findAllByUserEquals(User user);
}
