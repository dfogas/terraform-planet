"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var project_deck_1 = require("../../domain/globals/projects/project-deck");
var resources_1 = require("../../domain/constants/resources");
function getTestPlayer(color) {
    var defaultPlayerBoard = {
        resources: [
            {
                name: resources_1.RESOURCES.credits,
                stock: 30,
                production: 0
            },
            {
                name: resources_1.RESOURCES.steel,
                stock: 0,
                production: 0
            },
            {
                name: resources_1.RESOURCES.titanium,
                stock: 0,
                production: 0
            },
            {
                name: resources_1.RESOURCES.plants,
                stock: 0,
                production: 0
            },
            {
                name: resources_1.RESOURCES.energy,
                stock: 0,
                production: 0
            },
            {
                name: resources_1.RESOURCES.heat,
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
