package com.example.demo.repositories;

import com.example.demo.entities.Residence;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface ResidenceRepo extends CrudRepository<Residence, Integer> {

    public Residence findById(int id);

    public List<Residence> findAll();

    //USED IF USER DOES NOT PROVIDE PICKS NUMBEROFGUESTS IN SEARCH
    public List<Residence> findByAddressCountryContainsIgnoreCaseAndMaxguestsGreaterThanEqualOrAddressCityContainsIgnoreCaseAndMaxguestsGreaterThanEqual(String addressCountry, int guestSeach1, String addressCity,  int guestSeach2);

    //USED IF USER PROVIDES NUMBEROFGUESTS IN SEARCH
    public List<Residence> findByAddressCountryContainsIgnoreCaseAndMaxguestsOrAddressCityContainsIgnoreCaseAndMaxguests(String addressCountry, int guestSeach1, String addressCity,  int guestSeach2);

}