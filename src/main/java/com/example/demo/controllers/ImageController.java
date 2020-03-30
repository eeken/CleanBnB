package com.example.demo.controllers;

import com.example.demo.entities.Image;
import com.example.demo.services.ImageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class ImageController {

    @Autowired
    private ImageService imageService;

    @GetMapping("/rest/images/{residencyid}")
    public List<Image> findAllImagesByResidencyid(@PathVariable int residencyid){ return imageService.findAllImagesByResidencyid(residencyid); }
}