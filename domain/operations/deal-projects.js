"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var project_deck_1 = require("../globals/projects/project-deck");
function dealProjects(quantity, player) {
    var project;
    for (var i = 0; i++; i <= quantity) {
        project = project_deck_1.ProjectDeck.shift();
        player.hand.push(project);
    }
    return player;
}
exports.dealProjects = dealProjects;
