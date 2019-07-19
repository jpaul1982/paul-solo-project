import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Main.css';
import image from './String_of_Pearls.jpg';

class Main extends Component {

    componentDidMount() {
        this.getArtists();
        this.getPieces();
    }
    getArtists() {
        this.props.dispatch({ type: `FETCH_ARTISTS` })
    }
    getPieces() {
        this.props.dispatch({ type: `FETCH_PIECES` })
    }
    // sends dispatch to sagas with entire artist object as payload
    handleClick = (artist) => {
        this.props.history.push('/artistDetail');
        this.props.dispatch({
            type: `SET_ARTIST_DETAIL`,
            payload: { artist }
        });
    }

    render() {
        return (
            <div>
                {this.props.reduxState.user.id === 1 ?
                    <>
                        <p id='links' className='adminLinks' onClick={() => { this.props.history.push('/comments') }}>Check Comments </p>
                        <p id='links' className='adminLinks' onClick={() => { this.props.history.push('/admin-post-piece') }}>Add New Piece</p>
                        <p id='links' className='adminLinks' onClick={() => { this.props.history.push('/admin-post-artist') }}>Add New Artist</p>
                    </>
                    :
                    <>
                    </>}

                <h1 id='emerson'>Emerson Gallery</h1>

                <div className='current'>
                    <p>Currently On View</p>
                    <p id='string'>"String of Pearls" by William Paxton</p>
                    <p>Through August 2019</p>
                </div>

                {this.props.reduxState.pieces.length &&
                    <img className='mainImage' alt='Main' src={image} />}

                <h2 id='collection'>Current Collection:</h2>

                <ul className="artistList">
                    {/* maps through list of artists to choose from with click handler 
                    attached to each li */}
                    {this.props.reduxState.artists.map((artist, i) => {
                        return (
                            <li className='links' id="artistItem" onClick={() => this.handleClick(artist)}
                                key={i}>
                                {artist.first_name + " " + artist.last_name}
                            </li>)
                    })}
                </ul>
            </div>
        )
    }
}


const mapStateToProps = (reduxState) => ({
    reduxState
})

export default connect(mapStateToProps)(Main);