import {players} from '../domain/reducers/players.reducer';
import {List} from 'immutable';
import {ProjectDeck} from "../domain/globals/projects/project-deck";
import {Player} from "../domain/interface/player.interface";
import {expect} from 'chai';
import {getTestPlayer} from "./helpers/get-test-player";
import {RESOURCES} from "../domain/constants/resources";
import {Action} from "../domain/interface/action.interface";

describe('Players Reducer', () => {
    const initialState: any = List.of();

    describe('when called for the first time with no discernible action', () => {
        it('should initialize the state', () => {
            const action: Action = {
                name: 'NO_ACTION',
                data: {}
            };

            expect(players(action, initialState)).to.deep.equal(initialState);
        });
    });

    describe('when no discernible action passed', () => {

        it('should not change state', () => {
            const someState: any = [{prop: 'someProp'}];
            const expectedState = [...someState];
            const action = {
                name: 'NO_ACTION',
                data: {}
            };

            expect(players(action, someState)).to.deep.equal(expectedState);
        });
    });

    describe('when add player action passed', () => {

        it('should add player from action data', () => {
            const player = {
                name: 'Adam'
            };

            const action = {
                name: 'ADD PLAYER',
                data: player
            };
            const expectedState = [
                player
            ];

            expect(players(action, List.of()).toJS()).to.deep.equal(expectedState);
        });

        describe('and when you add two players', () => {
            it('should add both', () => {
                const player1 = {
                    name: 'Adam'
                };
                const player2 = {
                    name: 'Kimberley'
                };

                const action = {
                    name: 'ADD PLAYER',
                    data: [player1, player2]
                };
                const expectedState = [
                    player1, player2
                ];

                expect(players(action, List.of()).toJS()).to.deep.equal(expectedState);
            });
        });
    });

    describe('when assign marker action passed', () => {
        const player = {
            name: 'Constantin',
        };
        const color = 'pink';
        const state = List.of(player);

        const action = {
            name: 'ASSIGN MARKER',
            data: {
                name: 'Constantin',
                color
            }
        };

        const expectedState = [{
            ...player,
            marker: {
                color
            }
        }];

        expect(players(action, state).toJS()).to.deep.equal(expectedState);
    });

    describe('when assign company action passed', () => {

        it('should assign company to player from action data', () => {
            const color = 'dark blue';
            const player: any = {
                name: 'Adam',
                marker: {
                    color
                }
            };
            const company = {
                name: 'Ecoline'
            };
            const playerAfterCompanyAssigned: any = {
                name: 'Adam',
                marker: {
                    color
                },
                company
            };
            const action = {
                name: 'ASSIGN COMPANY',
                data: {
                    color,
                    company
                }
            };
            const state = List.of(player);
            const expectedState = [
                playerAfterCompanyAssigned
            ];

            expect(players(action, state).toJS()).to.deep.equal(expectedState);
        });
    });

    describe('when deal projects passed', () => {

        it('should add projects to player hand', () => {
            const project1 = ProjectDeck[0];
            const project2 = ProjectDeck[1];
            const color = 'yellow';
            const player: Player = {
                name: 'Denise',
                marker: {
                    color
                }
            };
            const action = {
                name: 'DEAL PROJECTS',
                data: {
                    projects: [project1, project2],
                    color
                }
            };
            const state = List.of(player);

            expect(players(action, state).toJS()[0].hand).deep.contains(project1);
            expect(players(action, state).toJS()[0].hand).deep.contains(project2);
        });
    });

    describe('when discard projects passed', () => {

        it('should discard projects from player hand', () => {
            const color = 'green';
            const player: Player = getTestPlayer(color);
            const action = {
                name: 'DISCARD PROJECTS',
                data: {
                    color,
                    projects: [ProjectDeck[1], ProjectDeck[2]]
                }
            };

            const state = List.of(player);

            expect(players(action, state).toJS()[0].hand).deep.contains(ProjectDeck[0]);
            expect(players(action, state).toJS()[0].hand).not.deep.contains(ProjectDeck[1]);
            expect(players(action, state).toJS()[0].hand).not.deep.contains(ProjectDeck[2]);
        });

        it('should add 1 MegaCredit per discarded project to players stock', () => {
            const color = 'green';
            const player: Player = getTestPlayer(color);
            const action = {
                name: 'DISCARD PROJECTS',
                data: {
                    color,
                    projects: [ProjectDeck[1], ProjectDeck[2]]
                }
            };
            const state = List.of(player);
            const resourceStockAfterChange = player.board.resources[0].stock + action.data.projects.length;

            expect(findResourceStock(RESOURCES.credits, action, state))
                .to.equal(resourceStockAfterChange);
        });
    });

    describe('when build project passed', () => {

        it('should build project from player hand', () => {
            const color = 'green';
            const project = ProjectDeck[2];
            const player: Player = getTestPlayer(color);
            const action = {
                name: 'BUILD PROJECT',
                data: {
                    color,
                    project
                }
            };
            const state = List.of(player);

            expect(players(action, state).toJS()[0].built).to.deep.equal([project]);
        });

        it('should remove only built project from player hand', () => {
            const color = 'green';
            const project = ProjectDeck[2];
            const player: Player = getTestPlayer(color);
            const action = {
                name: 'BUILD PROJECT',
                data: {
                    color,
                    project
                }
            };
            const state = List.of(player);

            expect(players(action, state).toJS()[0].hand).to.deep.equal([ProjectDeck[0], ProjectDeck[1]]);
        });

        it('should deduct project cost from player resources', () => {
            const color = 'black';
            const project = ProjectDeck[2];
            const player: Player = getTestPlayer(color);
            const action = {
                name: 'BUILD PROJECT',
                data: {
                    color,
                    project
                }
            };
            const state = List.of(player);

            expect(players(action, state).toJS()[0].board.resources.find((resource) => resource.name === RESOURCES.credits).stock)
                .to.equal(player.board.resources.find((resource) => resource.name === RESOURCES.credits).stock - project.cost);
        });
    });
});

function findResourceStock(resourceName: string, action, state) {
    return players(action, state).toJS()[0].board.resources.find((resource) => resource.name === RESOURCES.credits).stock;
}
