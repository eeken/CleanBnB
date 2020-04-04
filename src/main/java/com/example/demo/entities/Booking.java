package com.example.demo.entities;

import javax.persistence.*;
import java.sql.Date;

@Entity
@Table(name = "bookings")
public class Booking {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Column(name="check_in")
    private Date checkIn;
    @Column(name="check_out")
    private Date checkOut;
    @Column(name="total_price")
    private int totalPrice;


    //RELATIONS
    @ManyToOne
    private User user;

    @ManyToOne
    private Residence residence;


    // GETTERS AND SETTERS
    public int getId() { return id; }
    public void setId(int id) { this.id = id; }
    public Date getCheckIn() { return checkIn; }
    public void setCheckIn(Date checkIn) { this.checkIn = checkIn; }
    public Date getCheckOut() { return checkOut; }
    public void setCheckOut(Date checkOut) { this.checkOut = checkOut; }
    public int getTotalPrice() { return totalPrice; }
    public void setTotalPrice(int totalPrice) { this.totalPrice = totalPrice; }
    public User getUser() { return user; }
    public void setUser(User user) { this.user = user; }
    public Residence getResidence() { return residence; }
    public void setResidence(Residence residence) { this.residence = residence; }
}

