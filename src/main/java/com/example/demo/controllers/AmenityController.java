package com.example.demo.controllers;

import com.example.demo.entities.Amenity;
import com.example.demo.entities.Residence;
import com.example.demo.services.AmenityService;
import com.example.demo.services.ResidenceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.websocket.server.PathParam;
import java.util.List;

@RestController
public class AmenityController {


    @Autowired
    private AmenityService amenityService;

    @GetMapping("/rest/amenities")
    public List<Amenity> getAllAddresses(){
        return amenityService.getAllAmenities();
    }

    @GetMapping("/rest/amenities/{id}")
    public Amenity getOneAmenity(@PathVariable int id){
        return amenityService.getOneAmenity(id);
    }

}