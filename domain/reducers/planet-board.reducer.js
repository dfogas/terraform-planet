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
Object.defineProperty(exports, "__esModule", { value: true });
var immutable_1 = require("immutable");
function planetBoard(action, state) {
    if (state === void 0) { state = immutable_1.Map(); }
    if (action.name === 'PLACE TILE') {
        return state
            .updateIn(['grid', findHex(action, state)], function (val) { return (__assign(__assign({}, val), { tile: action.data })); });
    }
    return state;
}
exports.planetBoard = planetBoard;
function findHex(action, state) {
    var grid = state.get('grid');
    return grid.findIndex(function (hex) {
        return hex.position[0] === action.data.placement.x && hex.position[1] === action.data.placement.y;
    });
}
