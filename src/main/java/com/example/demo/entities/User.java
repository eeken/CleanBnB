package com.example.demo.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Column( name="first_name" )
    private String firstName;
    @Column( name="last_name" )
    private String lastName;
    private String email;
    private String password;

    //RELATIONS
    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name="user_id")
    private List<Booking> bookingList;

    @OneToMany
    @JoinColumn(name="user_id")
    private List<Residence> residenceList;



    //CONSTRUCTORS
    public User() {}
    public User(String firstName, String lastName, String email, String password) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
    }

    // GETTERS AND SETTERS
    @JsonIgnore
    public String getPassword() {
        return password;
    }
    @JsonProperty
    public void setPassword(String password) {
        this.password = password;
    }
    public List<Residence> getResidenceList() { return residenceList; }
    public void setResidenceList(List<Residence> residenceList) { this.residenceList = residenceList; }
    public long getId() {
        return id;
    }
    public void setId(long id) {
        this.id = id;
    }
    public String getFirstName() {
        return firstName;
    }
    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }
    public String getLastName() {
        return lastName;
    }
    public void setLastName(String lastName) {
        this.lastName = lastName;
    }
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public List<Booking> getBookingList() { return bookingList; }
    public void setBookingList(List<Booking> bookingList) { this.bookingList = bookingList; }
}