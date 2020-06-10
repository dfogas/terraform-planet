import * as Immutable from "immutable";
import {List} from "immutable";
import {Player} from "../interface/player.interface";
import {concat, difference} from 'ramda';
import {RESOURCES} from "../constants/resources";

export function players(action: any, state: Immutable.List<Player> = List.of()) {

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

function buildProject(action, state) {
    return findPlayer(action, state)
        .setIn([0, 'hand'], difference(findPlayer(action, state).getIn([0, 'hand']), [action.data.project]))
        .setIn([0, 'built'], concat(findPlayer(action, state).getIn([0, 'built']) || [], [action.data.project]))
        .updateIn([
            0,
            'board',
            'resources',
            findPlayer(action, state).getIn([0, 'board', 'resources']).findIndex((resource) => resource.name === RESOURCES.credits), 'stock'
        ], (val) => val - action.data.project.cost);
}

function accessPlayerHand(action, state) {
    return findPlayer(action, state).getIn([0, 'hand']);
}

function discardProjects(action, state) {
    return findPlayer(action,state)
        .update(0, (player) => {

            player.hand = player.hand.filter((project) => {
                return !action.data.projects.find((discarded) => {
                    return discarded.name === project.name;
                });
            });

            player.board.resources[
                findResourceInListOfResources('MegaCredits', player.board.resources)
                ].stock += action.data.projects.length;

            return player;
        });
}

function findResourceInListOfResources(resourceName, resources) {
    return resources.findIndex((resource) => {
        return resource.name === resourceName;
    });
}

function assignCompany(action, state) {
    return findPlayer(action, state)
        .update(0, (player) => {
            player.company = action.data.company;

            return player;
        });
}

function assignMarker(action, state) {
    return state
        .filter((player) => {
            return player.name === action.data.name;
        })
        .update(0, (player) => {
            player.marker = {
                color: action.data.color
            };
            return player;
        });
}

function dealProjects(action, state) {
    return findPlayer(action, state)
        .update(0, (player) => {
            player.hand = player.hand || [];
            player.hand = player.hand.concat(action.data.projects);

            return player;
        });
}

function findPlayer(action, state) {
    return state.filter((player) => {
        return player.marker.color === action.data.color;
    });
}

function findProjectInPlayerHand(action, state) {
    return findPlayer(action,state)
        .get('hand')
        .find((project) => project.name === action.data.project);
}