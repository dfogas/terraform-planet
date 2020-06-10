import {expect} from "chai";
import {Action} from "../domain/interface/action.interface";
import {PlanetBoard} from "../domain/interface/planet.board.interface";
import {planetBoard} from "../domain/reducers/planet-board.reducer";
import {Map} from 'immutable';
import {BasicPlanet} from "../domain/maps/basic-planet";

describe.only('Planet Board reducer', () => {

    describe('when place tile action', () => {

        it('should place tile', () => {
            const tileBeingPlaced = {
                type: 'forest',
                placement: {
                    x: 0,
                    y: 4
                }
            };
            const action: Action = {
                name: 'PLACE TILE',
                data: tileBeingPlaced
            };
            const state = Map({
                grid: BasicPlanet,
                globals: {}
            });
            const expected = {
                position: [0, 4],
                name: 'Arsia Mons',
                resources: {
                    plants: 2
                },
                tile: tileBeingPlaced
            };

            expect((planetBoard(action, state).toJS() as PlanetBoard).grid).deep.contains(expected);
        });
    });


});
