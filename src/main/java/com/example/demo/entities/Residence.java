package com.example.demo.entities;

import javax.persistence.*;

@Entity
@Table(name = "residences")
public class Residence {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private int addressid;
    private int size;
    private int numberofrooms;
    private int maxguests;
    private int numberofbedrooms;
    private int numberofbeds;
    private int numberofbathrooms;
    private int pricepernight;
    private int amenityprofileid;
    private int userid;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getAddressid() {
        return addressid;
    }

    public void setAddressid(int addressid) {
        this.addressid = addressid;
    }

    public int getSize() {
        return size;
    }

    public void setSize(int size) {
        this.size = size;
    }

    public int getNumberofrooms() {
        return numberofrooms;
    }

    public void setNumberofrooms(int numberofrooms) {
        this.numberofrooms = numberofrooms;
    }

    public int getMaxguests() {
        return maxguests;
    }

    public void setMaxguests(int maxguests) {
        this.maxguests = maxguests;
    }

    public int getNumberofbedrooms() {
        return numberofbedrooms;
    }

    public void setNumberofbedrooms(int numberofbedrooms) {
        this.numberofbedrooms = numberofbedrooms;
    }

    public int getNumberofbeds() {
        return numberofbeds;
    }

    public void setNumberofbeds(int numberofbeds) {
        this.numberofbeds = numberofbeds;
    }

    public int getNumberofbathrooms() {
        return numberofbathrooms;
    }

    public void setNumberofbathrooms(int numberofbathrooms) {
        this.numberofbathrooms = numberofbathrooms;
    }

    public int getPricepernight() {
        return pricepernight;
    }

    public void setPricepernight(int pricepernight) {
        this.pricepernight = pricepernight;
    }

    public int getAmenityprofileid() {
        return amenityprofileid;
    }

    public void setAmenityprofileid(int amenityprofileid) {
        this.amenityprofileid = amenityprofileid;
    }

    public int getUserid() {
        return userid;
    }

    public void setUserid(int userid) {
        this.userid = userid;
    }

    public Residence() {}
}

