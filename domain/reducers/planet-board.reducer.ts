import {Map} from 'immutable';

export function planetBoard(action, state = Map()) {
    if (action.name === 'PLACE TILE') {
        return state
            .updateIn(['grid', findHex(action, state)], (val) => ({
                ...val,
                tile: action.data
            }));
    }

    return state;
}

function findHex(action, state) {
    const grid = (state.get('grid') as Array<{position: object}>);

    return grid.findIndex((hex) => {
        return hex.position[0] === action.data.placement.x && hex.position[1] === action.data.placement.y;
    });
}
