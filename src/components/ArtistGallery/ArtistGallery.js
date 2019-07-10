import React, { Component } from 'react';
import { connect } from 'react-redux';
import './ArtistGallery.css';
import Dialog from '@material-ui/core/dialog';
import Grid from '@material-ui/core/Grid';
import { Redirect } from 'react-router-dom';

class ArtistGallery extends Component {

    componentDidMount() {
        this.props.dispatch({ type: `FETCH_USER_DATA` })
    }

    state = {
        isOpen: false
    }

    closeDialog = () => {
        this.setState({
            isOpen: false
        })
    }

    handleClick = (galleryImageId) => {
        console.log(this.props.gallery);
        this.setState({
            isOpen: true
        })
        this.props.dispatch({ type: `FETCH_GALLERY_SPEC`, payload: { galleryImageId } });
    }

    handleUpdate = (galleryImage) => {
        this.props.reduxState.user.id === 1 &&
            this.props.dispatch({ type: `UPDATE_GALLERY_ITEM`, payload: { galleryImage } });
    }

    handleDelete = (galleryImageId, galleryImageArtistId) => {
        this.props.dispatch({ type: `DELETE_PIECE`, payload: { galleryImageId, galleryImageArtistId } })
    }

    handleBack = () => {
        this.props.history.push('/artistDetail');
    }

    render() {
        return (
            <div className='galleryContainer'>
                {this.props.reduxState.artistDetail.length !== 0 ?
                <>

                    {this.props.gallery.length !== 0 && this.props.gallery.map((galleryImage, i) => {
                            return (
                                <div>


                                    <img key={i} alt='galleryImage' onClick={() => this.handleClick(galleryImage.id)} className='galleryImages' src={galleryImage.image_url} />
                                    <br />
                                    {this.props.reduxState.user.id === 1 ?
                                        <button className='deleteButton' onClick={() => this.handleDelete(galleryImage.id, galleryImage.artist_id)}>Delete</button>
                                        :
                                        <>
                                        </>}
                                    {galleryImage.status ?
                                        <>
                                            <p className='status' onClick={() => this.handleUpdate(galleryImage)}> Available </p>
                                        </>
                                        :
                                        <>
                                            <p className='status' onClick={() => this.handleUpdate(galleryImage)}> On Loan </p>
                                        </>
                                    }
                                    
                
                        </div>

                            )
                        })
                    }

                    < Dialog id="dialog" open={this.state.isOpen} > {
                    this.props.reduxState.gallerySpec.length ?
                        <>
                            <Grid container justify='center'>
                                <Grid id='gridContainer' item xs={12}>
                                    <img onClick={this.closeDialog} className='specImg' alt='specific piece' src={this.props.reduxState.gallerySpec[0].image_url} />
                                    <p className='specText'>{this.props.reduxState.gallerySpec[0].title}</p>
                                    <p className='specText'>{this.props.reduxState.gallerySpec[0].year}</p>
                                </Grid>
                            </Grid>
                        </>
                        :
                        <>
                        </>
                }
                </Dialog>

            <p id='pageLink' onClick={this.handleBack}>Go back to Artist's Page</p>
            </>
            :
            <Redirect to ='/home'/>}
            </div >
        )
    }
}

const mapStateToProps = (reduxState) => ({
    reduxState,
    gallery: reduxState.artistGallery
})

export default connect(mapStateToProps)(ArtistGallery);