package com.example.demo.services;

import com.example.demo.entities.Residence;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.demo.repositories.ResidenceRepo;

import java.util.List;

@Service
public class ResidenceService {

    @Autowired
    private ResidenceRepo residenceRepo;

    public Residence getOneResidence(int id) {
        return residenceRepo.findById(id);
    }

    public List<Residence> getAllResidences(){
        return (List<Residence>) residenceRepo.findAll();
    }

    public List<Residence> findByCountryAndMaxguests(String country, int maxguests){
        return (List<Residence>) residenceRepo.findByCountryAndMaxguests(country, maxguests);
    }
}
