import {ProjectDeck} from "../../domain/globals/projects/project-deck";
import {RESOURCES} from "../../domain/constants/resources";

export function getTestPlayer(color) {
    const defaultPlayerBoard = {
        resources: [
            {
                name: RESOURCES.credits,
                stock: 30,
                production: 0
            },
            {
                name: RESOURCES.steel,
                stock: 0,
                production: 0
            },
            {
                name: RESOURCES.titanium,
                stock: 0,
                production: 0
            },
            {
                name: RESOURCES.plants,
                stock: 0,
                production: 0
            },
            {
                name: RESOURCES.energy,
                stock: 0,
                production: 0
            },
            {
                name: RESOURCES.heat,
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
