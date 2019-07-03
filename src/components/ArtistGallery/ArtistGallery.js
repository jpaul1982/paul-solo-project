import React, { Component } from 'react';
import { connect } from 'react-redux';
import './ArtistGallery.css';

class ArtistGallery extends Component {

    handleClick = (galleryImageId) => {
        console.log(this.props.gallery);
        
        this.props.history.push('/gallerySpec');
        this.props.dispatch({type:`FETCH_GALLERY_SPEC`, payload:{galleryImageId}})

    }
    render() {
        return (
            <div>

                {this.props.gallery.length && this.props.gallery.map(galleryImage => {
                    return <img key={galleryImage.id} alt='galleryImage' onClick={() => this.handleClick(galleryImage.id)} className='galleryImages' src={galleryImage.image_url} />

                })}
                {/* <pre>{JSON.stringify(this.props.reduxState.pieces, null, 2)}</pre> */}
                <pre>{JSON.stringify(this.props.gallery, null, 2)}</pre>


            </div>
        )
    }
}

const mapStateToProps = (reduxState) => ({
    reduxState,
    gallery: reduxState.artistGallery
})

export default connect(mapStateToProps)(ArtistGallery);