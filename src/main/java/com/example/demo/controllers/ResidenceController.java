package com.example.demo.controllers;

import com.example.demo.entities.Residence;
import com.example.demo.services.ResidenceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.websocket.server.PathParam;
import java.util.List;

@RestController
@RequestMapping(value = "/rest/residences")
public class ResidenceController {


    @Autowired
    private ResidenceService residenceService;

    @GetMapping( value= "/explore")
    public List<Residence> getAllResidences(
            @RequestParam(value="destination", required = false, defaultValue="") String addressCountry,
            @RequestParam(value="destination", required = false, defaultValue="")  String addressCity,
            @RequestParam(value="numberofguests", required = false, defaultValue="0")  Integer numberofguests) {
        if(addressCity.equalsIgnoreCase("undefined") || addressCountry.equalsIgnoreCase("undefined")){
            addressCity= "";
            addressCountry = "";
        }
        return residenceService.getAllResidences(addressCountry, numberofguests, addressCity, numberofguests);
    }

    @GetMapping("/details")
    public Residence findById(@RequestParam(value="id") int id){
        return residenceService.findById(id);
    }

    @GetMapping("")
    public List<Residence> findAll() {
        return residenceService.findAll();
    }

    @PostMapping("/register")
    public Residence addResidence(@RequestBody Residence residence){
        return residenceService.addResidence(residence);
    }
}