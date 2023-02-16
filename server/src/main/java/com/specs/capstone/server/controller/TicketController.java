package com.specs.capstone.server.controller;


import com.specs.capstone.server.model.Ticket;
import com.specs.capstone.server.repository.TicketRepository;
import com.specs.capstone.server.service.TicketService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/ticket")
@CrossOrigin
public class TicketController {

    @Autowired
    private TicketService ticketService;
    @Autowired
    private TicketRepository ticketRepository;

    @PostMapping("/add")
    public String add(@RequestBody Ticket ticket){
        ticketService.saveTicket(ticket);
        return "new Student is Added";
    }

    @GetMapping("/getAll")
    public List<Ticket> list(){
        System.out.println(ticketService.getAllTickets() + "jelo");
        return ticketService.getAllTickets();
    }

    @PutMapping("/update")
    public String updateTicket(@RequestBody Ticket ticket){
       Integer ticketId= ticket.getId();

        Optional<Ticket> optionalTicket =ticketRepository.findById(ticketId);
        if(optionalTicket.isPresent()){

        Ticket ticket1=optionalTicket.get();
            System.out.println(ticket.getDescription());
            ticket1.setDescription(ticket.getDescription());
            System.out.println(ticket1.getDescription());
            System.out.println(ticket1.getDescription());
            ticketRepository.saveAndFlush(ticket1);
            return "updated Successfully";
        } else {
            return "error failed to find id";
        }
    }

    @DeleteMapping("delete/{id}")
    public String deleteTicket(@PathVariable Integer id){
        ticketRepository.deleteById(id);


        return "deleted successfully";
    }



}
