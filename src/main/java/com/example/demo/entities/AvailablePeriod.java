package com.example.demo.entities;

import javax.persistence.*;

@Entity
@Table(name = "addresses")
public class AvailablePeriod {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String county;
    private String city;
    private String country;
    private String street;
    private String streetnumber;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getCounty() {
        return county;
    }

    public void setCounty(String county) {
        this.county = county;
    }

    public String getStreet() {
        return street;
    }

    public void setStreet(String street) {
        this.street = street;
    }

    public String getStreetNumber() {
        return streetnumber;
    }

    public void setStreetNumber(String streetnumber) {
        this.streetnumber = streetnumber;
    }

    public AvailablePeriod() {}
}

