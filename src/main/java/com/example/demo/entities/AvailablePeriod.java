package com.example.demo.entities;

import javax.persistence.*;

@Entity
@Table(name = "availableperiods")
public class AvailablePeriod {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private int residenceid;
    private int startdate;
    private int enddate;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getResidenceid() {
        return residenceid;
    }

    public void setResidenceid(int residenceid) {
        this.residenceid = residenceid;
    }

    public int getStartdate() {
        return startdate;
    }

    public void setStartdate(int startdate) {
        this.startdate = startdate;
    }

    public int getEnddate() {
        return enddate;
    }

    public void setEnddate(int enddate) {
        this.enddate = enddate;
    }

    public AvailablePeriod() {}
}

