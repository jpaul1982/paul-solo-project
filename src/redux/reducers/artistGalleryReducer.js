const artistGallery = (state = [], action) => {
    console.log('setgallery',action.payload);
    
    switch (action.type) {
        case `SET_GALLERY`:
        return action.payload;
        default:
            return state;
    }
}

export default artistGallery;