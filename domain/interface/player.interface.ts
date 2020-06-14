import {PlayerMarker} from "./player.marker.interface";
import {Company} from "./company.interface";
import {Project} from "./project.interface";
import {PlayerBoard} from "./player.board.interface";

export interface Player {
    name: string;
    board?: PlayerBoard;
    marker?: PlayerMarker;
    company?: Company;
    hand?: Array<Project>;
    built?: Array<Project>;
}