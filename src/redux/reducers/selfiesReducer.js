const selfies = (state = [], action) => {
    console.log('setgallery',action.payload);
    
    switch (action.type) {
        case `SET_SELFIES`:
        return action.payload;
        default:
            return state;
    }
}

export default selfies;