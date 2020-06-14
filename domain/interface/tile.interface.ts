import {PlayerMarker} from "./player.marker.interface";

export interface Tile {
    type: string;
    marker?: PlayerMarker;
}