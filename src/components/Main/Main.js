import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Main.css';
import './headStudyBougereau.jpg';

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
    handleClick = (artist) => {
        console.log(artist);
        this.props.history.push('/artistDetail');
        this.props.dispatch({
            type: `SET_ARTIST_DETAIL`,
            payload: { artist }
        });
    }

    handleComments = () => {
        this.props.history.push('/comments')
    };

    handleNewPiece = () => {
        this.props.history.push('/admin-post-piece')
    }

    render() {
        return (

            <div>
                {this.props.reduxState.user.id === 1 ?
                    <>
                        <p className='adminLinks' onClick={this.handleNewPiece}>Add New Piece </p>

                        <p className='adminLinks' onClick={this.handleComments}>Check Comments</p>

                    </>
                    :
                    <>
                    </>}
                {this.props.reduxState.artists.map((artist, i) => {
                    return <li className="artistList" onClick={() => this.handleClick(artist)}
                        key={i}>
                        {artist.first_name + " " + artist.last_name}
                    </li>
                })}

                {this.props.reduxState.pieces.length &&
                    <img className='mainImage' alt='Cosntanza' src={this.props.reduxState.pieces[18].image_url} />}
                <>
                </>
                }
            </div>
        )
    }
}


const mapStateToProps = (reduxState) => ({
    reduxState
})

export default connect(mapStateToProps)(Main);