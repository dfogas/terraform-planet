"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var planet_board_reducer_1 = require("../domain/reducers/planet-board.reducer");
var immutable_1 = require("immutable");
var basic_planet_1 = require("../domain/maps/basic-planet");
describe.only('Planet Board reducer', function () {
    describe('when place tile action', function () {
        it('should place tile', function () {
            var tileBeingPlaced = {
                type: 'forest',
                placement: {
                    x: 0,
                    y: 4
                }
            };
            var action = {
                name: 'PLACE TILE',
                data: tileBeingPlaced
            };
            var state = immutable_1.Map({
                grid: basic_planet_1.BasicPlanet,
                globals: {}
            });
            var expected = {
                position: [0, 4],
                name: 'Arsia Mons',
                resources: {
                    plants: 2
                },
                tile: tileBeingPlaced
            };
            chai_1.expect(planet_board_reducer_1.planetBoard(action, state).toJS().grid).deep.contains(expected);
        });
    });
});
