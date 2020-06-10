import {assignGameBoard} from "./assign-game-board";
import {addPlayer} from "./add-player";
import {assignCompany} from "./assign-company";
import {dealProjects} from "./deal-projects";
import {Companies} from "../globals/companies/companies";
import {assignPlayerMarker} from "./assign-player-marker";

export function setupGame(players, gameBoard, game) {
    assignGameBoard(gameBoard, game);

    for (const player of players) {
        const playerIndex = players.indexOf(player);

        assignPlayerMarker({
                color: game.playerColors[playerIndex]
            },
            player
        );
        addPlayer(player, game);
        // assignCompany(Companies[0], player);
        // dealProjects(10, player);
    }

    return game;
}
