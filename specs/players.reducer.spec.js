"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var players_reducer_1 = require("../domain/reducers/players.reducer");
var immutable_1 = require("immutable");
var project_deck_1 = require("../domain/globals/projects/project-deck");
var chai_1 = require("chai");
var get_test_player_1 = require("./helpers/get-test-player");
var resources_1 = require("../domain/constants/r");
describe('Players Reducer', function () {
    var initialState = immutable_1.List.of();
    describe('when called for the first time with no discernible action', function () {
        it('should initialize the state', function () {
            var action = {
                name: 'NO_ACTION',
                data: {}
            };
            chai_1.expect(players_reducer_1.players(action, initialState)).to.deep.equal(initialState);
        });
    });
    describe('when no discernible action passed', function () {
        it('should not change state', function () {
            var someState = [{ prop: 'someProp' }];
            var expectedState = __spreadArrays(someState);
            var action = {
                name: 'NO_ACTION',
                data: {}
            };
            chai_1.expect(players_reducer_1.players(action, someState)).to.deep.equal(expectedState);
        });
    });
    describe('when add player action passed', function () {
        it('should add player from action data', function () {
            var player = {
                name: 'Adam'
            };
            var action = {
                name: 'ADD PLAYER',
                data: player
            };
            var expectedState = [
                player
            ];
            chai_1.expect(players_reducer_1.players(action, immutable_1.List.of()).toJS()).to.deep.equal(expectedState);
        });
        describe('and when you add two players', function () {
            it('should add both', function () {
                var player1 = {
                    name: 'Adam'
                };
                var player2 = {
                    name: 'Kimberley'
                };
                var action = {
                    name: 'ADD PLAYER',
                    data: [player1, player2]
                };
                var expectedState = [
                    player1, player2
                ];
                chai_1.expect(players_reducer_1.players(action, immutable_1.List.of()).toJS()).to.deep.equal(expectedState);
            });
        });
    });
    describe('when assign marker action passed', function () {
        var player = {
            name: 'Constantin',
        };
        var color = 'pink';
        var state = immutable_1.List.of(player);
        var action = {
            name: 'ASSIGN MARKER',
            data: {
                name: 'Constantin',
                color: color
            }
        };
        var expectedState = [__assign(__assign({}, player), { marker: {
                    color: color
                } })];
        chai_1.expect(players_reducer_1.players(action, state).toJS()).to.deep.equal(expectedState);
    });
    describe('when assign company action passed', function () {
        it('should assign company to player from action data', function () {
            var color = 'dark blue';
            var player = {
                name: 'Adam',
                marker: {
                    color: color
                }
            };
            var company = {
                name: 'Ecoline'
            };
            var playerAfterCompanyAssigned = {
                name: 'Adam',
                marker: {
                    color: color
                },
                company: company
            };
            var action = {
                name: 'ASSIGN COMPANY',
                data: {
                    color: color,
                    company: company
                }
            };
            var state = immutable_1.List.of(player);
            var expectedState = [
                playerAfterCompanyAssigned
            ];
            chai_1.expect(players_reducer_1.players(action, state).toJS()).to.deep.equal(expectedState);
        });
    });
    describe('when deal projects passed', function () {
        it('should add projects to player hand', function () {
            var project1 = project_deck_1.ProjectDeck[0];
            var project2 = project_deck_1.ProjectDeck[1];
            var color = 'yellow';
            var player = {
                name: 'Denise',
                marker: {
                    color: color
                }
            };
            var action = {
                name: 'DEAL PROJECTS',
                data: {
                    projects: [project1, project2],
                    color: color
                }
            };
            var state = immutable_1.List.of(player);
            chai_1.expect(players_reducer_1.players(action, state).toJS()[0].hand).deep.contains(project1);
            chai_1.expect(players_reducer_1.players(action, state).toJS()[0].hand).deep.contains(project2);
        });
    });
    describe('when discard projects passed', function () {
        it('should discard projects from player hand', function () {
            var color = 'green';
            var player = get_test_player_1.getTestPlayer(color);
            var action = {
                name: 'DISCARD PROJECTS',
                data: {
                    color: color,
                    projects: [project_deck_1.ProjectDeck[1], project_deck_1.ProjectDeck[2]]
                }
            };
            var state = immutable_1.List.of(player);
            chai_1.expect(players_reducer_1.players(action, state).toJS()[0].hand).deep.contains(project_deck_1.ProjectDeck[0]);
            chai_1.expect(players_reducer_1.players(action, state).toJS()[0].hand).not.deep.contains(project_deck_1.ProjectDeck[1]);
            chai_1.expect(players_reducer_1.players(action, state).toJS()[0].hand).not.deep.contains(project_deck_1.ProjectDeck[2]);
        });
        it('should add 1 MegaCredit per discarded project to players stock', function () {
            var color = 'green';
            var player = get_test_player_1.getTestPlayer(color);
            var action = {
                name: 'DISCARD PROJECTS',
                data: {
                    color: color,
                    projects: [project_deck_1.ProjectDeck[1], project_deck_1.ProjectDeck[2]]
                }
            };
            var state = immutable_1.List.of(player);
            var resourceStockAfterChange = player.board.resources[0].stock + action.data.projects.length;
            chai_1.expect(findResourceStock(resources_1.R.credits, action, state))
                .to.equal(resourceStockAfterChange);
        });
    });
    describe('when build project passed', function () {
        it('should build project from player hand', function () {
            var color = 'green';
            var project = project_deck_1.ProjectDeck[2];
            var player = get_test_player_1.getTestPlayer(color);
            var action = {
                name: 'BUILD PROJECT',
                data: {
                    color: color,
                    project: project
                }
            };
            var state = immutable_1.List.of(player);
            chai_1.expect(players_reducer_1.players(action, state).toJS()[0].built).to.deep.equal([project]);
        });
        it('should remove only built project from player hand', function () {
            var color = 'green';
            var project = project_deck_1.ProjectDeck[2];
            var player = get_test_player_1.getTestPlayer(color);
            var action = {
                name: 'BUILD PROJECT',
                data: {
                    color: color,
                    project: project
                }
            };
            var state = immutable_1.List.of(player);
            chai_1.expect(players_reducer_1.players(action, state).toJS()[0].hand).to.deep.equal([project_deck_1.ProjectDeck[0], project_deck_1.ProjectDeck[1]]);
        });
        it('should deduct project cost from player resources', function () {
            var color = 'black';
            var project = project_deck_1.ProjectDeck[2];
            var player = get_test_player_1.getTestPlayer(color);
            var action = {
                name: 'BUILD PROJECT',
                data: {
                    color: color,
                    project: project
                }
            };
            var state = immutable_1.List.of(player);
            chai_1.expect(players_reducer_1.players(action, state).toJS()[0].board.resources.find(function (resource) { return resource.name === resources_1.R.credits; }).stock)
                .to.equal(player.board.resources.find(function (resource) { return resource.name === resources_1.R.credits; }).stock - project.cost);
        });
    });
});
function findResourceStock(resourceName, action, state) {
    return players_reducer_1.players(action, state).toJS()[0].board.resources.find(function (resource) { return resource.name === resources_1.R.credits; }).stock;
}
