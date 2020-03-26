package com.example.demo.entities;

import javax.persistence.*;

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

    public int getPricepernight() {
        return pricepernight;
    }

    public void setPricepernight(int pricepernight) {
        this.pricepernight = pricepernight;
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

    public Residence() {}
}

