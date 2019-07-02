import React, { Component } from 'react';
import { connect } from 'react-redux';
import './ArtistGallery.css';

class ArtistGallery extends Component {
    render() {
        return (
            <div>
                {/* {this.props.gallery.length !== 0 ?
                <>{this.props.gallery.map(galleryImage => {
                return <img src = {galleryImage.image_url}/>})} </>
            :
            <></>} */}
                 {this.props.gallery.length && this.props.gallery.map(galleryImage => {
                    return <img className='galleryImages' src = {galleryImage.image_url}/>
                })}
                {/* <pre>{JSON.stringify(this.props.reduxState.artistGallery, null, 2)}</pre> */}

            </div>
        )
    }
}

const mapStateToProps = (reduxState) => ({
    reduxState,
    gallery:reduxState.artistGallery
})

export default connect(mapStateToProps)(ArtistGallery);