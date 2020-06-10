"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var immutable_1 = require("immutable");
var ramda_1 = require("ramda");
var resources_1 = require("../constants/resources");
function players(action, state) {
    if (state === void 0) { state = immutable_1.List.of(); }
    switch (action.name) {
        case 'ADD PLAYER':
            return state.concat(action.data);
        case 'ASSIGN MARKER':
            return assignMarker(action, state);
        case 'ASSIGN COMPANY':
            return assignCompany(action, state);
        case 'DEAL PROJECTS':
            return dealProjects(action, state);
        case 'DISCARD PROJECTS':
            return discardProjects(action, state);
        case 'BUILD PROJECT':
            return buildProject(action, state);
        case 'INCOME':
            return state;
        default:
            return state;
    }
}
exports.players = players;
function buildProject(action, state) {
    return findPlayer(action, state)
        .setIn([0, 'hand'], ramda_1.difference(findPlayer(action, state).getIn([0, 'hand']), [action.data.project]))
        .setIn([0, 'built'], ramda_1.concat(findPlayer(action, state).getIn([0, 'built']) || [], [action.data.project]))
        .updateIn([
        0,
        'board',
        'resources',
        findPlayer(action, state).getIn([0, 'board', 'resources']).findIndex(function (resource) { return resource.name === resources_1.RESOURCES.credits; }), 'stock'
    ], function (val) { return val - action.data.project.cost; });
}
function accessPlayerHand(action, state) {
    return findPlayer(action, state).getIn([0, 'hand']);
}
function discardProjects(action, state) {
    return findPlayer(action, state)
        .update(0, function (player) {
        player.hand = player.hand.filter(function (project) {
            return !action.data.projects.find(function (discarded) {
                return discarded.name === project.name;
            });
        });
        player.board.resources[findResourceInListOfResources('MegaCredits', player.board.resources)].stock += action.data.projects.length;
        return player;
    });
}
function findResourceInListOfResources(resourceName, resources) {
    return resources.findIndex(function (resource) {
        return resource.name === resourceName;
    });
}
function assignCompany(action, state) {
    return findPlayer(action, state)
        .update(0, function (player) {
        player.company = action.data.company;
        return player;
    });
}
function assignMarker(action, state) {
    return state
        .filter(function (player) {
        return player.name === action.data.name;
    })
        .update(0, function (player) {
        player.marker = {
            color: action.data.color
        };
        return player;
    });
}
function dealProjects(action, state) {
    return findPlayer(action, state)
        .update(0, function (player) {
        player.hand = player.hand || [];
        player.hand = player.hand.concat(action.data.projects);
        return player;
    });
}
function findPlayer(action, state) {
    return state.filter(function (player) {
        return player.marker.color === action.data.color;
    });
}
function findProjectInPlayerHand(action, state) {
    return findPlayer(action, state)
        .get('hand')
        .find(function (project) { return project.name === action.data.project; });
}
