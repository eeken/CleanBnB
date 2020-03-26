package com.example.demo.entities;

import javax.persistence.*;

@Entity
@Table(name = "images")
public class Image {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private int residencyid;
    private String imagelink;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getResidencyid() {
        return residencyid;
    }

    public void setResidencyid(int residencyid) {
        this.residencyid = residencyid;
    }

    public String getImagelink() {
        return imagelink;
    }

    public void setImagelink(String imagelink) {
        this.imagelink = imagelink;
    }
}

