"use strict";
exports.__esModule = true;
function placeTile(placement, gameBoard) {
    var gameBoardTile = gameBoard.worldMap.find(function (mapTile) {
        return placement.position[0] === mapTile.position[0] && placement.position[1] === mapTile.position[1];
    });
    gameBoardTile.marker = placement.marker;
    gameBoardTile.tile = placement.tile;
    // Object.assign(placement, gameBoardTile);
    return gameBoard;
}
exports.placeTile = placeTile;
