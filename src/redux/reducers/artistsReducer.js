const artists = (state = [], action) => {
    switch (action.type) {
        case `SET_ARTISTS`:
        return action.payload;
        default:
            return state;
    }
}

export default artists;