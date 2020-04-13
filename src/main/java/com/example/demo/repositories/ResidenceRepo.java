package com.example.demo.repositories;

import com.example.demo.entities.Residence;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.Date;
import java.util.List;

public interface ResidenceRepo extends CrudRepository<Residence, Integer> {

    public Residence findById(int id);

    // *********************** LOCATION SEARCH ONLY *********************** //
    @Query(value=
            "SELECT r FROM Residence r " +
            "WHERE" +
                    " r.address.country LIKE %:country% " +
            "OR" +
                    " r.address.city LIKE %:city%")

    public List<Residence> SearchLocationOnly(
            @Param("country") String addressCountry,
            @Param("city") String addressCity
    );


    // *********************** NUMBEROFGUESTS SEARCH ONLY *********************** //
    @Query(value =
            "SELECT r FROM Residence r " +
            "WHERE" +
                " r.address.country LIKE %:country% AND r.maxguests = :guests " +
            "OR" +
                " r.address.city LIKE %:city% AND r.maxguests = :guests")

    public List<Residence> SearchWithGuests(
            @Param("country") String addressCountry,
            @Param("guests") int maxguests,
            @Param("city") String addressCity
    );
}