import {Player} from "../interface/player.interface";
import {Game} from "../interface/game.interface";

export function addPlayer(player: Player, game: Game) {
    return {...game, players: [...game.players, ...[player]]};
}
