package com.example.demo.repositories;

import com.example.demo.entities.Amenity;
import com.example.demo.entities.Residence;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface AmenityRepo extends CrudRepository<Amenity, Integer> {

    public Amenity findById(int id);

    public List<Amenity> findAll();
}