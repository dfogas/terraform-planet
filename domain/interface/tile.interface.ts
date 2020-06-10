import {PlayerMarker} from "../representation/player-marker";

export interface Tile {
    type: string;
    marker?: PlayerMarker;
}