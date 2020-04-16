package com.example.demo.entities;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import org.hibernate.mapping.Join;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "residences")
public class Residence {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private int size;
    private int rooms;
    private int maxguests;
    private int pricepernight;
    private int numberofbeds;
    private String title;
    private String description;

    //CONSTRUCTORS
    public Residence() { }

    //RELATIONS
    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name="address_id")
    private Address address;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name="amenity_id")
    private Amenity amenity;

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name="residence_id")
    private List<Booking> bookedDays;

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name="residence_id")
    private List<Image> images;

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name="residence_id")
    private List<AvailablePeriod> availableDays;

    @ManyToOne
    private User user;


    // GETTERS AND SETTERS

    public int getId() { return id; }
    public void setId(int id) { this.id = id; }
    public int getSize() { return size; }
    public void setSize(int size) { this.size = size; }
    public int getRooms() { return rooms; }
    public void setRooms(int rooms) { this.rooms = rooms; }
    public int getMaxguests() { return maxguests; }
    public void setMaxguests(int maxguests) { this.maxguests = maxguests; }
    public int getPricepernight() { return pricepernight; }
    public void setPricepernight(int pricepernight) { this.pricepernight = pricepernight; }
    public int getNumberofbeds() { return numberofbeds; }
    public void setNumberofbeds(int numberofbeds) { this.numberofbeds = numberofbeds; }
    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }
    public Address getAddress() { return address; }
    public void setAddress(Address address) { this.address = address; }
    public Amenity getAmenity() { return amenity; }
    public void setAmenity(Amenity amenity) { this.amenity = amenity; }
    public List<Booking> getBookedDays() { return bookedDays; }
    public void setBookedDays(List<Booking> bookedDays) { this.bookedDays = bookedDays; }
    public List<AvailablePeriod> getAvailableDays() { return availableDays; }
    public void setAvailableDays(List<AvailablePeriod> availableDays) { this.availableDays = availableDays; }
    public List<Image> getImages() { return images; }
    public void setImages(List<Image> images) { this.images = images; }
    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }
    public void setUser(User user) { this.user = user; }
}

