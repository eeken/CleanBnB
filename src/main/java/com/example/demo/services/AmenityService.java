package com.example.demo.services;

import com.example.demo.entities.Amenity;
import com.example.demo.repositories.AmenityRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.demo.repositories.ResidenceRepo;

import java.util.ArrayList;
import java.util.List;

@Service
public class AmenityService {

    @Autowired
    private AmenityRepo amenityRepo;

    public Amenity getOneAmenity(int id) {
        return amenityRepo.findById(id);
    }

    public List<Amenity> getAllAmenities(){
        return (List<Amenity>) amenityRepo.findAll();
    }

}