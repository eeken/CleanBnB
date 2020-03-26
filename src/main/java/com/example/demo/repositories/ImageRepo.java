package com.example.demo.repositories;

import com.example.demo.entities.Image;
import org.springframework.data.repository.CrudRepository;

public interface ImageRepo extends CrudRepository<Image, Integer> {

    public Image findById(int id);



}
