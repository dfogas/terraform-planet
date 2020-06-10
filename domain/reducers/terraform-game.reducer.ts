import {players} from "./players.reducer";
import {Map, List} from 'immutable';
import {Player} from "../interface/player.interface";
import {planetBoard} from './planet-board.reducer';

export function terraformGame(action, state = Map()) {

    return {
        planetBoard: planetBoard(action, state),
        players: players(action, List.of(state.get('players') as Player)),
    };
}
