"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var project_deck_1 = require("../../domain/globals/projects/project-deck");
var r_1 = require("../../domain/constants/r");
function getTestPlayer(color) {
    var defaultPlayerBoard = {
        resources: [
            {
                name: r_1.R.credits,
                stock: 30,
                production: 0
            },
            {
                name: r_1.R.steel,
                stock: 0,
                production: 0
            },
            {
                name: r_1.R.titanium,
                stock: 0,
                production: 0
            },
            {
                name: r_1.R.plants,
                stock: 0,
                production: 0
            },
            {
                name: r_1.R.energy,
                stock: 0,
                production: 0
            },
            {
                name: r_1.R.heat,
                stock: 0,
                production: 0
            }
        ]
    };
    return {
        name: 'Francesca',
        marker: {
            color: color
        },
        hand: [project_deck_1.ProjectDeck[0], project_deck_1.ProjectDeck[1], project_deck_1.ProjectDeck[2]],
        board: defaultPlayerBoard
    };
}
exports.getTestPlayer = getTestPlayer;
