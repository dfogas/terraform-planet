"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createStore = function (reducer, initialState) {
    if (initialState === void 0) { initialState = {}; }
    var state;
    var listeners = [];
    var getState = function () { return state; };
    var dispatch = function (action) {
        state = reducer(action, state);
        listeners.forEach(function (listener) { return listener(); });
    };
    var subscribe = function (listener) {
        listeners.push(listener);
        return function () {
            listeners = listeners.filter(function (l) { return l !== listener; });
        };
    };
    dispatch(initialState);
    return {
        getState: getState,
        dispatch: dispatch,
        subscribe: subscribe
    };
};
