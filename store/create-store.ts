export const createStore = (reducer, initialState = {}) => {
    let state;
    let listeners = [];

    const getState = () => state;

    const dispatch = (action) => {
        state = reducer(action, state);
        listeners.forEach((listener) => listener());
    };

    const subscribe = (listener) => {
        listeners.push(listener);

        return () => {
            listeners = listeners.filter((l) => l !== listener);
        };
    };

    dispatch(initialState);

    return {
        getState,
        dispatch,
        subscribe
    };
};
