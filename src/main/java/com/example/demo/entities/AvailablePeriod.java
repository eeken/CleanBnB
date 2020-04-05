package com.example.demo.entities;

import javax.persistence.*;
import java.sql.Date;

@Entity
@Table(name = "available_periods")
public class AvailablePeriod {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Column(name="start_date")
    private Date startDate;
    @Column(name="end_date")
    private Date endDate;


    //RELATIONS
    @ManyToOne
    @JoinColumn(name="residence_id")
    private Residence residence;

    //CONSTRUCTORS
    public AvailablePeriod(Date startDate, Date endDate) {
        this.startDate = startDate;
        this.endDate = endDate;
    }

    //GETTERS AND SETTERS
    public int getId() { return id; }
    public void setId(int id) { this.id = id; }
    public Date getStartDate() { return startDate; }
    public void setStartDate(Date startDate) { this.startDate = startDate; }
    public Date getEndDate() { return endDate; }
    public void setEndDate(Date endDate) { this.endDate = endDate; }
}

