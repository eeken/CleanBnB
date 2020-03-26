package com.example.demo.services;

import com.example.demo.entities.AvailablePeriod;
import com.example.demo.repositories.AvailablePeriodRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AvailablePeriodService {

    @Autowired
    private AvailablePeriodRepo availablePeriodRepo;

    public AvailablePeriod getOneAvailablePeriod(int id) {
        return availablePeriodRepo.findById(id);
    }

    public List<AvailablePeriod> getAllAvailablePeriods(){
        return (List<AvailablePeriod>) availablePeriodRepo.findAll();
    }



}
