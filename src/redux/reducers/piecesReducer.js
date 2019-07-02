const pieces = (state = [], action) => {
    switch (action.type) {
        case `SET_PIECES`:
        return action.payload;
        default:
            return state;
    }
}

export default pieces;