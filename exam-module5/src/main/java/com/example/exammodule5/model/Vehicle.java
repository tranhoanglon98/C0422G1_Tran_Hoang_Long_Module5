package com.example.exammodule5.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
public class Vehicle {

    @Id
    private String licensePlates;

    @ManyToOne
    @JoinColumn(name = "type_id")
    private VehicleType type;

}
