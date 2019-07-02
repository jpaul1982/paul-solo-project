import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Main.css';

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
            type:`SET_ARTIST_DETAIL`,
            payload: {artist}
        });

    }

    render() {
        return (

            <div>
                {this.props.reduxState.artists.map(artist => {
                    return <li onClick={() => this.handleClick(artist)}
                        key={artist.id}>
                        {artist.first_name + " " + artist.last_name}
                    </li>
                })}


                          

                {this.props.reduxState.pieces.length && 
                <img src={this.props.reduxState.pieces[0].image_url}/>    }      




                {/* <pre>{JSON.stringify(this.props.reduxState.pieces, null, 2)}</pre> */}
            </div>

        )
    }
}


const mapStateToProps = (reduxState) => ({
    reduxState
})

export default connect(mapStateToProps)(Main);