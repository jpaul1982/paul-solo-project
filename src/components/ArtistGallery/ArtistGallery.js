import React, { Component } from 'react';
import { connect } from 'react-redux';

class ArtistGallery extends Component {
    render() {
        return (
            <>
                <pre>{JSON.stringify(this.props.reduxState.pieces, null, 2)}</pre>

            </>
        )
    }
}

const mapStateToProps = (reduxState) => ({
    reduxState
})

export default connect(mapStateToProps)(ArtistGallery);