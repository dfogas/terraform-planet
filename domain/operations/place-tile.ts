import {Tile} from "../representation/tile";
import {PlayerMarker} from "../representation/player-marker";

interface Placement {
    position: [number, number];
    marker: PlayerMarker;
    tile: Tile;
}

export function placeTile(placement: Placement, gameBoard: any) {
    const gameBoardTile = gameBoard.worldMap.find((mapTile) => {
        return placement.position[0] === mapTile.position[0] && placement.position[1] === mapTile.position[1];
    });

    gameBoardTile.marker = placement.marker;
    gameBoardTile.tile = placement.tile;

    // Object.assign(placement, gameBoardTile);

    return gameBoard;
}
