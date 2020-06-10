import {Resource} from "./resource";
import {DefaultPlayerBoard} from "./player-board.representation";
import {PlayerMarker} from "./player-marker";

export interface Player {
    hand: Array<object>;
    board: Array<Resource>;
    projects: Array<object>
    marker: PlayerMarker,
    terraformRating: number;
}

const player: Player = {
    hand: [],
    board: DefaultPlayerBoard,
    projects: [],
    marker: {
        color: ''
    },
    terraformRating: 20
};
