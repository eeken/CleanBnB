package com.example.demo.services;

import com.example.demo.entities.Image;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.demo.repositories.ImageRepo;

import java.util.List;

@Service
public class ImageService {

    @Autowired
    private ImageRepo imageRepo;

    public List<Image> findAllImagesByResidencyid(int residencyid){
        return (List<Image>) imageRepo.findAllImagesByResidencyid(residencyid);
    }

    public List<Image> getAllImages(){
        return (List<Image>) imageRepo.findAll();
    }

}
