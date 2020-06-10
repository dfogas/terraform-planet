import {Player} from "../interface/player.interface";
import {PlayerMarker} from "../representation/player-marker";

export function assignPlayerMarker(marker: PlayerMarker, player: Player) {
    return {
        ...player,
        marker
    };
}
