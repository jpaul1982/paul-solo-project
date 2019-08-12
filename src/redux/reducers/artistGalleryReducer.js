const artistGallery = (state = [], action) => {
    console.log('setgallery',action.payload);
    
    switch (action.type) {
        case `SET_GALLERY`:
        return action.payload;
        case `CLEAR_STATE`:
            return state;
        default:
            return state;
   }
}

export default artistGallery;