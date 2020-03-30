package com.example.demo.controllers;

import com.example.demo.entities.Residence;
import com.example.demo.services.ResidenceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class ResidenceController {

    @Autowired
    private ResidenceService residenceService;

    @GetMapping("/rest/residences/{addressCountry}/{numberofguests}")
    public List<Residence> getAllResidences(
            @PathVariable("addressCountry") String addressCountry,
            @PathVariable("addressCountry") String addressCity,
            @PathVariable("numberofguests")  Integer numberofguests) {
        return residenceService.getAllResidences(addressCountry, numberofguests, addressCity, numberofguests);
    }

    @GetMapping("/rest/residence/{id}")
    public Residence findById(@PathVariable int id){
        return residenceService.findById(id);
    }

    @GetMapping("/rest/residences")
    public List<Residence> findAll() {
        return residenceService.findAll();
    }
}