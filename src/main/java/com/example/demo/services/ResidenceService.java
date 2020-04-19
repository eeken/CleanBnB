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

    public List<Residence> findResidences(String addressCountry, int numberofguests, String addressCity, int startDate, int endDate){
        if(numberofguests == 0 && startDate == 0 && endDate == 0){
            System.out.println("LOCATION SEARCHED");
            return residenceRepo.SearchLocationOnly(addressCountry, addressCity);
        }else if(startDate == 0 && endDate == 0){
            System.out.println("GUEST SEARCHED");
            return residenceRepo.SearchWithGuests(addressCountry, numberofguests, addressCity);
        }else if(numberofguests == 0){
            System.out.println("DATE SEARCHED");
            return residenceRepo.searchForCheckInAndCheckOut(startDate, endDate);
        }
        // TODO FULL SEARCH
        return null;
    }

    public Residence addResidence(Residence residence){
        return residenceRepo.save(residence);
    }
}