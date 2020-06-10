"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var players_reducer_1 = require("./players.reducer");
var immutable_1 = require("immutable");
var planet_board_reducer_1 = require("./planet-board.reducer");
function terraformGame(action, state) {
    if (state === void 0) { state = immutable_1.Map(); }
    return {
        planetBoard: planet_board_reducer_1.planetBoard(action, state),
        players: players_reducer_1.players(action, immutable_1.List.of(state.get('players'))),
    };
}
exports.terraformGame = terraformGame;
