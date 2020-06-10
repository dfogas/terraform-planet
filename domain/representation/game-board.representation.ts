import {BasicPlanet} from "../maps/basic-planet";
import {TemperatureTrack} from "./temperature.representation";
import {OceansTrack} from "./oceans.representantion";
import {OxygenTrack} from "./oxygen.representation";

const name = 'Basic Planet';

export const GameBoard = {
    name: name,
    worldMap: BasicPlanet,
    oxygen: OxygenTrack,
    temperature: TemperatureTrack,
    oceans: OceansTrack
};
