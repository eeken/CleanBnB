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

    @GetMapping("/rest/residences")
    public List<Residence> getAllResidences(){
        return residenceService.getAllResidences();
    }

    @GetMapping("/rest/residences/{id}")
    public Residence getOneResidence(@PathVariable int id){
        return residenceService.getOneResidence(id);
    }

    @GetMapping("/rest/search/residences/{country}/{maxguests}")
    public List<Residence> findByCountryAndMaxguests(
            @PathVariable(name="country", required = false) String country,
            @PathVariable(name="maxguests",required = false) int maxguests
    ){
        System.out.println(country + ' ' + maxguests);
        return residenceService.findByCountryAndMaxguests(country, maxguests); }
}
