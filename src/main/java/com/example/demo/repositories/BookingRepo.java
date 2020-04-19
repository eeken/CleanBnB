package com.example.demo.repositories;

import com.example.demo.entities.Booking;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface BookingRepo extends CrudRepository<Booking, Integer> {

    public Booking findById(int id);

    public List<Booking> findAll();

}
