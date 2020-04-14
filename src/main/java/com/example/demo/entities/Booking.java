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
    private int checkIn;
    @Column(name="check_out")
    private int checkOut;
    @Column(name="total_price")
    private int totalPrice;
    @Column(name="residence_id")
    private int residenceId;
    @Column(name="user_id")
    private int userId;

    //CONSTRUCTORS
    public Booking() { }

    // GETTERS AND SETTERS
    public int getId() { return id; }
    public void setId(int id) { this.id = id; }
    //public Date getCheckIn() { return checkIn; }
    //public void setCheckIn(Date checkIn) { this.checkIn = checkIn; }
    //public Date getCheckOut() { return checkOut; }
    //public void setCheckOut(Date checkOut) { this.checkOut = checkOut; }
    public int getTotalPrice() { return totalPrice; }
    public void setTotalPrice(int totalPrice) { this.totalPrice = totalPrice; }

    public int getCheckIn() {
        return checkIn;
    }

    public void setCheckIn(int checkIn) {
        this.checkIn = checkIn;
    }

    public int getCheckOut() {
        return checkOut;
    }

    public void setCheckOut(int checkOut) {
        this.checkOut = checkOut;
    }

    public int getResidenceId() {
        return residenceId;
    }

    public void setResidenceId(int residenceId) {
        this.residenceId = residenceId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }
}

