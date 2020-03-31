package com.example.demo.entities;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "residences")
@SecondaryTable(name="addresses")
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


    // FROM THE SECONDARY TABLE ADDRESSES
    @Column(table="addresses")
    private String county;
    @Column(table="addresses")
    private String city;
    @Column(table="addresses")
    private String country;
    @Column(table="addresses")
    private String street;

    //SETTERS AND GETTERS FOR PRIMARY TABLE RESIDENCES
    public int getPricepernight() { return pricepernight; }

    public void setPricepernight(int pricepernight) { this.pricepernight = pricepernight; }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getSize() {
        return size;
    }

    public void setSize(int size) {
        this.size = size;
    }

    public int getRooms() {
        return rooms;
    }

    public void setRooms(int rooms) {
        this.rooms = rooms;
    }

    public int getMaxGuests() {
        return maxguests;
    }

    public void setMaxGuests(int maxguests) {
        this.maxguests = maxguests;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public int getNumberofbeds() {
        return numberofbeds;
    }

    public void setNumberofbeds(int numberofbeds) {
        this.numberofbeds = numberofbeds;
    }

    // GETTERS ADDRESSES
    public String getCounty() { return county; }

    public String getCity() { return city; }

    public String getCountry() { return country; }

    public String getStreet() { return street; }

    public Residence() {}
}

