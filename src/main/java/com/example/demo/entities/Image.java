package com.example.demo.entities;


import javax.persistence.*;

@Entity
@Table(name = "images")
public class Image {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Column(name = "residence_id")
    private int residencyid;
    private String imagelink;

    public Image() {
    }

    // GETTERS AND SETTERS
    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }
    public String getImagelink() {
        return imagelink;
    }
    public void setImagelink(String imagelink) { this.imagelink = imagelink; }
    public int getResidencyId() {
        return residencyid;
    }
    public void setResidencyId(int residencyid) {
        this.residencyid = residencyid;
    }
}
