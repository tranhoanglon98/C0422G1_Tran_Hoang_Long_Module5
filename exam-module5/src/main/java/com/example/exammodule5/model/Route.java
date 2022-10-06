package com.example.exammodule5.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Setter
@Getter
public class Route {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String startTime;

    private String departureTime;

    private String arrivalTime;

    @ManyToOne
    @JoinColumn(name = "vehicle_license_plates")
    private Vehicle vehicle;

    @ManyToOne
    @JoinColumn(name = "departure_location_id")
    private Location departureLocation;

    @ManyToOne
    @JoinColumn(name = "arrival_location_id")
    private Location arrivalLocation;

}
