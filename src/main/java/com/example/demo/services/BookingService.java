package com.example.demo.services;

import com.example.demo.entities.Booking;
import com.example.demo.entities.Residence;
import com.example.demo.repositories.BookingRepo;
import com.example.demo.repositories.ResidenceRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookingService {

    @Autowired
    private BookingRepo bookingRepo;
    @Autowired
    private ResidenceRepo residenceRepo;


    public Booking getOneBooking(int id) {
        return bookingRepo.findById(id);
    }

    public List<Booking> getAllBookings(){
        return bookingRepo.findAll();
    }

    public Booking createBooking(Booking booking)
    {
        booking.setResidence(residenceRepo.findById(booking.resId));
        return bookingRepo.save(booking);
    }



}
