import React, { Component } from 'react';
import { connect } from 'react-redux';
import './ArtistDetail.css';

class ArtistDetail extends Component {

    componentDidMount() {
        this.getSelfies();
    }

    getSelfies() {
        this.props.dispatch({ type: `FETCH_SELFIES` });
        console.log('dispatching getSelfies');
    }

    handleClick = (artistId) => {
        console.log(this.props.artist.id);
        this.props.history.push('/artistGallery');
        this.props.dispatch({
            type: `FETCH_GALLERY`,
            payload: { artistId }
        });
    }

    render() {
        return (

            <div className='details'>
                <img alt='artist image' className='selfie' src={this.props.artist.img_url} />
                <div id='artistInfo'>{this.props.artist.first_name + " " + this.props.artist.last_name} </div>
                <br />
                <div id='artistMedium'>{this.props.artist.artist_medium} </div>
                <br />
                <div id='description'>{this.props.artist.description} </div>
                <br />
                <div id='artistGallery' onClick={() => this.handleClick(this.props.artist.id)}>View Artist's Gallery</div>
                <br />


                {/* <pre>{JSON.stringify(this.props.reduxState.selfies, null, 2)}</pre> */}
                {/* <pre>{JSON.stringify(this.props.reduxState.pieces, null, 2)}</pre> */}

            </div>


        )
    }
}


const mapStateToProps = (reduxState) => ({
    reduxState,
    artist: reduxState.artistDetail.artist,
})

export default connect(mapStateToProps)(ArtistDetail);