package com.example.demo.services;

import com.example.demo.entities.Residence;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.demo.repositories.ResidenceRepo;

import java.util.ArrayList;
import java.util.List;

@Service
public class ResidenceService {

    @Autowired
    private ResidenceRepo residenceRepo;

    public Residence findById(int id) {
        return residenceRepo.findById(id);
    }

    public List<Residence> findResidences(String addressCountry, int numberofguests, String addressCity){
        if(numberofguests == 0){
            return residenceRepo.SearchLocationOnly(addressCountry, addressCity);
        }
            return residenceRepo.SearchWithGuests(addressCountry, numberofguests, addressCity);
    }

    public Residence addResidence(Residence residence){
        return residenceRepo.save(residence);
    }
}