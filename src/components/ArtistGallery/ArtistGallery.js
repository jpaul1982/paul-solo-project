import React, { Component } from 'react';
import { connect } from 'react-redux';
import './ArtistGallery.css';
import Dialog from '@material-ui/core/dialog';
import Grid from '@material-ui/core/Grid';
import { Redirect } from 'react-router-dom';
import Swal from 'sweetalert2';

class ArtistGallery extends Component {

    componentDidMount() {
        this.props.dispatch({ type: `FETCH_USER_DATA` })
    }
    // sets default state of isOpen
    state = {
        isOpen: false
    }

    closeDialog = () => {
        this.setState({
            isOpen: false
        })
    }
    // sends dispatch to make get request to saga with image_id of gallery item as payload, will also 
    //toggle dialog window 
    handleClick = (galleryImageId) => {
        this.setState({
            isOpen: true
        })
        this.props.dispatch({ type: `FETCH_GALLERY_SPEC`, payload: { galleryImageId } });
    }
    // sends dispatch to make put request to saga.
    handleUpdate = (galleryImage) => {
        // this requires that only user logged in with id of 1 can make this dispatch
        this.props.reduxState.user.id === 1 &&
            this.props.dispatch({ type: `UPDATE_GALLERY_ITEM`, payload: { galleryImage } });
    }
    // sends dispatch to delete item 
    handleDelete = (galleryImageId, galleryImageArtistId) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.value) {
                this.props.dispatch({ type: `DELETE_PIECE`, payload: { galleryImageId, galleryImageArtistId } })
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
            }
        })
    }

    handleBack = () => {
        this.props.dispatch({ type: `CLEAR_STATE` });
        this.props.history.push('/artistDetail');
    }

    render() {
        return (
            <div className='galleryContainer'>
                {/* makes page render by checking length of reduxState */}
                {this.props.reduxState.artistDetail.length !== 0 ?
                    <>
                        {this.props.gallery.length !== 0 && this.props.gallery.map((galleryImage, i) => {
                            return (
                                <div key={i}>
                                    <img key={i} alt='galleryImage' onClick={() => this.handleClick(galleryImage.id)} className='galleryImages' src={galleryImage.image_url} />
                                    <br />
                                    {/* requires user logged with id of 1 to delete itime */}
                                    {this.props.reduxState.user.id === 1 ?
                                        <button className='deleteButton' onClick={() => this.handleDelete(galleryImage.id, galleryImage.artist_id)}>Delete</button>
                                        :
                                        <>
                                        </>}
                                    {/* conditional statement to render piece as either available or on loan */}
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
                        {/* material UI dialog box that allows image to open in new window */}
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
                    <Redirect to='/home' />}
            </div >
        )
    }
}

const mapStateToProps = (reduxState) => ({
    reduxState,
    gallery: reduxState.artistGallery
})

export default connect(mapStateToProps)(ArtistGallery);