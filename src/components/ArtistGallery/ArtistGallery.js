import React, { Component } from 'react';
import { connect } from 'react-redux';
import './ArtistGallery.css';
import Dialog from '@material-ui/core/dialog';
import Grid from '@material-ui/core/Grid';



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
        // this.props.history.push('/gallerySpec');
        this.setState({
            isOpen: true
        })
        this.props.dispatch({ type: `FETCH_GALLERY_SPEC`, payload: { galleryImageId } });
    }
    
    handleUpdate = (galleryImage) => {
        console.log(galleryImage);
        this.props.reduxState.user.id === 1 &&
        this.props.dispatch({ type: `UPDATE_GALLERY_ITEM`, payload: { galleryImage } });
        
        
    }

    handleDelete = (galleryImageId, galleryImageArtistId) => {
        console.log(galleryImageId);
        this.props.dispatch({ type: `DELETE_PIECE`, payload: { galleryImageId, galleryImageArtistId } })

    }
    render() {
        return (
            <div>


                {this.props.gallery.length !== 0 && this.props.gallery.map((galleryImage, i) => {
                    return (
                        <>
                            <img key={i} alt='galleryImage' onClick={() => this.handleClick(galleryImage.id)} className='galleryImages' src={galleryImage.image_url} />

                            {this.props.reduxState.user.id === 1 ?

                                <button onClick={() => this.handleDelete(galleryImage.id, galleryImage.artist_id)}>Delete</button>
                                :
                                <>
                                </>}

                            {galleryImage.status ?
                                <>
                                    <p onClick={() => this.handleUpdate(galleryImage)}> Available </p>
                                </>
                                :
                                <>
                                    <p onClick={() => this.handleUpdate(galleryImage)}> On Loan </p>
                                </>
                            }



                        </>


                    )
                })}
                <Dialog id="dialog" open={this.state.isOpen} > {
                    this.props.reduxState.gallerySpec.length ?
                        <>
                            <Grid container justify='center'>
                                <Grid id='gridContainer' item xs={12}>

                                    <img onClick={this.closeDialog} className='specImg' alt='specific piece' src={this.props.reduxState.gallerySpec[0].image_url} />
                                    <p>{this.props.reduxState.gallerySpec[0].title}</p>
                                    <p>{this.props.reduxState.gallerySpec[0].year}</p>
                                </Grid>
                            </Grid>
                        </>
                        :
                        <>
                        </>
                }
                </Dialog>
                {/* <pre>{JSON.stringify(this.props.reduxState.pieces, null, 2)}</pre> */}
                {/* <pre>{JSON.stringify(this.props.gallery, null, 2)}</pre> */}
                {/* <pre>{JSON.stringify(this.props.reduxState.user, null, 2)}</pre> */}



            </div>
        )
    }
}

const mapStateToProps = (reduxState) => ({
    reduxState,
    gallery: reduxState.artistGallery
})

export default connect(mapStateToProps)(ArtistGallery);