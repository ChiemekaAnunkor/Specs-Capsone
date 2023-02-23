package com.specs.capstone.server.controller;


import com.specs.capstone.server.dto.TicketDto;
import com.specs.capstone.server.entity.Ticket;
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

    @PostMapping("/add/{userid}")
    public String add(@RequestBody TicketDto ticketDto, @PathVariable int userid){
        ticketService.saveTicket(ticketDto,userid);
        return "new ticket is Added";
    }

    @GetMapping("/user/{userid}")
    public List<TicketDto> getTicketsByUser(@PathVariable int userid){
        return ticketService.getAllNotesByUserId(userid);
    }

    @GetMapping("/getall")
    public List<Ticket> list(){
        System.out.println(ticketService.getAllTickets() );
        return ticketService.getAllTickets();
    }

    @PutMapping("/update")
    public String updateTicket(@RequestBody Ticket ticket){
       Integer ticketId= ticket.getId();

        Optional<Ticket> optionalTicket =ticketRepository.findById(ticketId);
        if(optionalTicket.isPresent()){

        Ticket ticket1=optionalTicket.get();
            ticket1.setProgress(ticket.getProgress());
            ticketRepository.saveAndFlush(ticket1);
            return "updated ticket Successfully";
        } else {
            return "error failed to find id";
        }
    }

    @DeleteMapping("delete/{id}")
    public String deleteTicket(@PathVariable Integer id){
        ticketRepository.deleteById(id);


        return "deleted ticket successfully";
    }


}
