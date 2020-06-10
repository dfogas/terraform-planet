export function assignGameBoard(board, game) {
    console.info({
        ...game,
        board
    });

    return {
        ...game,
        board
    };
};
