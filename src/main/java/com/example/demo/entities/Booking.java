package com.example.demo.entities;

import javax.persistence.*;
import java.sql.Date;

@Entity
@Table(name = "bookings")
public class Booking {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private int checkin;
    private int checkout;
    private int totalprice;
    private int residenceid;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getCheckin() {
        return checkin;
    }

    public void setCheckin(int checkin) {
        this.checkin = checkin;
    }

    public int getCheckout() {
        return checkout;
    }

    public void setCheckout(int checkout) {
        this.checkout = checkout;
    }

    public int getTotalprice() {
        return totalprice;
    }

    public void setTotalprice(int totalprice) {
        this.totalprice = totalprice;
    }

    public int getResidenceid() {
        return residenceid;
    }

    public void setResidenceid(int residenceid) {
        this.residenceid = residenceid;
    }
}

