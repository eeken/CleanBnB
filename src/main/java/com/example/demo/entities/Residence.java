package com.example.demo.entities;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "residences")
public class Residence {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private int size;
    private int rooms;
    private int numberofguests;
    private int pricepernight;
    private int numberofbeds;

    public Residence(int id, int size, int rooms, int numberofguests, int pricepernight, int numberofbeds, Address address) {
        this.id = id;
        this.size = size;
        this.rooms = rooms;
        this.numberofguests = numberofguests;
        this.pricepernight = pricepernight;
        this.numberofbeds = numberofbeds;
        this.address = address;
    }

    @ManyToOne
    private Address address;

    public Address getAddress() {
        return address;
    }

    public void setAddress(Address address) {
        this.address = address;
    }

    public Residence() {
    }

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

    public int getNumberofguests() {
        return numberofguests;
    }

    public void setNumberofguests(int numberofguests) {
        this.numberofguests = numberofguests;
    }

    public int getRooms() {
        return rooms;
    }

    public void setRooms(int rooms) {
        this.rooms = rooms;
    }

    public int getPricepernight() {
        return pricepernight;
    }

    public void setPricepernight(int pricepernight) {
        this.pricepernight = pricepernight;
    }

    public int getNumberofbeds() {
        return numberofbeds;
    }

    public void setNumberofbeds(int numberofbeds) {
        this.numberofbeds = numberofbeds;
    }
}

