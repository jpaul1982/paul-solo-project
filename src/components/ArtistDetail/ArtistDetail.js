import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './ArtistDetail.css';

class ArtistDetail extends Component {

    componentDidMount() {
        this.getArtists();
    }
    // sends dispatch to sags to retrieve artist info from database
    getArtists() {
        this.props.dispatch({ type: `FETCH_ARTISTS` })
    }
    // triggers the dispatch upon clicking div
    handleClick = (artistId) => {
        this.props.history.push('/artistGallery');
        this.props.dispatch({
            type: `FETCH_GALLERY`,
            payload: { artistId }
        });
    }

    render() {
        return (
            <div className='details'>
                {/* makes page render by checking length of reduxState */}
                {this.props.reduxState.artistDetail.length !== 0 ?
                    <>
                        <img alt='artist' className='selfie' src={this.props.artist.img_url} />
                        <div id='artistInfo'>{this.props.artist.first_name + " " + this.props.artist.last_name} </div>
                        <br />
                        <div id='artistMedium'>{this.props.artist.artist_medium} </div>
                        <br />
                        <div id='description'>{this.props.artist.description} </div>
                        <br />
                        <div id='artistGallery' onClick={() => this.handleClick(this.props.artist.id)}>View Artist's Gallery</div>
                        <br />
                    </>
                    :
                    <Redirect to='/home' />
                }
            </div>


        )
    }
}


const mapStateToProps = (reduxState) => ({
    reduxState,
    artist: reduxState.artistDetail.artist,
})

export default connect(mapStateToProps)(ArtistDetail);