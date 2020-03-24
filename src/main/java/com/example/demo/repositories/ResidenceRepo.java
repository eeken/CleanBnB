package com.example.demo.repositories;

import com.example.demo.entities.Residence;
import org.springframework.data.repository.CrudRepository;

public interface ResidenceRepo extends CrudRepository<Residence, Integer> {

    public Residence findById(int id);



}
