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

    public List<Residence> findAll(){
        return residenceRepo.findAll();
    }

    public List<Residence> getAllResidences(String addressCountry, int guestSeach1, String addressCity, int guestSeach2){
        List<Residence> residences = new ArrayList<>();
        if(guestSeach1 == 0|| guestSeach2 == 0){
            return residenceRepo.findByAddressCountryContainsIgnoreCaseAndMaxguestsGreaterThanEqualOrAddressCityContainsIgnoreCaseAndMaxguestsGreaterThanEqual(addressCountry, guestSeach1, addressCity ,guestSeach2);
        }else{
            return residenceRepo.findByAddressCountryContainsIgnoreCaseAndMaxguestsOrAddressCityContainsIgnoreCaseAndMaxguests(addressCountry, guestSeach1, addressCity ,guestSeach2);
        }
    }
}