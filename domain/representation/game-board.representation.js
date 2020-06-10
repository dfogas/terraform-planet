"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var basic_planet_1 = require("../maps/basic-planet");
var temperature_representation_1 = require("./temperature.representation");
var oceans_representantion_1 = require("./oceans.representantion");
var oxygen_representation_1 = require("./oxygen.representation");
var name = 'Basic Planet';
exports.GameBoard = {
    name: name,
    worldMap: basic_planet_1.BasicPlanet,
    oxygen: oxygen_representation_1.OxygenTrack,
    temperature: temperature_representation_1.TemperatureTrack,
    oceans: oceans_representantion_1.OceansTrack
};
