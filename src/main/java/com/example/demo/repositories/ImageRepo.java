package com.example.demo.repositories;

import com.example.demo.entities.Image;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface ImageRepo extends CrudRepository<Image, Integer> {

    public List<Image> findAllImagesByResidencyid(int residencyid);
}
