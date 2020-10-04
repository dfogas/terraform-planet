import {ProjectDeck} from "../../domain/globals/projects/project-deck";
import {R} from "../../domain/constants/r";

export function getTestPlayer(color) {
    const defaultPlayerBoard = {
        resources: [
            {
                name: R.credits,
                stock: 30,
                production: 0
            },
            {
                name: R.steel,
                stock: 0,
                production: 0
            },
            {
                name: R.titanium,
                stock: 0,
                production: 0
            },
            {
                name: R.plants,
                stock: 0,
                production: 0
            },
            {
                name: R.energy,
                stock: 0,
                production: 0
            },
            {
                name: R.heat,
                stock: 0,
                production: 0
            }
        ]
    };

    return {
        name: 'Francesca',
        marker: {
            color
        },
        hand: [ProjectDeck[0], ProjectDeck[1], ProjectDeck[2]],
        board: defaultPlayerBoard
    };
}
