package com.example.demo.repositories;

import com.example.demo.entities.Residence;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
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

    @Query( value =
            "SELECT * FROM residences " +
                    "LEFT JOIN available_periods ON residences.id = available_periods.residence_id " +
                    "LEFT JOIN bookings ON residences.id = bookings.residence_id " +
            "WHERE " +
                    " :searchDateStart >= available_periods.start_date AND :searchDateEnd <= available_periods.end_date" +
                    " AND bookings.check_in is NULL OR :searchDateStart NOT BETWEEN bookings.check_in AND bookings.check_out" +
                    " AND bookings.check_out is NULL OR :searchDateEnd NOT BETWEEN bookings.check_in AND bookings.check_out",
            nativeQuery = true
    )
    public List<Residence> searchForCheckInAndCheckOut(
            @Param("searchDateStart") int searchDateStart,
            @Param("searchDateEnd") int searchDateEnd
    );

}