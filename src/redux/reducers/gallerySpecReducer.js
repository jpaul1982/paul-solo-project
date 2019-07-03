const gallerySpec = (state = [], action) => {
    switch (action.type) {
        case `SET_SPEC`:
        return action.payload;
        default:
            return state;
    }
}

export default gallerySpec;