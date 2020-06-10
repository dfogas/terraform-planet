"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var assign_game_board_1 = require("./assign-game-board");
var add_player_1 = require("./add-player");
var assign_player_marker_1 = require("./assign-player-marker");
function setupGame(players, gameBoard, game) {
    assign_game_board_1.assignGameBoard(gameBoard, game);
    for (var _i = 0, players_1 = players; _i < players_1.length; _i++) {
        var player = players_1[_i];
        var playerIndex = players.indexOf(player);
        assign_player_marker_1.assignPlayerMarker({
            color: game.playerColors[playerIndex]
        }, player);
        add_player_1.addPlayer(player, game);
        // assignCompany(Companies[0], player);
        // dealProjects(10, player);
    }
    return game;
}
exports.setupGame = setupGame;
